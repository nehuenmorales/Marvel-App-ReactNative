import apiParams from '../../config';
import axios from 'axios';
import { ActivityIndicator, FlatList, Text, View, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import { Searchbar } from 'react-native-paper';

export default function Home() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const { ts, apikey, hash, baseURL } = apiParams;
    const [search, setSearch] = useState('');

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

    function searchCharacter() {
        if (search) {
            setLoading(true);
            axios.get(`${baseURL}/v1/public/characters`, {
                params: {
                    ts,
                    apikey,
                    hash,
                    nameStartsWith: search
                }
            })
                .then(response => setData(response.data.data.results))
                .catch(error => console.error(error))
                .finally(() => setLoading(false));
        }
    }

    return (
        <View>
            {isLoading
                ? <ActivityIndicator size="large" color="#00ff00" />
                : (
                    <View>

                        <Searchbar
                            placeholder="Search for character..."
                            onChangeText={value => setSearch(value)}
                            value={search}
                            onIconPress={searchCharacter}
                            onSubmitEditing={searchCharacter}
                        />
                        <FlatList
                            data={data}
                            keyExtractor={({ id }) => id.toString()}
                            renderItem={({ item }) => (
                                <CharacterCard
                                    id={item.id}
                                    image={`${item?.thumbnail?.path}.${item?.thumbnail.extension}`}
                                    name={item.name} />
                            )}
                        />
                    </View>
                )
            }
        </View>
    );
}