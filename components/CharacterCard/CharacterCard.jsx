import * as React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';

export default function CharacterCard({ image, name, id }) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.navigate('Detail', { id })}
        >
            <Image
                style={styles.imagen}
                source={{ uri: `${image}` }}
            />
            {/* <Image
                style={styles.logo}
                source={{
                    uri: { image },
                }}
            /> */}
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{name}</Text>
            <AntDesign style={styles.icon} name="infocirlce" size={24} color="#000" />

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        // width: '95%',
        height: 100,
        borderRadius: 10,
        borderWidth: 2,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden',

    },
    imagen: {
        width: 100,
        height: 100,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        marginRight: 15,
    },
    logo: {
        width: 66,
        height: 58,
    },
    icon: {
        marginLeft: 'auto',
        marginRight: 10
    }
});