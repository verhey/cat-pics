const fs = require('fs');

const pickCat = () => {
    const basePath = "functions/cats"
    const allImages = fs.readdirSync(basePath)
    const cat = allImages[Math.floor(Math.random() * allImages.length)]

    return [basePath, cat].join("/")
}

export const handler = async () => {
    let image

    try {
        cat = pickCat()
        image = fs.readFileSync(cat)
    } catch (error) {
        console.log('error', error)
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message })
        }
    }

    return {
        statusCode: 200,
        headers: {
            "Content-Type": "image/jpg",
        },
        body: image.toString("base64"),
        isBase64Encoded: true,
    }
}
