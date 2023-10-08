const mongoose = require('mongoose');
module.exports = mongoose.model('light_sensor', new mongoose.Schema({
 id: Number,
 name: String,
 address: String,
 time: Date,
 lightintensity : Number
}));
