import MapView, {Marker} from "react-native-maps"
import { StyleSheet, Alert } from "react-native"
import { useState, useCallback, useLayoutEffect } from "react"

import IconButton from "../components/UI/IconButton"

function Map({navigation}) {
    const [selectedLocation, setSelectedLocation] = useState()

    const region = {
        latitude: 8.9517217,
        longitude: 38.7135861,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }

    function selectLocationHandler(event) {
        const lat = event.nativeEvent.coordinate.latitude
        const lng = event.nativeEvent.coordinate.longitude

        setSelectedLocation({lat: lat, lng: lng})
    }

    const savePickedLocationHandler = useCallback(() => {
        if(!selectedLocation) {
            Alert.alert(
                "No location picked",
                "You have to pick a location (by tapping on the map) first."
            )
            return
        }

        navigation.navigate("AddPlace", {
            pickedLat: selectedLocation.lat,
            pickedLng: selectedLocation.lng
        })

    }, [navigation, selectedLocation])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: ({tintColor}) => (
                <IconButton 
                    icon="save"
                    size={24}
                    color={tintColor}
                    onPress={savePickedLocationHandler}
                />
            )
        })
    }, [navigation, savePickedLocationHandler])

    return (
        <MapView style={styles.map} initialRegion={region} onPress={selectLocationHandler}>
            { selectedLocation && 
                <Marker coordinate={{latitude: selectedLocation.lat, longitude: selectedLocation.lng}} />
            }
        </MapView>
    )
}

export default Map

const styles = StyleSheet.create({
    map: {
        flex: 1
    }
})