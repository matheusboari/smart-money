import mongoose from '../db/mongoose'

const Schema = mongoose.Schema
export default mongoose.model('users',
  new Schema({
    name: String,
    login: String,
    password: String,
    email: String,
    wallet: [{
      value: Number,
      paper: {
        name: String,
        discount: [{
          type: String,
          value: Number
        }]
      },
      indexer: {
        name: String,
        indicator: Number
      },
      startDate: Number,
      endDate: Number,
      stop: Boolean
    }]
  }),
'users')
