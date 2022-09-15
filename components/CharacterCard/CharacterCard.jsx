import * as React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function CharacterCard({ image, name, id }) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            // style={styles.container}
            onPress={() => navigation.navigate('Detail', { id })}
        >
            <Image
                style={{ width: 300, height: 300 }}
                source={{ uri: `${image}` }}
            />
            {/* <Image
                style={styles.logo}
                source={{
                    uri: { image },
                }}
            /> */}
            <Text>{name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    logo: {
        width: 66,
        height: 58,
    },
});