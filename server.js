const https = require("https");

const fs = require("fs");

const express = require('express');

var cors = require('cors')

const bodyParser = require('body-parser');


const {MongoClient} = require('mongodb');

const mongoose = require('mongoose');


const options = {
  key: fs.readFileSync("privkey.pem"),
  cert: fs.readFileSync("fullchain.pem")
};


const app = express();


app.use(cors({origin: '*'}));


const city = require('./route/city.route'); // Importa rota

const timeline = require('./route/timeline.route'); // Importa rota


app.use(bodyParser.json())


app.use('/cities', city);

app.use('/timeline', timeline);

let uri_mongodb =  'mongodb://';

mongoose.connect(uri_mongodb);  

var Schema = mongoose.Schema;

https.createServer(options, app).listen(8080, function(){
  console.log("Express server listening on port ");
});
