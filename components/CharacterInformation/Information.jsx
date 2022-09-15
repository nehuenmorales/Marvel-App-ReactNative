import * as React from 'react';
import { Text, View, Image } from 'react-native';


export default function Information({ image, name, description }) {
    return (
        <View >
            <Image
                style={{ width: 300, height: 300 }}
                source={{ uri: `${image}` }}
            />
            <Text >{name}</Text>
            <Text >{description}</Text>
        </View>
    )
}