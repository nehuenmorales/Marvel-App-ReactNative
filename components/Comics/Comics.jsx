import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, ScrollView, FlatList, _View, StyleSheet } from 'react-native';
import Comic from './CardComic.jsx';
import apiParams from '../../config.js';
import axios from 'axios';

export default function Comics({ listComics }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const { ts, apikey, hash, baseURL } = apiParams;

    useEffect(() => {
        const promisesArray = listComics.map(c => (
            axios.get(c.resourceURI, {
                params: {
                    ts,
                    apikey,
                    hash
                }
            })
        ));

        Promise.all(promisesArray)
            .then(responses => setData(responses.map(r => (
                r?.data?.data?.results[0]
            ))))
            .catch(error => console.error(error))
            .finally(() => setLoading(false));

    }, []);

    return (
        <View style={{ flex: 1 }}>
            {
                isLoading
                    ? <ActivityIndicator size="large" color="#00ff00" />
                    : <FlatList
                        // style={styles.container}
                        // contentContainerStyle={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}
                        data={data}
                        keyExtractor={({ id }) => id.toString()}
                        horizontal

                        renderItem={({ item }) => (
                            <View style={styles.container}>
                                <Comic
                                    style={styles.card}
                                    key={item.id}
                                    name={item.title}
                                    image={`${item?.thumbnail?.path}.${item.thumbnail.extension}`}
                                />
                            </View>
                        )}
                    />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        display: 'flex',
        backgroundColor: 'blue',
    },
    card: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 50
    },
    logo: {
        width: 66,
        height: 58,
    },
});