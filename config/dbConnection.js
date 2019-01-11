const mongo = require('mongodb');

var mongodbConnection = function(){
    const db = new mongo.Db(
        'got',
        new mongo.Server('localhost',27017,{}),
        {}
    );
    return db
}

module.exports = function(){
    return mongodbConnection;
}