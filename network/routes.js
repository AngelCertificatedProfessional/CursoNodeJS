const express = require('express');
const message = require('../components/message/network')
const user = require('../components/user/network')
const chat = require('../components/chat/network')

//server hace la mencion a app de la seccion de server. basicamente le indica que use el server a su antojo
const routes = function(server){
    server.use('/message',message);
    server.use('/user',user);
    server.use('/chat',chat);
}

module.exports = routes;