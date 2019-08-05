const express = require('express')
const router = express.Router()

const mongo = require('mongodb').MongoClient
const user = 'baumannzone'
const pass = 'y0L0sW4g'
const url = `mongodb+srv://${user}:${pass}@cluster0-rs00m.mongodb.net/test?retryWrites=true&w=majority`

mongo.connect(url, {useNewUrlParser: true}, (err, client) => {
  if (err) {
    console.error(err)
    return false
  }
  console.log('Conectado a Mongo DB...')

  const db = client.db('mongo-demo')
  const collection = db.collection('tx')

  collection.insertOne({name: 'Roger'}, (err, result) => {
    if (err) {
      console.error('Err InsertOne')
      console.error(err)
      return false
    }
    console.log('<<<<<<<<<<<< result >>>>>>>>>>>>')
    console.log(result.ops)
  })

})


router.get('/', function (req, res, next) {
  res.json({data: 'DUDE WHAT'})
})

module.exports = router
