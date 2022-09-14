import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function CharacterCard({ image, name }) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            // style={styles.container}
            onPress={() => navigation.navigate('Detail')}
        >
            <Image
                // style={styles.image}
                source={image}
            />
            <Text>{name}</Text>
        </TouchableOpacity>
    );
}