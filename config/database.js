import Datastore from 'nedb'
const dbName = './data_lunch.db'
let db

if(!db) {
    db = new Datastore({
        filename: dbName, 
        autoload: true 
    })
    console.log('Banco ' + dbName + ' pronto para uso')
}

export default db