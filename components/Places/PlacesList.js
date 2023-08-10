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
                data={places} 
                keyExtractor={(item) => item.id} 
                renderItem={({item}) => <PlaceItem places={item} /> } 
            />
}

export default PlacesList

const styles = StyleSheet.create({
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