const express = require('express')
const mysql = require('mysql')
const PORT = 8000;
const cors = require('cors');
const env = require('dotenv').config({ path: './.env' })
const app = express();

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)
const DB_NAME = 'MONTEDB'

const db = mysql.createConnection({
    host: `localhost`,
    user: 'root',
    password: '',
    database: 'dbmonte'
})

db.connect((error) => {
    if (error) {
        console.log(error)
    }
    else { console.log('MySql Connected') }
})



app.use(cors());
app.use(express.json()); // to parse JSON dat
app.use(express.urlencoded({ extended: true })); //

app.get('/createposttable', (req, res) => {
    let sql1 = 'CREATE TABLE IF NOT EXISTS events(id int AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), location VARCHAR(255), address VARCHAR(255), image VARCHAR(255), description TEXT, datesAndTimesId int); ';
    let sql1_2 = 'CREATE TABLE IF NOT EXISTS events_datesAndTimes (id INT AUTO_INCREMENT PRIMARY KEY,eventId INT,date VARCHAR(255),startTime VARCHAR(255),endTime VARCHAR(255));';
    let sql2 = 'CREATE TABLE IF NOT EXISTS churches(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), location VARCHAR(255), description TEXT, leadPastor VARCHAR(255), associatePastors VARCHAR(255), services TEXT, socialMedia VARCHAR(255), address VARCHAR(255), phone VARCHAR(20), email VARCHAR(255), coordinates VARCHAR(255), mainImage VARCHAR(255), supportingImages TEXT, mapLink VARCHAR(255)); '
    let sql3 = 'CREATE TABLE IF NOT EXISTS testimonials(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255), description TEXT, phone VARCHAR(20), email VARCHAR(255), images TEXT); '
    let sql4 = 'CREATE TABLE IF NOT EXISTS applications(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255), description TEXT, areaOfService TEXT, phone VARCHAR(20), email VARCHAR(255), files VARCHAR(255)); '
    db.query(sql1, (err, res) => {
        if (err) {
            console.log(err)
        }
        console.log(res)
    })
    db.query(sql1_2, (err, res) => {
        if (err) {
            console.log(err)
        }
        console.log(res)
    })
    db.query(sql2, (err, res) => {
        if (err) {
            console.log(err)
        }
        console.log(res)
    })
    db.query(sql3, (err, res) => {
        if (err) {
            console.log(err)
        }
        console.log(res)
    })
    db.query(sql4, (err, res) => {
        if (err) {
            console.log(err)
        }
        console.log(res)
    })

})

app.get('/try', (req, res) => {
    db.query("ALTER TABLE events AUTO_INCREMENT = 1;", (err, res) => {
        if (err) {
            console.log(err)
        }
        console.log(res)
    })

    db.query("INSERT INTO events(name, location, address, image, description) VALUES ('Congreso', 'New Location', '1234 New Street', 'https://...', 'New event description');", (err, res) => {
        if (err) {
            console.log(err)
        }
        console.log(res)
    })
    db.query("ALTER TABLE events_datesAndTimes AUTO_INCREMENT = 1;", (err, res) => {
        if (err) {
            console.log(err)
        }
        console.log(res)
    })


    db.query("ALTER TABLE events_datesAndTimes ADD CONSTRAINT fk_events FOREIGN KEY (eventId) REFERENCES events(id) ON DELETE CASCADE;", (err, res) => {
        if (err) {
            console.log(err)
        }
        console.log(res)
    })


    db.query("SET @event_id = LAST_INSERT_ID();", (err, res) => {
        if (err) {
            console.log(err)
        }
        console.log(res)
    })

    db.query("INSERT INTO events_datesAndTimes(eventId, date, startTime, endTime)VALUES(@event_id, '2023-04-01', '7:30PM', '10:00PM'), (@event_id, '2023-04-02', '6:00PM', '8:30PM');", (err, res) => {
        if (err) {
            console.log(err)
        }
        console.log(res)
    })




})

app.get('/get-event/:id', (req, response) => {


    db.query(`SELECT * FROM events WHERE id = ${req.params.id};`, (err, res) => {
        if (err) {
            console.log(err)
        }
        console.log(res)
    })
    db.query(`SELECT * FROM events_datesAndTimes WHERE eventId = ${req.params.id};`, (err, res) => {
        if (err) {
            console.log(err)
        }
        console.log(res)
    })


})

app.get('get-db', (req, res) => {
    let sql = 'select * from persons'
    db.query(sql, function (error, results) {
        if (error) {
            response.status(400).send('Error in database operation');
        } else {
            response.send(results);
        }
    });
})

app.post('/create-new-post-table', (req, res) => {
    const sql = req.body.query;
    db.query(sql, (err, res) => {
        if (err) {
            console.log(err)
        }
        console.log(res)
    })

})

