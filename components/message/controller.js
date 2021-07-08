const store = require('./store')
const socket = require('../../socket').socket;


function addMessage(chat,user,message){
    return new Promise((resolve,reject) => {

        if(!user || !message){
            
            console.error('[messageControoler] No hay usuario o mensaje');
            return reject('Los datos son incorrectos');
        }
        const fullMessage = {
            chat:chat,
            user:user,
            message:message,
            date: new Date()
        };
        
        store.add(fullMessage);

        socket.io.emit('message',fullMessage);

        resolve(fullMessage);
    })
    // console.log(user);
    // console.log(message);
}

function getMessages(filterUser) {
    return new Promise((resolve,reject) => {
        resolve(store.list(filterUser));
    });
}

function updateMessage(id,message){
    return new Promise(async (resolve,reject) => {
        if(!id || !message){
            reject('Invalid data');
            return false;
        }
        
        const result = await store.updateText(id,message);
        resolve(result);
    })
}

function deleteMessage(id){
    return new Promise((resolve,reject) => {

        if(!id){
            reject('Id invalido');
            return false;
        }

        store.remove(id)
            .then(() => {
                resolve();
            })
            .catch(e => {
                reject(e)
            });
    });
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage
}