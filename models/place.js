export class Place {
    constructor(title, imageUri, location, id) {
        this.title = title
        this.imageUri = imageUri
        this.address = location.address
        this.location = {lat: location.lat, lng: location.lng} // { lat: 1412, lng: 127.123 }
        this.id = id
    }
}