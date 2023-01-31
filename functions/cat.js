const fs = require('fs');

export const handler = async () => {
    let image
    const basePath = "functions/cats"
    try {
        const allImages = fs.readdirSync(basePath)
        const cat = allImages[Math.floor(Math.random() * allImages.length)];

        console.log(cat)

        image = fs.readFileSync(`${basePath}/${cat}`)
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
