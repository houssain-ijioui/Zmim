require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();


app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));



// Connect to DB
mongoose.connect(`mongodb+srv://${process.env.MONGODB_NAME}:${process.env.MONGODB_PASS}@cluster0.gc7wo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
    .then(() => console.log("Connected to DB"))
    .catch(err => console.log(`${err}`));


// routes
app.use('/', routes);



const port = 3000;
app.listen(port, console.log('Listening in ' + port));