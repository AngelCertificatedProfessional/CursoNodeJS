const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*esquema de mongose */
const mySchema = new Schema({
    chat:{
        type:Schema.ObjectId,
        ref:'Chat',
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    message: {
        type:String,
        required:true,
    },
    date:Date
})

//Nombre de la colleccion y el esquema
const model = mongoose.model('Message',mySchema);
module.exports = model;