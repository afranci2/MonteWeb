import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 8000;

let churches = [
    {
        "id": 1,
        "name": "Iglesia Cristiana",
        "location": "Pawtucket",
        "description": "A church that focuses on spreading the word of God.",
        "leadPastor": "Samuel Francisco",
        "associatePastors": ["Javier Torres"],
        "services": [
            { "name": "Servicio Evangelistico", "day": "Sunday", "time": "3:00PM" },
            { "name": "Estudio Biblico", "day": "Tuesday", "time": "7:00PM" },
            { "name": "Servicio Especial", "day": "Thursday", "time": "7:30PM" }
        ],
        "socialMedia": {
            "Facebook": "https://www.facebook.com/iglesia.cristiana",
            "Instagram": "https://www.instagram.com/iglesia.cristiana",
            "YouTube": "https://www.youtube.com/channel/UCBVz1_Cristiana"
        },
        "address": "1234 Main St",
        "phone": "401-555-1234",
        "email": "info@iglesia.com"
    },
    {
        "id": 2,
        "name": "Iglesia Cristiana 2",
        "location": "Pawtucket",
        "description": "A church that focuses on spreading the word of God.",
        "leadPastor": "Isabel Francisco",
        "associatePastors": ["Javier Torres"],
        "services": [
            { "name": "Servicio Evangelistico", "day": "Sunday", "time": "3:00PM" },
            { "name": "Estudio Biblico", "day": "Tuesday", "time": "7:00PM" },
            { "name": "Servicio Especial", "day": "Thursday", "time": "7:30PM" }
        ],
        "socialMedia": {
            "Facebook": "https://www.facebook.com/iglesia2.cristiana",
            "Instagram": "https://www.instagram.com/"
        },
        "address": "1234 Main St",
        "phone": "401-555-1234",
        "email": "info@iglesia.com"
    }]

app.use(cors())

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

app.post('/donation', (req, res) => {
    console.log(req)
    res.send('Received donation');
})


app.listen(PORT, () => {
    console.log(`Server is now running on port ${PORT}`)
})