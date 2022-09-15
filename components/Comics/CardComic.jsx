import react from "react"
import { View, Image, Text } from "react-native"

export default function Comic({ name, image }) {
    return (
        <View style={{ margin: 50 }}>
            <Image
                style={{ width: '100%', height: '100%' }}
                source={{ uri: `${image}` }}
            />
            <Text>{name}</Text>
        </View>
    )
}