const { MongoClient, ObjectID } = require('mongodb');
const keys = require('../config/keys').configKeys;

MongoClient.connect(keys.mlabConnStr ,{ useNewUrlParser: true }
, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB');
    }

    const db = client.db('todo-api-udemymeadnode');
    console.log('Successfully connected to MongoDB.');

    db.collection('Todos').find().count()
    .then((count) => {
        console.log(`Todos count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    db.collection('Users').find({ name: "Shahriar Rafi"}).toArray()
    .then((docs) => {
        console.log(`Selected users:`);
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch users count', err);
    });

    client.close();
});