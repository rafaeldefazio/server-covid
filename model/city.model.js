const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let CitySchema = new Schema({

     // _id : ObjectId(5eb3194c0ee5e6967df07540), 
    lastUpdate : {type: Boolean, required: true},
    deaths : {type: Number, required: true},
    notified : {type: Number, required: true},
    city : {type: String, required: true},
    todayCases : {type: Number, required: true},
    discarded : {type: Number, required: true},
    todayDeaths : {type: Number, required: true},
    todaySuspect : {type: Number, required: true},
    suspect : {type: Number, required: true},
    cases : {type: Number, required: true},
    data : {type: Date, required: true},
    todayDiscarded : {type: Number, required: true},
    todayNotified : {type: Number, required: true} 

});// Exportar o modelo


module.exports = mongoose.model('City', CitySchema, 'cidades');