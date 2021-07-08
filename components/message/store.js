const Model = require('./model')

function addMessage(message) {
    const myMessage = new Model(message);
    console.log('hola');
    myMessage.save();

}

function getMessages(filterUser) {

    return new Promise((resolve,reject) => {
        let filter = {};
        if(filterUser !== null){
            filter = {user : filterUser};
        }
        //Se agrego el populate para agregar la informacion de la relacion
        Model.find(filter)
            .populate('user')
            .exec((error,populated) => {
                if(error){
                    reject(error);
                    return false;
                }

                resolve(populated)
            })
    })
}

async function updateText(id,message){
    const foundMessage = await Model.findOne({
        _id:id,
    });
    
    foundMessage.message = message;
    const newMessage = await foundMessage.save();
    return newMessage;
    //return 'hola';
}

function removeMessage(id){
    return Model.deleteOne({
        _id:id
    })
}

module.exports = {
    add: addMessage,
    list: getMessages,
    updateText: updateText,
    remove: removeMessage
}