const mongoose = require('mongoose')
const option = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  socketTimeoutMS: 45000
}

mongoose.connect(process.env.MONGODB_URI, option)
  .then(
    connect => console.log(`Database connected: ${connect.connection.host}`),
    error => {
      if (error.name = 'MongooseServerSelectionError') console.log(error.message)
      else console.log(error)
    }
  )

module.exports = mongoose