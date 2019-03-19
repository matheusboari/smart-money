import mongoose from '../db/mongoose'

const Schema = mongoose.Schema
export default mongoose.model('users',
  new Schema({
    nome: String,
    login: String,
    senha: String,
    data_nascimento: Number,
    email: String,
    foto_perfil: String
  }),
  'users')
