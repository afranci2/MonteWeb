const express = require('express')
const mysql = require('mysql')
const PORT = 8000;
const cors = require('cors');
const env = require('dotenv').config({ path: './.env' })
const app = express();

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)
const DB_NAME = 'MONTEDB'

const db = mysql.createConnection({
    host: `monte.cluster-crrmrmm19nia.us-east-1.rds.amazonaws.com`,
    port: '3306',
    user: 'admin',
    password: 'Franc15c0!',

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

app.get('/create-tables', (req, res) => {
    let queries = ['DROP DATABASE IF EXISTS db_monte',
        'CREATE DATABASE db_monte', 'USE db_monte',
        'CREATE TABLE IF NOT EXISTS events(id int AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), location VARCHAR(255) UNIQUE, address VARCHAR(255), image VARCHAR(255), description TEXT); ',
        'CREATE TABLE IF NOT EXISTS events_dates_and_times (id INT AUTO_INCREMENT PRIMARY KEY,event_id INT NOT NULL,date VARCHAR(255),start_time VARCHAR(255),end_time VARCHAR(255), FOREIGN KEY (event_id) REFERENCES events(id) ON DELETE CASCADE);',
        'CREATE TABLE IF NOT EXISTS churches(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) UNIQUE, location VARCHAR(255), description TEXT, address VARCHAR(255), coordinates TEXT ,phone VARCHAR(20), email VARCHAR(255), map_link VARCHAR(255)); ',
        'CREATE TABLE IF NOT EXISTS churches_pastors (id INT AUTO_INCREMENT PRIMARY KEY,church_id INT NOT NULL, title VARCHAR(255), position VARCHAR(255), last_name VARCHAR(255), first_name VARCHAR(255) UNIQUE, bio TEXT, main BOOLEAN NOT NULL DEFAULT FALSE, FOREIGN KEY (church_id) REFERENCES churches(id) ON DELETE CASCADE);',
        'CREATE TABLE IF NOT EXISTS churches_socials (id INT AUTO_INCREMENT PRIMARY KEY,church_id INT NOT NULL, name VARCHAR(255), link TEXT, FOREIGN KEY (church_id) REFERENCES churches(id) ON DELETE CASCADE);',
        'CREATE TABLE IF NOT EXISTS churches_images (id INT AUTO_INCREMENT PRIMARY KEY, church_id INT NOT NULL, source TEXT, is_main BOOLEAN NOT NULL DEFAULT FALSE, FOREIGN KEY (church_id) REFERENCES churches(id) ON DELETE CASCADE);',
        'CREATE TABLE IF NOT EXISTS churches_services(id INT AUTO_INCREMENT PRIMARY KEY,church_id INT NOT NULL, name VARCHAR(255), day VARCHAR(255), start_time VARCHAR(100), end_time VARCHAR(100), FOREIGN KEY (church_id) REFERENCES churches(id) ON DELETE CASCADE); '];
    let sql3 = 'CREATE TABLE IF NOT EXISTS testimonials(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255), description TEXT, phone VARCHAR(20), email VARCHAR(255), images TEXT); '
    let sql4 = 'CREATE TABLE IF NOT EXISTS applications(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255), description TEXT, areaOfService TEXT, phone VARCHAR(20), email VARCHAR(255), files VARCHAR(255)); '

    for (let i = 0; i < queries.length; i++) {
        db.query(queries[i], (err, res) => {
            if (err) {
                console.log(err)
                console.log(`Query ${i} was not completed successfully`)
            }
            console.log(res)
            console.log(`Query ${i} was completed successfully`)

        })
    }
})

app.post('/add-event', (req, res) => {
    const { event, event_dates_and_times } = req.body;

    db.query("USE db_monte", (err, res) => {
        if (err) {
            console.log(err)
        }
        console.log(res)
    })
    db.query("ALTER TABLE events AUTO_INCREMENT = 1;", (err, res) => {
        if (err) {
            console.log(err)
        }
        console.log(res)
    })
    db.query("ALTER TABLE events_dates_and_times AUTO_INCREMENT = 1;", (err, res) => {
        if (err) {
            console.log(err)
        }
        console.log(res)
    })
    db.query("ALTER TABLE events_services AUTO_INCREMENT = 1;", (err, res) => {
        if (err) {
            console.log(err)
        }
        console.log(res)
    })


    db.query("INSERT INTO events(name, location, address, image, description) VALUES (?, ?, ?, ?, ?);", [event.name, event.location, event.address, event.image, event.description], (err, res) => {
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
        console.log("done")
    })

    for (let i = 0; i < event_dates_and_times.length; i++) {
        db.query("INSERT INTO events_dates_and_times(event_id, date, start_time, end_time)VALUES(@event_id, ?, ?, ?);", [event_dates_and_times[i].date, event_dates_and_times[i].start_time, event_dates_and_times[i].end_time], (err, res) => {
            if (err) {
                console.log(err)
                console.log(`Event ${i} was not added successfully`)

            }
            console.log(res)
            console.log("done2")
            console.log(`Event ${i} added successfully`)


        })
    }

})

app.get('/add-dummy-event', (req, res) => {
    db.query("USE db_monte", (err, res) => {
        if (err) {
            console.log(err)
        }
        console.log(res)
    })
    db.query("ALTER TABLE events AUTO_INCREMENT = 1;", (err, res) => {
        if (err) {
            console.log(err)
        }
        console.log(res)
    })
    db.query("ALTER TABLE events_dates_and_times AUTO_INCREMENT = 1;", (err, res) => {
        if (err) {
            console.log(err)
        }
        console.log(res)
    })


    db.query("INSERT INTO events(name, location, address, image, description) VALUES (?, ?, ?, ?, ?);", ["Second event",
        "Providnce", "155 Power Road", "http...", "a super fun event"], (err, res) => {
            if (err) {
                console.log(err)
                console.log("Event not added successfully...")

            }
            console.log(res)
            console.log("Event added successfully!")

        })

    db.query("SET @event_id = LAST_INSERT_ID();", (err, res) => {
        if (err) {
            console.log(err)
            console.log("Didnt get the last inser id")

        }
        console.log(res)
        console.log("Got last inser id")
    })

    let event_dates_and_times = [{
        date: "10/04/23",
        start_time: "7:30PM",
        end_time: "8:30PM"

    }, {
        date: "10/05/23",
        start_time: "7:00PM",
        end_time: "9:30PM"

    }]

    for (let i = 0; i < event_dates_and_times.length; i++) {
        db.query("INSERT INTO events_dates_and_times(event_id, date, start_time, end_time)VALUES(@event_id, ?, ?, ?);",
            [event_dates_and_times[i].date, event_dates_and_times[i].start_time, event_dates_and_times[i].end_time], (err, res) => {
                if (err) {
                    console.log(err)
                    console.log(`Event date and time ${i} was not added successfully`)

                }
                console.log(res)
                console.log("done2")
                console.log(`Event date and time ${i} added successfully`)
            })
    }

})


app.delete('/delete-event/:id', (req, res) => {
    const eventId = req.params.id;
    db.query("USE db_monte", function (error, results) {
        if (error) {
            console.log('Error in database operation');
        } else {
            console.log(results);
        }
    });
    db.query(`DELETE FROM events WHERE id = ${eventId}`, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send('An error occurred while deleting the event.');
        }

        if (result.affectedRows === 0) {
            return res.status(404).send('Event not found.');
        }

        return res.send(`Event with ID ${eventId} deleted successfully.`);
    });
});
app.delete('/delete-event-dates-and-times/:id', (req, res) => {
    const eventId = req.params.id;
    db.query("USE db_monte", function (error, results) {
        if (error) {
            console.log('Error in database operation');
        } else {
            console.log(results);
        }
    });
    db.query(`DELETE FROM events_dates_and_times WHERE id = ${eventId}`, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send('An error occurred while deleting the event.');
        }

        if (result.affectedRows === 0) {
            return res.status(404).send('Event not found.');
        }

        return res.send(`Event date and time with ID ${eventId} deleted successfully.`);
    });
});

