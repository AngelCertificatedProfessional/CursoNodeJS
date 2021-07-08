const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*esquema de mongose */
const mySchema = new Schema({
    name:String,
})

//Nombre de la colleccion y el esquema
const model = mongoose.model('User',mySchema);
module.exports = model;