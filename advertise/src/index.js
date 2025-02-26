const express = require('express');
const amqp = require('amqplib');

if (!process.env.PORT) {
    throw new Error("Please specify the port number for the HTTP server with the environment variable PORT.");
}

if (!process.env.DBHOST) {
    throw new Error("Please specify the name of the database host using environment variable DBHOST");
}

if (!process.env.DBNAME) {
    throw new Error("Please specify the name of the database using environment variable DBNAME");
}

if (!process.env.RABBIT) {
    throw new Error("Please specify the name of the RabbitMQ host using environment variable RABBIT");
}

const PORT = process.env.PORT;
const RABBIT = process.env.RABBIT;
const DBHOST = process.env.DBHOST;
const DBNAME = process.env.DBNAME;

// Advertisement data
const advertisements = [
    { "id": 1, "imageUrl": "https://mallika.co.th/wp-content/uploads/2023/08/logo-Shopee.jpg", "link": "https://shopee.com" },
    { "id": 2, "imageUrl": "https://mallika.co.th/wp-content/uploads/2023/08/logo-lazada.jpg", "link": "https://lazada.com" },
    { "id": 3, "imageUrl": "https://ast.kaidee.com/blackpearl/v15.2.47/kaidee/images/kaidee-profile.jpg", "link": "https://kaidee.com" }
];

async function main() {

    const app = express();
    app.use(express.json());

    app.get('/advertisements', (req, res) => {
        res.json(advertisements);
    });

    app.listen(PORT, () => {
        console.log(`Advertise service is listening at http://localhost:${PORT}`);
    });
}

main().catch(err => {
    console.error("Microservice failed to start.");
    console.error(err && err.stack || err);
});
