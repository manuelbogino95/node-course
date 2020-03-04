const { MongoClient, ObjectID } = require('mongodb')

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id)
console.log(id.getTimestamp())

MongoClient.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
  if (error) {
    console.log('Unable to connect to database!')
  }

  const db = client.db(databaseName)


  // db.collection('users').insertOne({
  //   name: 'Manuel',
  //   age: 24
  // }, (error, result) => {
  //   if (error) {
  //     console.log('Unable to insert user!')
  //   }

  //   console.log(result.ops)
  // })

  // db.collection('users').insertMany([
  //   {
  //     name: 'Maitena',
  //     age: 24
  //   },
  //   {
  //     name: 'Clara',
  //     age: 4
  //   }
  // ], (error, result) => {
  //   if (error) {
  //     console.log('Unable to insert documents!')
  //   }

  //   console.log(result.ops)
  // })

  // db.collection('tasks').insertMany([
  //   {
  //     description: 'Task 1',
  //     completed: true
  //   },
  //   {
  //     description: 'Task 2',
  //     completed: false
  //   },
  //   {
  //     description: 'Task 3',
  //     completed: false
  //   }
  // ], (error, result) => {
  //   if (error) {
  //     console.log('Unable to insert documents')
  //   }

  //   console.log(result.ops)
  // })


})