const express = require('express');
const app = express();
//Seccion para el websocket
const server = require('http').Server(app);

const config = require('./config');

// const router = require('./components/message/network');
// const e = require('express');
const bodyParser = require('body-parser');
const socket = require('./socket')
const db =require('./db')
const router = require('./network/routes');

db(config.dbUrl)
/*utilizado para obtener la informacion del body de las apis. */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//app.use(router);

//coneccion del seocket al sistema
socket.connect(server);

//al tener nuestro servidor configurado nuestras rutas iran al archivo de rutas
router(app);


// router.get('/message',function(req,res){
//     res.send('Lista de mensajes');
// })

app.use('/'+config.publicRoute,express.static('public'));

//Se agrego el valor de que inicialize el servidor
// app.use('/',function (req,res) {
//     res.send('Hola 2');
// })
//Indicamos un puerto
//app.listen(3000);
server.listen(config.port,function(){
    console.log('La aplicacion esta escuchando en '+config.host+':3000') 
});