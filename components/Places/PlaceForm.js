import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";
import { useState } from "react";

import { Colors } from "../../constants/colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import Button from "../UI/Button";

function PlaceForm() {
    const [enteredTitle, setEnteredTitel] = useState("")

    function changeTitelHandler(enteredText) {
        setEnteredTitel(enteredText)
    }

    function savePlaceHandler() {

    }

    return (
        <ScrollView style={styles.form}>
            <View>
                <Text style={styles.label}>Title</Text>
                <TextInput 
                    style={styles.input} 
                    onChangeText={changeTitelHandler} 
                    value={enteredTitle} 
                />
            </View>
            <ImagePicker />
            <LocationPicker />
            <Button onPress={savePlaceHandler}>Add Place</Button>
        </ScrollView>
    )
}

export default PlaceForm

const styles = StyleSheet.create({
    form: {
        flex: 1,
        padding: 24,
    },
    label: {
        fontWeight: "bold",
        marginBottom: 4,
        color: Colors.primary500
    },
    input: {
        marginVertical: 8,
        paddingHorizontal: 4,
        paddingVertical: 8,
        fontSize: 16,
        borderBottomColor: Colors.primary700,
        borderBottomWidth: 2,
        backgroundColor: Colors.primary100
    }
})