import mongoose from '../db/mongoose'

const Schema = mongoose.Schema
export default mongoose.model('users',
  new Schema({
    name: String,
    login: String,
    password: String,
    email: String,
    wallet: [{
      name: String,
      amount: [{
        value: Number,
        date: Number
      }],
      indexer: {
        name: String,
        percentage: [{
          value: Number,
          date: Number
        }]
      },
      startDate: Number,
      endDate: Number,
      stop: Boolean
    }]
  }),
'users')
