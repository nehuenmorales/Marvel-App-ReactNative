import apiParams from '../../config';
import axios from 'axios';
import { ActivityIndicator, FlatList, Text, View, } from 'react-native';
import { useEffect, useState } from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';

export default function Home() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const { ts, apikey, hash, baseURL } = apiParams;

    useEffect(() => {
        axios.get(`${baseURL}/v1/public/characters`, {
            params: {
                ts,
                apikey,
                hash
            }
        })
            .then(response => setData(response.data.data.results))
            .catch(error => console.error(error))
            .finally(() => setLoading(false));
    }, []);


    return (
        <View>
            {isLoading
                ? <ActivityIndicator size="large" color="#00ff00" />
                : (
                    <FlatList
                        data={data}
                        keyExtractor={({ id }) => id.toString()}
                        renderItem={({ item }) => (
                            <CharacterCard
                                image={`${item?.thumbnail?.path}.${item?.thumbnail.extension}`}
                                name={item.name} />
                        )}
                    />
                )
            }
        </View>
    );
}