app.put('/update-event/:id', (req, res) => {
    const { name, location, address, image, description } = req.body;
    const eventId = req.params.id;
    const sql = `UPDATE events SET 
    name = COALESCE(?, name), 
    location = COALESCE(?, location),
     address = COALESCE(?, address),
     image = COALESCE(?, image), 
     description = COALESCE(?, description) 
     WHERE id = ?`;
    db.query("USE db_monte", function (error, results) {
        if (error) {
            console.log('Error in database operation');
        } else {
            console.log(results);
        }
    });
    db.query(sql, [name, location, address, image, description, eventId], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error updating event.");
        } else {
            console.log(result);
            res.status(200).send("Event updated successfully.");
        }
    });
});
app.put('/update-event-dates-and-times/:id', (req, res) => {
    const { date, start_time, end_time } = req.body;
    const eventId = req.params.id;
    const sql = `UPDATE events_dates_and_times SET 
    date = COALESCE(?, date), 
    start_time = COALESCE(?, start_time), 
    end_time = COALESCE(?, end_time), 
    WHERE event_id = ?`;
    db.query("USE db_monte", function (error, results) {
        if (error) {
            console.log('Error in database operation');
        } else {
            console.log(results);
        }
    });
    db.query(sql, [date, start_time, end_time, eventId], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error updating event.");
        } else {
            console.log(result);
            res.status(200).send("Event date and time updated successfully.");
        }
    });
});

