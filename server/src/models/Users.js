import mongoose from '../db/mongoose'

const Schema = mongoose.Schema
export default mongoose.model('users',
  new Schema({
    name: String,
    profilePhoto: String,
    login: String,
    password: String,
    email: String,
    wallet: [{
      name: String,
      amount: [{
        value: Number,
        date: Number
      }],
      paper: {
        name: String,
        discount: [{
          type: String,
          value: Number
        }]
      },
      indexer: {
        name: String,
        indicator: Number,
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
