const GOOGLE_API_KEY = "AIzaSyCAfsqgeXzSto3_e16DiWtnGa3NDCQcGpU"

export function getMapPreview(lat, lng){
    const imagePreviewUri = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=13&size=400x200&maptype=roadmap
                            &markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`
                            // console.log(lat, lng)
    return imagePreviewUri
}