app.get('/get-event/:id', (req, response) => {
    db.query(`SELECT * FROM events WHERE id = ${req.params.id};`, (err, res) => {
        if (err) {
            console.log(err)
        }
        console.log(res)
        response.send(res)

    })
})
app.get('/get-event-dates-and-times/:id', (req, response) => {

    db.query(`SELECT * FROM events_dates_and_times WHERE event_id = ${req.params.id};`, (err, res) => {
        if (err) {
            console.log(err)
        }
        console.log(res)
        response.send(res)
    })

})

app.get('/get-all-events', async (req, res) => {
    let sql = 'SELECT * FROM events';
    db.query("USE db_monte", function (error, results) {
        if (error) {
            console.log('Error in database operation');
        } else {
            console.log(results);
        }
    });
    db.query(sql, function (error, results) {
        if (error) {
            console.log('Error in database operation');
            res.send("Error!")

        } else {
            res.json(results);

        }
    });
});
app.get('/get-all-events-dates-and-times', async (req, res) => {
    let sql = 'SELECT * FROM events_dates_and_times';
    db.query("USE db_monte", function (error, results) {
        if (error) {
            console.log('Error in database operation');
        } else {
            console.log(results);
        }
    });
    db.query(sql, function (error, results) {
        if (error) {
            console.log('Error in database operation');
        } else {
            res.json(results);
        }
    });
});




