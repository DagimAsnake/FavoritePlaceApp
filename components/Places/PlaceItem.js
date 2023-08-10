import { View, Pressable, Text, StyleSheet, Image } from "react-native"

function PlaceItem({places, onSelect}) {
    return (
        <Pressable onPress={onSelect}>
            <Image source={{uri: places.imageUri}} />
            <View>
                <Text>{places.title}</Text>
                <Text>{places.address}</Text>
            </View>
        </Pressable>
    )
}

export default PlaceItem

const styles = StyleSheet.create({
    
})