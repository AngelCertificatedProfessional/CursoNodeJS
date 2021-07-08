const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*esquema de mongose */
const mySchema = new Schema({
    users: [{
        type: Schema.ObjectId,
        ref:'User'
    }]
})

//Nombre de la colleccion y el esquema
const model = mongoose.model('chat',mySchema);
module.exports = model;