app.post('/add-church', (req, res) => {
    const { church, church_pastors, church_socials, church_images, church_services } = req.body;

    db.query("USE db_monte", function (error, results) {
        if (error) {
            console.log('Error in database operation');
        } else {
            console.log(results);
        }
    });
    db.query("ALTER TABLE churches AUTO_INCREMENT = 1;", (err, res) => {
        if (err) {
            console.log(err)
        }
        console.log(res)
    })

    db.query("INSERT INTO churches(name, location, description, address, coordinates, phone, email, map_link) VALUES (?, ?, ?,?,?,?,?,?);", [church.name, church.location, church.description, church.address, church.coordinates, church.phone, church.email, church.map_link], (err, result) => {
        if (err) {
            console.log(err)
            res.send("Error!")
            console.log("Church not added")


        } else {
            console.log(result)
            console.log("FIRST DONE")
            console.log("Church added")

        }

    })

    db.query("SET @church_id = LAST_INSERT_ID();", (err, res) => {
        if (err) {
            console.log(err)
        }
        console.log(res)
        console.log("done")
    })

    for (let i = 0; i < church_pastors.length; i++) {
        db.query("INSERT INTO churches_pastors(church_id, title, position, last_name, first_name, bio, main) VALUES (@church_id, ?, ?,?, ?, ?, ?)", [church_pastors[i].title, church_pastors[i].position, church_pastors[i].last_name, church_pastors[i].first_name, church_pastors[i].bio, church_pastors[i].main], (err, result) => {
            if (err) {
                console.log(err)
                res.send("Error!")
                console.log(`Church pastor ${1} error while adding`)


            }
            else {
                console.log(result)
                console.log("SECOND DONE")
                console.log(`Church pastor ${1} done`)

            }

        })
    }

    for (let i = 0; i < church_socials.length; i++) {
        db.query("INSERT INTO churches_socials(church_id, name, link) VALUES (@church_id, ?, ?)", [church_socials[i].name, church_socials[i].link], (err, result) => {
            if (err) {
                console.log(err)
                res.send("Error!")
                console.log(`Church socials ${1} error while adding`)


            }
            console.log(result)
            console.log("THID DONE")
            console.log(`Church social ${1} done`)


        })
    }

    for (let i = 0; i < church_images.length; i++) {
        db.query("INSERT INTO churches_images(church_id, source, is_main) VALUES (@church_id, ?, ?);", [church_images[i].source, church_images[i].is_main], (err, result) => {
            if (err) {
                console.log(err)
                res.send("Error!")
                console.log(`Church image ${1} error while adding`)


            }
            console.log(result)
            console.log("FOURTH DONE")
            console.log(`Church image ${1} done`)


        })
    }

    for (let i = 0; i < church_services.length; i++) {
        db.query("INSERT INTO churches_services(church_id, name, day, start_time, end_time) VALUES (@church_id, ?, ?, ?, ?);", [church_services[i].name, church_services[i].day, church_services[i].start_time, church_services[i].end_time], (err, result) => {
            if (err) {
                console.log(err)
                res.send("Error!")
                console.log(`Church service ${1} done`)


            }
            console.log(result)
            console.log("FIFTH DONE")
            console.log(`Church service ${1} error while adding`)


        })
    }


})

