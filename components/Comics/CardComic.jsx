import react from "react"
import { View, Image, Text, StyleSheet } from "react-native"

export default function Comic({ name, image }) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.imagen}
                source={{ uri: `${image}` }}
            />
            <View style={styles.etiqueta}>
                <Text style={styles.name}>{name}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        width: 350,
        height: 600,
        borderRadius: 10,
        borderWidth: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 31

    },
    imagen: {
        display: 'flex',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 550,
        borderRadius: 10,
    },
    name: {
        display: 'flex',
        position: 'relative',
        justifyContent: 'center',
        with: '100%',

    },
    etiqueta: {

    }
});