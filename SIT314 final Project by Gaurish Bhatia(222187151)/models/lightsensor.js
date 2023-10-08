// Name : Gaurish Bhatia
// This is the schema for the sensor data to be published.


// including the mongoose modules.
const mongoose = require('mongoose');

// defining the schema in the model as light sensor.
module.exports = mongoose.model('light_sensor', new mongoose.Schema({
 id: Number,
 name: String,
 address: String,
 time: Date,
 lightintensity : Number
}));
