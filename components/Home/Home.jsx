import apiParams from '../../config';
import axios from 'axios';
import { ActivityIndicator, FlatList, Text, View, ScrollView, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import CharacterCard from '../CharacterCard/CharacterCard';
import { Searchbar } from 'react-native-paper';

export default function Home() {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const { ts, apikey, hash, baseURL } = apiParams;
    const [search, setSearch] = useState('');
    const [firstItem, setFirstItem] = useState(0);

    console.log('soy firstitem', firstItem)

    useEffect(() => {
        axios.get(`${baseURL}/v1/public/characters?limit=19&offset=${firstItem}`, {
            params: {
                ts,
                apikey,
                hash
            }
        })
            .then(response => setData([...data, ...response.data.data.results]))
            .catch(error => console.error(error))
            .finally(() => setLoading(false));
    }, [firstItem]);


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

    const renderLoader = () => {
        return (
            <View>
                <ActivityIndicator size='large' color='#aaa' />
            </View>
        )
    }

    const loadMoreItem = () => {
        console.log('estoy setiando el numero')
        setFirstItem(firstItem + 20)
    }

    return (
        <View style={styles.container}>
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
                                    style={styles.card}
                                    id={item.id}
                                    image={`${item?.thumbnail?.path}.${item?.thumbnail.extension}`}
                                    name={item.name} />
                            )}
                            ListFooterComponent={renderLoader}
                            onEndReached={loadMoreItem}
                            onEndReachedThreshold={1}
                        />
                    </View>
                )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 100,

    },
    card: {
        shadowOffset: { width: -2, height: 4 },
        shadowColor: '#52006A',
        elevation: 20,
        shadowOpacity: 0.2,
        shadowRadius: 3,
    }
});