app.get('/add-dummy-church', (req, res) => {
    db.query("USE db_monte", function (error, results) {
        if (error) {
            console.log('Error in database operation');
        } else {
            console.log(results);
        }
    });
    db.query("ALTER TABLE churches AUTO_INCREMENT = 1;", (err, res) => {
        if (err) {
            console.log(err)
        }
        console.log(res)
    })
    let church = {
        name: "Sede Central",
        location: "Pawtucket",
        description: "A nice church",
        address: "155 Power Rd",
        coordinates: "23432.21341,12342134.431",
        phone: "401342414",
        email: "anthony.frwfaadfw@fqwef",
        map_link: "https...."
    }
    let church_pastors = [{
        title: "Rev",
        position: "Lead Pastor",
        last_name: "Francisco",
        first_name: "Samuel",
        bio: "mpwrfkwmrf",
        main: "TRUE",
    },
    {
        title: "Rev",
        position: "Lead Pastor",
        last_name: "Francisco",
        first_name: "Isabel",
        bio: "mpwrfkwmrf",
        main: "FALSE",
    }
    ]

    let church_socials = [{
        name: "Twitter",
        link: "http..."
    },
    {
        name: "facebook",
        link: "http..."
    }]

    let church_images = [{
        source: "https..wef",
        is_main: "TRUE"
    },
    {
        source: "https...",
        is_main: "FALSE"
    },
    {
        source: "https...",
        is_main: "FALSE"
    }]

    let church_services = [{
        name: "Servicio evangelistico",
        day: "Martes",
        start_time: "7:30PM",
        end_time: "9:30PM"
    },
    {
        name: "estudio biblico",
        day: "Lunes",
        start_time: "8:30PM",
        end_time: "9:30PM"
    }]

    db.query("INSERT INTO churches(name, location, description, address, coordinates, phone, email, map_link) VALUES (?, ?, ?,?,?,?,?,?);",
        [
            church.name,
            church.location,
            church.description,
            church.address,
            church.coordinates,
            church.phone,
            church.email,
            church.map_link], (err, result) => {
                if (err) {
                    console.log(err)
                    res.send("Error!")
                    console.log("Church not added")


                } else {
                    console.log(result)
                    console.log("FIRST DONE")
                    console.log("Church added")

                }

            })

    db.query("SET @church_id = LAST_INSERT_ID();", (err, res) => {
        if (err) {
            console.log(err)
        }
        console.log(res)
        console.log("done")
    })

    for (let i = 0; i < church_pastors.length; i++) {
        db.query("INSERT INTO churches_pastors(church_id, title, position, last_name, first_name, bio, main) VALUES (@church_id, ?, ?,?, ?, ?, ?)", [church_pastors[i].title, church_pastors[i].position, church_pastors[i].last_name, church_pastors[i].first_name, church_pastors[i].bio, church_pastors[i].main], (err, result) => {
            if (err) {
                console.log(err)
                res.send("Error!")
                console.log(`Church pastor ${1} error while adding`)
            }
            else {
                console.log(result)
                console.log("SECOND DONE")
                console.log(`Church pastor ${1} done`)

            }

        })
    }

    for (let i = 0; i < church_socials.length; i++) {
        db.query("INSERT INTO churches_socials(church_id, name, link) VALUES (@church_id, ?, ?)", [church_socials[i].name, church_socials[i].link], (err, result) => {
            if (err) {
                console.log(err)
                res.send("Error!")
                console.log(`Church socials ${1} error while adding`)


            }
            console.log(result)
            console.log("THID DONE")
            console.log(`Church social ${1} done`)


        })
    }

    for (let i = 0; i < church_images.length; i++) {
        db.query("INSERT INTO churches_images(church_id, source, is_main) VALUES (@church_id, ?, ?);", [church_images[i].source, church_images[i].is_main], (err, result) => {
            if (err) {
                console.log(err)
                res.send("Error!")
                console.log(`Church image ${1} error while adding`)


            }
            console.log(result)
            console.log("FOURTH DONE")
            console.log(`Church image ${1} done`)


        })
    }

    for (let i = 0; i < church_services.length; i++) {
        db.query("INSERT INTO churches_services(church_id, name, day, start_time, end_time) VALUES (@church_id, ?, ?, ?, ?);", [church_services[i].name, church_services[i].day, church_services[i].start_time, church_services[i].end_time], (err, result) => {
            if (err) {
                console.log(err)
                res.send("Error!")
                console.log(`Church service ${i} done`)


            }
            console.log(result)
            console.log("FIFTH DONE")
            console.log(`Church service ${i} error while adding`)


        })
    }


})



app.delete('/delete-church/:id', (req, res) => {
    const eventId = req.params.id;
    db.query("USE db_monte", function (error, results) {
        if (error) {
            console.log('Error in database operation');
        } else {
            console.log(results);
        }
    });
    db.query(`DELETE FROM churches WHERE id = ${eventId}`, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send('An error occurred while deleting the event.');
        }

        if (result.affectedRows === 0) {
            return res.status(404).send('Event not found.');
        }

        return res.send(`Church with ID ${eventId} deleted successfully.`);
    });
});
app.delete('/delete-church-pastors/:id', (req, res) => {
    const eventId = req.params.id;
    db.query("USE db_monte", function (error, results) {
        if (error) {
            console.log('Error in database operation');
        } else {
            console.log(results);
        }
    });
    db.query(`DELETE FROM churches_pastors WHERE id = ${eventId}`, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send('An error occurred while deleting the event.');
        }

        if (result.affectedRows === 0) {
            return res.status(404).send('Event not found.');
        }

        return res.send(`Church pastor with ID ${eventId} deleted successfully.`);
    });
});
app.delete('/delete-church-socials/:id', (req, res) => {
    const eventId = req.params.id;
    db.query("USE db_monte", function (error, results) {
        if (error) {
            console.log('Error in database operation');
        } else {
            console.log(results);
        }
    });
    db.query(`DELETE FROM churches_socials WHERE id = ${eventId}`, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send('An error occurred while deleting the event.');
        }

        if (result.affectedRows === 0) {
            return res.status(404).send('Event not found.');
        }

        return res.send(`Church social with ID ${eventId} deleted successfully.`);
    });
});
app.delete('/delete-church-images/:id', (req, res) => {
    const eventId = req.params.id;
    db.query("USE db_monte", function (error, results) {
        if (error) {
            console.log('Error in database operation');
        } else {
            console.log(results);
        }
    });
    db.query(`DELETE FROM church_images WHERE id = ${eventId}`, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send('An error occurred while deleting the event.');
        }

        if (result.affectedRows === 0) {
            return res.status(404).send('Event not found.');
        }

        return res.send(`Image with ID ${eventId} deleted successfully.`);
    });
});
app.delete('/delete-church-services/:id', (req, res) => {
    const eventId = req.params.id;
    db.query("USE db_monte", function (error, results) {
        if (error) {
            console.log('Error in database operation');
        } else {
            console.log(results);
        }
    });
    db.query(`DELETE FROM church_services WHERE id = ${eventId}`, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send('An error occurred while deleting the event.');
        }

        if (result.affectedRows === 0) {
            return res.status(404).send('Event not found.');
        }

        return res.send(`Church service with ID ${eventId} deleted successfully.`);
    });
});

