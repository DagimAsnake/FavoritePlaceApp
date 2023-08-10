const GOOGLE_API_KEY = "AIzaSyCAfsqgeXzSto3_e16DiWtnGa3NDCQcGpU"

export function getMapPreview(lat, lng){
    const imagePreviewUri = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=13&size=400x200&maptype=roadmap
                            &markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`
                            // console.log(lat, lng)
    return imagePreviewUri
}

export async function getAddress(lat, lng){
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`
    const response = await fetch(url)

    if(!response.ok) {
        throw new Error('Failed to fetch address')
    }
    
    const data = await response.json()
    // const address = data.results[0].formatted_address
    // return address
    return "The address"
}

// {"error_message": "You must enable Billing on the Google Cloud Project at https://console.cloud.google.com/project/_/billing/enable Learn more at https://developers.google.com/maps/gmp-get-started", "results": [], "status": "REQUEST_DENIED"}
//  WARN  Possible Unhandled Promise Rejection (id: 37):