let events = [
    {
        id: 0,
        name: "5wefwfq0 anniversary",
        location: "Sede Central",
        address: "155 Power Rd., Pawtucket, RI, 02860, US",
        datesAndTimes: [{
            date: "05/04/23",
            startTime: "7:30PM",
            endTime: "7:30PM"
        },
        {
            "date": "05/05/23",
            "startTime": ["7:30P"],
            "endTime": ["7:30PM"],
        },
        ],
        services: [
            { name: "Servicio Evangelistico", day: "Sunday", time: "3:00PM" },
            { name: "Estudio Biblico", day: "Tuesday", time: "7:00PM" },
            { name: "Servicio Especial", day: "Thursday", time: "7:30PM" },
        ],
        image: "",
        description: "ewfwrefgwrg"
    },
    {
        id: 1,
        name: "5wefwfq0 anniversary",
        location: "Sede Central",
        address: "155 Power Rd., Pawtucket, RI, 02860, US",
        datesAndTimes: [{
            date: "05/04/23",
            startTime: "7:30PM",
            endTime: "7:30PM"
        },
        {
            "date": "05/05/23",
            "startTime": ["7:30P"],
            "endTime": ["7:30PM"],
        },
        ],
        services: [
            { name: "Servicio Evangelistico", day: "Sunday", time: "3:00PM" },
            { name: "Estudio Biblico", day: "Tuesday", time: "7:00PM" },
            { name: "Servicio Especial", day: "Thursday", time: "7:30PM" },
        ],
        image: "https://....",
        description: "ewfwrefgwrg"
    },
    {
        id: 2,
        name: "5wefwfq0 anniversary",
        location: "Sede Central",
        address: "155 Power Rd., Pawtucket, RI, 02860, US",
        datesAndTimes: [{
            date: "05/04/23",
            startTime: "7:30PM",
            endTime: "7:30PM"
        },
        {
            "date": "05/05/23",
            "startTime": ["7:30P"],
            "endTime": ["7:30PM"],
        },
        ],
        services: [
            { name: "Servicio Evangelistico", day: "Sunday", time: "3:00PM" },
            { name: "Estudio Biblico", day: "Tuesday", time: "7:00PM" },
            { name: "Servicio Especial", day: "Thursday", time: "7:30PM" },
        ],
        image: "",
        description: "ewfwrefgwrg"
    },
    {
        id: 3,
        name: "5wefwfq0 anniversary",
        location: "Sede Central",
        address: "155 Power Rd., Pawtucket, RI, 02860, US",
        datesAndTimes: [{
            date: "05/04/23",
            startTime: "7:30PM",
            endTime: "7:30PM"
        },
        {
            "date": "05/05/23",
            "startTime": ["7:30P"],
            "endTime": ["7:30PM"],
        },
        ],
        services: [
            { name: "Servicio Evangelistico", day: "Sunday", time: "3:00PM" },
            { name: "Estudio Biblico", day: "Tuesday", time: "7:00PM" },
            { name: "Servicio Especial", day: "Thursday", time: "7:30PM" },
        ],
        image: "",
        description: "ewfwrefgwrg"
    },
    {
        id: 4,
        name: "5wefwfq0 anniversary",
        location: "Sede Central",
        address: "155 Power Rd., Pawtucket, RI, 02860, US",
        datesAndTimes: [{
            date: "05/04/23",
            startTime: "7:30PM",
            endTime: "7:30PM"
        },
        {
            "date": "05/05/23",
            "startTime": ["7:30P"],
            "endTime": ["7:30PM"],
        },
        ],
        services: [
            { name: "Servicio Evangelistico", day: "Sunday", time: "3:00PM" },
            { name: "Estudio Biblico", day: "Tuesday", time: "7:00PM" },
            { name: "Servicio Especial", day: "Thursday", time: "7:30PM" },
        ],
        image: "",
        description: "ewfwrefgwrg"
    },
    {
        id: 5,
        name: "5wefwfq0 anniversary",
        location: "Sede Central",
        address: "155 Power Rd., Pawtucket, RI, 02860, US",
        datesAndTimes: [{
            date: "05/04/23",
            startTime: "7:30PM",
            endTime: "7:30PM"
        },
        {
            "date": "05/05/23",
            "startTime": ["7:30P"],
            "endTime": ["7:30PM"],
        },
        ],
        services: [
            { name: "Servicio Evangelistico", day: "Sunday", time: "3:00PM" },
            { name: "Estudio Biblico", day: "Tuesday", time: "7:00PM" },
            { name: "Servicio Especial", day: "Thursday", time: "7:30PM" },
        ],
        image: "",
        description: "ewfwrefgwrg"
    },
    {
        id: 6,
        name: "5wefwfq0 anniversary",
        location: "Sede Central",
        address: "155 Power Rd., Pawtucket, RI, 02860, US",
        datesAndTimes: [{
            date: "05/04/23",
            startTime: "7:30PM",
            endTime: "7:30PM"
        },
        {
            "date": "05/05/23",
            "startTime": ["7:30P"],
            "endTime": ["7:30PM"],
        },
        ],
        services: [
            { name: "Servicio Evangelistico", day: "Sunday", time: "3:00PM" },
            { name: "Estudio Biblico", day: "Tuesday", time: "7:00PM" },
            { name: "Servicio Especial", day: "Thursday", time: "7:30PM" },
        ],
        image: "",
        description: "ewfwrefgwrg"
    },
]

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
            supporting: ["https://monte-assets.s3.amazonaws.com/new-image/MS+WEBPAGE/MS+Building+Session/DSC_1662.jpg", "", ""]
        },
        mapLink: "https://www.google.com/maps/dir/41.8110146,-71.418062/155+Power+Rd,+Pawtucket,+RI+02860/"
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
        mapLink: "https://www.google.com/maps/dir/41.8110146,-71.418062/155+Power+Rd,+Pawtucket,+RI+02860/"
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
        mapLink: "https://www.google.com/maps/dir/41.8110146,-71.418062/155+Power+Rd,+Pawtucket,+RI+02860/"
    },

];

let testimonials = []

let applications = []

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

app.get("/iglesias2/:id", (request, response) => {
    let sql = `SELECT * FROM churches WHERE location="${request.params.id}"`
    let query = db.query(sql, (err, results) => {
        if (err) {
            console.log(err)
        }
        console.log(results)
        response.json(results)
    })
})

app.get("/eventos", (request, response) => {
    response.json(events)
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