app.put('/update-church/:id', (req, res) => {
    const { name, location, description, address, coordinates, phone, image, map_link } = req.body;
    const id = req.params.id;
    const sql = `UPDATE churches SET name = ?,
      location = COALESCE(?, location),
      description = COALESCE(?, description),
      address = COALESCE(?, address),
      coordinates = COALESCE(?, coordinates),
      phone = COALESCE(?, phone),
      email = COALESCE(?, email),
      map_link = COALESCE(?, map_link)
    WHERE id = ?;
    `;
    db.query("USE db_monte", function (error, results) {
        if (error) {
            console.log('Error in database operation');
        } else {
            console.log(results);
        }
    });
    db.query(sql, [name, location, description, address, coordinates, phone, image, map_link, id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error updating church.");
        } else {
            console.log(result);
            res.status(200).send("Church updated successfully.");
        }
    });
});
app.put('/update-church-pastors/:id', (req, res) => {
    const { title, position, last_name, first_name, bio, main } = req.body;
    const id = req.params.id;
    const sql = `UPDATE churches_pastors SET 
    title = COALESCE(?, title), 
    position = COALESCE(?, position), 
    last_name = COALESCE(?, last_name), 
    first_name = COALESCE(?, first_name), 
    bio = COALESCE(?, bio), 
    main = COALESCE(?, main) 
    WHERE id = ?`;
    db.query("USE db_monte", function (error, results) {
        if (error) {
            console.log('Error in database operation');
        } else {
            console.log(results);
        }
    });
    db.query(sql, [title, position, last_name, first_name, bio, main, id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error updating church pastor.");
        } else {
            console.log(result);
            res.status(200).send("Church pastor updated successfully.");
        }
    });
});
app.put('/update-church-socials/:id', (req, res) => {
    const { name, link } = req.body;
    const id = req.params.id;
    const sql = `UPDATE churches_socials SET name = COALESCE(?, name), link = COALESCE(?, link) WHERE id = ?`;
    db.query("USE db_monte", function (error, results) {
        if (error) {
            console.log('Error in database operation');
        } else {
            console.log(results);
        }
    });
    db.query(sql, [name, link, id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error updating church socials.");
        } else {
            console.log(result);
            res.status(200).send("Church socials updated successfully.");
        }
    });
});
app.put('/update-church-images/:id', (req, res) => {
    const { source, is_main } = req.body;
    const id = req.params.id;
    const sql = `UPDATE churches_socials SET source = COALESCE(?, source), is_main = COALESCE(?, is_main) WHERE id = ?`;
    db.query("USE db_monte", function (error, results) {
        if (error) {
            console.log('Error in database operation');
        } else {
            console.log(results);
        }
    });
    db.query(sql, [source, is_main, id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error updating church image.");
        } else {
            console.log(result);
            res.status(200).send("Church image updated successfully.");
        }
    });
});
app.put('/update-church-services/:id', (req, res) => {
    const { name, day, start_time, end_time } = req.body;
    const id = req.params.id;
    const sql = `UPDATE churches_services SET 
    name = COALESCE(?, name), 
    day = COALESCE(?, date), 
    start_time = COALESCE(?, start_time), 
    end_time = COALESCE(?, end_time) 
    WHERE id = ?`;
    db.query("USE db_monte", function (error, results) {
        if (error) {
            console.log('Error in database operation');
        } else {
            console.log(results);
        }
    });
    db.query(sql, [name, day, start_time, end_time, id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error updating church service.");
        } else {
            console.log(result);
            res.status(200).send("Church service updated successfully.");
        }
    });
});

