const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
  if(error) {
    console.log('Unable to connect to database!')
  }

  const db = client.db(databaseName)


  db.collection('users').insertOne({
    name: 'Manuel',
    age: 24
  })
})