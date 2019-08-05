// mongo.connect(url, {useNewUrlParser: true}, (err, client) => {
//   if (err) {
//     console.error(err)
//     return false
//   }
//   console.log('Conectado a Mongo DB...')
//
//   const db = client.db('mongo-demo')
//   const collection = db.collection('tx')
//
//   collection.insertOne({name: 'Roger'}, (err, result) => {
//     if (err) {
//       console.error('Err InsertOne')
//       console.error(err)
//       return false
//     }
//     console.log('<<<<<<<<<<<< result >>>>>>>>>>>>')
//     console.log(result.ops)
//   })
//
// })
//
// module.exports = db
