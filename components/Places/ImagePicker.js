import {View, Alert, Image, StyleSheet,Text} from "react-native"
import {launchCameraAsync, useCameraPermissions, PermissionStatus} from "expo-image-picker"
import { useState } from "react"

import { Colors } from "../../constants/colors"
import OutlinedButton from "../UI/OutlinedButton"

function ImagePicker() {
    const [pickedImage, setPickedImage] = useState()

    const [cameraPermissionInformation, requestPermission] = useCameraPermissions()

    async function verifyPermissions() {
        if(cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermission()

            return permissionResponse.granted
        }

        if(cameraPermissionInformation.status === PermissionStatus.DENIED){
            Alert.alert(
                "Insufficient Permissions",
                "You need to grant camera permissions to use this app."
            )
            return false
        }

        return true
    }

    async function takeImageHandler() {
        const hasPermission = await verifyPermissions()

        if(!hasPermission){
            return
        }

        const image = await launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.5
        })

        if (image.canceled) {
            // console.log('Image picker was canceled');
          } else if (image.error) {
            // console.log('Error occurred:', image.error);
          } else if (image.assets && image.assets.length > 0) {
            const asset = image.assets[0];
            setPickedImage(asset.uri);
            // console.log('Image picked:', asset.uri);
          } else {
            // console.log('Unknown error occurred');
          }
    }

    let imagePreview = <Text>No image taken yet.</Text>

    if(pickedImage) {
        // console.log(pickedImage)
        imagePreview = <Image style={styles.image} source={{uri: pickedImage}} />
    }

    return (
        <View>
            <View style={styles.imagePreview}>{imagePreview}</View>
            <OutlinedButton icon="camera" onPress={takeImageHandler}>Take Image </OutlinedButton>
        </View>
    )
}

export default ImagePicker

const styles = StyleSheet.create({
    imagePreview: {
        width: "100%",
        height: 200,
        marginVertical: 8,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.primary100,
        borderRadius: 4,
        overflow: "hidden"
    },
    image: {
        width: "100%",
        height: "100%"
    }
})