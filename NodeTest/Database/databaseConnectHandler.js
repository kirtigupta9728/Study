const {MongoClient}=require ('mongodb');
const url = 'mongodb://localhost:27017';
const database_name = 'Kissa';
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
const databaseConnectHandler = async (collection_name) => {
    let result = await client.connect();
    let db = result.db(database_name);
    console.log('db":::::::', db)
    return db.collection(collection_name);
}

module.exports=databaseConnectHandler;