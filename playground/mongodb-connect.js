const { MongoClient, ObjectID } = require('mongodb');
const keys = require('../config/keys').configKeys;

MongoClient.connect(keys.mlabConnStr ,{ useNewUrlParser: true }
, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB');
    }

    const db = client.db('todo-api-udemymeadnode');
    console.log('Successfully connected to MongoDB.');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Shahriar Rafi',
    //     age: 21,
    //     location: 'Tokyo'
    // }, (err, result) => {
    //     if (err) {
    //         console.log('unable to insert user', err);
    //     }

    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    client.close();
});