import Users from '../models/Users'

class UsersRepository {
  constructor () {
    this.model = Users
  }

  get (query) {
    return this.model.find(query)
  }

  getOne (query) {
    return this.model.findOne(query)
  }

  update (_id, data, callback) {
    return this.model.updateOne({_id: _id}, data, callback)
  }

  register (query, callback) {
    const model = new this.model(query)
    model.save((err, result) => {
      callback(err, result)
    })
  }

  delete (_id, callback) {
    return this.model.deleteOne({_id}, callback)
  }
}

export default new UsersRepository()
