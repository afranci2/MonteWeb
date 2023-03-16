const express = require('express')
const cors = require('cors');
const env = require('dotenv').config({ path: './.env' })

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

const app = express();
const PORT = 8000;
app.use(cors());
app.use(express.json()); // to parse JSON data
app.use(express.urlencoded({ extended: true })); //

let churches = [
    {
        id: 1,
        name: "Sede Central",
        location: "Pawtucket",
        description: "A church that focuses on spreading the word of God.",
        leadPastor: "Samuel Francisco",
        associatePastors: ["Javier Torres"],
        services: [
            { name: "Servicio Evangelistico", day: "Sunday", time: "3:00PM" },
            { name: "Estudio Biblico", day: "Tuesday", time: "7:00PM" },
            { name: "Servicio Especial", day: "Thursday", time: "7:30PM" },
        ],
        socialMedia: {
            Facebook: "https://www.facebook.com/iglesia.cristiana",
            Instagram: "https://www.instagram.com/iglesia.cristiana",
            YouTube: "https://www.youtube.com/channel/UCBVz1_Cristiana",
        },
        address: "1234 Main St",
        phone: "401-555-1234",
        email: "info@iglesia.com",
        coordinates: {
            lat: 41.86482006659902,
            lng: -71.41359964022818,
        },
        images: {
            main: "https://monte-assets.s3.amazonaws.com/new-image/MS+WEBPAGE/MS+Building+Session/DSC_1662.jpg",
            supporting: ["", "", ""]
        },
        mapLink:"https://www.google.com/maps/dir/41.8110146,-71.418062/155+Power+Rd,+Pawtucket,+RI+02860/"
    },
    {
        id: 2,
        name: "Iglesia Cristiana 2",
        location: "Pawtucket",
        description: "A church that focuses on spreading the word of God.",
        leadPastor: "Isabel Francisco",
        associatePastors: ["Javier Torres"],
        services: [
            { name: "Servicio Evangelistico", day: "Sunday", time: "3:00PM" },
            { name: "Estudio Biblico", day: "Tuesday", time: "7:00PM" },
            { name: "Servicio Especial", day: "Thursday", time: "7:30PM" },
        ],
        socialMedia: {
            Facebook: "https://www.facebook.com/iglesia2.cristiana",
            Instagram: "https://www.instagram.com/",
        },
        address: "1234 Main St",
        phone: "401-555-1234",
        email: "info@iglesia.com",
        coordinates: {
            lat: 41.84142288169135, lng: -71.47616923108586
        },
        images: {
            main: "https://monte-assets.s3.amazonaws.com/new-image/MS+WEBPAGE/MS+Building+Session/DSC_5188.jpg",
            supporting: ["", "", ""]
        },
        mapLink:"https://www.google.com/maps/dir/41.8110146,-71.418062/155+Power+Rd,+Pawtucket,+RI+02860/"
    },
    {
        id: 3,
        name: "New Bedford",
        location: "New Bedford",
        description: "A church that focuses on spreading the word of God.",
        leadPastor: "Isabel Francisco",
        associatePastors: ["Javier Torres"],
        services: [
            { name: "Servicio Evangelistico", day: "Sunday", time: "3:00PM" },
            { name: "Estudio Biblico", day: "Tuesday", time: "7:00PM" },
            { name: "Servicio Especial", day: "Thursday", time: "7:30PM" },
        ],
        socialMedia: {
            Facebook: "https://www.facebook.com/iglesia2.cristiana",
            Instagram: "https://www.instagram.com/",
        },
        address: "1234 Main St",
        phone: "401-555-1234",
        email: "info@iglesia.com",
        coordinates: {
            lat: 41.65690967390518, lng: -70.92700191534158
        },
        images: {
            main: "https://monte-assets.s3.amazonaws.com/new-image/MS+WEBPAGE/MS+Building+Session/DSC_1662.jpg",
            supporting: ["", "", ""]
        },
        mapLink:"https://www.google.com/maps/dir/41.8110146,-71.418062/155+Power+Rd,+Pawtucket,+RI+02860/"
    }
];


function convertPaymentAmount(amount) {
    console.log(amount)
    console.log(parseFloat(amount) * 100)
    return parseFloat(amount) * 100
}

app.get("/", (req, res) => {
    res.send(`<!DOCTYPE html>
        <html>
          <head>
            <title>Monte Server</title>
          </head>
          <body>
            <h1>Monte Server</h1>
            <p>${`Server is now running on port ${PORT}`}</p>
          </body>
        </html>`

    )

})

app.get("/iglesias", (request, response) => {
    response.json(churches)
})

app.get("/admin", (request, response) => {
    response.json()
})

app.post('/create-payment-intent', async (req, res) => {
    const amount = req.body.amount;
    console.log(`Received amount of $${amount}`);

    const newAmount = convertPaymentAmount(amount)
    console.log(`Received converted amount of $${newAmount}`);

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: newAmount,
            currency: 'usd',
            automatic_payment_methods: { enabled: true },
            receipt_email: req.body.email,
            payment_method: req.body.paymentMethod
        })

        res.send({
            clientSecret: paymentIntent.client_secret,
            response: `Received amount of $${newAmount}`
        })
    } catch (error) {
        res.send(error)
        console.log(error)
    }
});

app.get('/donation/config', (req, res) => {
    res.send({
        publishableKey: process.env.STRIPE_PUBLISHABLE_KEY
    })
})

app.listen(PORT, () => {
    console.log(`Server is now running on port ${PORT}`)
})