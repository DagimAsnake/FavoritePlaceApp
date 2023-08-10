class Place {
    constructor(title, imageUri, address, location) {
        this.title = title
        this.imageUri = imageUri
        this.address = address
        this.location = location // { lat: 1412, lng: 127.123 }
        this.id = new Date().toString() + Math.random().toString()
    }
}