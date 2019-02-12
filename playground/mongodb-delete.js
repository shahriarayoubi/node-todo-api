const { MongoClient, ObjectID } = require('mongodb');
const keys = require('../config/keys').configKeys;

MongoClient.connect(keys.mlabConnStr ,{ useNewUrlParser: true }
, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB');
    }

    const db = client.db('todo-api-udemymeadnode');
    console.log('Successfully connected to MongoDB.');

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'})
    // .then((result) => {
    //     console.log(result);
    // });

    //deleteMany
    // db.collection('Todos').deleteOne({text: 'Eat lunch'})
    // .then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    db.collection('Todos').findOneAndDelete({completed: false})
    .then((result) => {
        console.log(result);
    });

    // client.close();
});