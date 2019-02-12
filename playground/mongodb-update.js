const { MongoClient, ObjectID } = require('mongodb');
const keys = require('../config/keys').configKeys;

MongoClient.connect(keys.mlabConnStr ,{ useNewUrlParser: true }
, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB');
    }

    const db = client.db('todo-api-udemymeadnode');
    console.log('Successfully connected to MongoDB.');

    // db.collection('Todos').findOneAndUpdate(
    //     {_id: ObjectID("5c619aa5fb6fc06f052e51b6")},
    //     {
    //         $set: {
    //             completed: true
    //         }
    //     }, {
    //         returnOriginal: false
    //     }).then((result) => {console.log(result)});

    db.collection('Users').findOneAndUpdate({
        _id: ObjectID("5c61616ddab97e3bb13566c0")
    }, {
        $set: {
            name: "Someone Rafi"
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {console.log(result)});

    // client.close();
});