app.get('/get-all-churches', (req, res) => {
    let sql = 'SELECT * FROM churches'
    db.query("USE db_monte", function (error, results) {
        if (error) {
            console.log('Error in database operation');
        } else {
            console.log(results);
        }
    });
    db.query(sql, function (error, results) {
        if (error) {
            console.log('Error in database operation');
        } else {
            res.json(results);
        }
    });
})
app.get('/get-all-churches-pastors', (req, res) => {
    let sql = 'SELECT * FROM churches_pastors'
    db.query("USE db_monte", function (error, results) {
        if (error) {
            console.log('Error in database operation');
        } else {
            console.log(results);
        }
    });
    db.query(sql, function (error, results) {
        if (error) {
            console.log('Error in database operation');
        } else {
            res.json(results);
        }
    });
})
app.get('/get-all-churches-socials', (req, res) => {
    let sql = 'SELECT * FROM churches_socials'
    db.query("USE db_monte", function (error, results) {
        if (error) {
            console.log('Error in database operation');
        } else {
            console.log(results);
        }
    });
    db.query(sql, function (error, results) {
        if (error) {
            console.log('Error in database operation');
        } else {
            res.json(results);
        }
    });
})
app.get('/get-all-churches-images', (req, res) => {
    let sql = 'SELECT * FROM churches_imges'
    db.query("USE db_monte", function (error, results) {
        if (error) {
            console.log('Error in database operation');
        } else {
            console.log(results);
        }
    });
    db.query(sql, function (error, results) {
        if (error) {
            console.log('Error in database operation');
        } else {
            res.json(results);
        }
    });
})
app.get('/get-all-churches-services', (req, res) => {
    let sql = 'SELECT * FROM churches_imges'
    db.query("USE db_monte", function (error, results) {
        if (error) {
            console.log('Error in database operation');
        } else {
            console.log(results);
        }
    });
    db.query(sql, function (error, results) {
        if (error) {
            console.log('Error in database operation');
        } else {
            res.json(results);
        }
    });
})

app.get('/get-church/:id', (req, response) => {
    db.query(`SELECT * FROM churches WHERE id = ${req.params.id};`, (err, res) => {
        if (err) {
            console.log(err)
        }
        console.log(res)
        response.send(res)

    })
})
app.get('/get-church-pastors/:id', (req, response) => {

    db.query(`SELECT * FROM churches_pastors WHERE church_id = ${req.params.id};`, (err, res) => {
        if (err) {
            console.log(err)
        }
        console.log(res)
        response.send(res)

    })
})
app.get('/get-church-socials/:id', (req, response) => {

    db.query(`SELECT * FROM churches_socials WHERE church_id = ${req.params.id};`, (err, res) => {
        if (err) {
            console.log(err)
        }
        console.log(res)
        response.send(res)

    })
})
app.get('/get-church-images/:id', (req, response) => {

    db.query(`SELECT * FROM churches_images WHERE church_id = ${req.params.id};`, (err, res) => {
        if (err) {
            console.log(err)
        }
        console.log(res)
        response.send(res)

    })
})
app.get('/get-church-services/:id', (req, response) => {

    db.query(`SELECT * FROM churches_services WHERE church_id = ${req.params.id};`, (err, res) => {
        if (err) {
            console.log(err)
        }
        console.log(res)
        response.send(res)

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