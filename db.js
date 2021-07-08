const db =require('mongoose')

db.Promise = global.Promise;

async function connect(dbUrl){
    await db.connect(dbUrl,{useNewUrlParser:true})
    .then(() => console.log('[db] Conectada'))
    .catch(err => console.error('[db]', err))
}

module.exports = connect;