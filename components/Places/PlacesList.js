import { FlatList, View, Text, StyleSheet } from "react-native"

import PlaceItem from "./PlaceItem"
import { Colors } from "../../constants/colors"

function PlacesList({places}) {

    if(!places || places.length === 0) {
        return (
            <View style={styles.fallBackContainer}>
                <Text style={styles.fallBackText}>No places added yet, Start adding some</Text>
            </View>
        )
    }

    return <FlatList 
                style={styles.list}
                data={places} 
                keyExtractor={(item) => item.id} 
                renderItem={({item}) => <PlaceItem places={item} /> } 
            />
}

export default PlacesList

const styles = StyleSheet.create({
    list: {
        margin: 24
    },
    fallBackContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    fallBackText: {
        fontSize: 16,
        color: Colors.primary200
    }
})