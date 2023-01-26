const fs = require('fs');

export const handler = async () => {
    return {
        statusCode: 200,
        headers: {
            "Content-Type": "image/png",
        },
        body: fs.readFileSync('functions/cats/IMG_3259.jpg').toString("base64"),
        isBase64Encoded: true,
    }
}
