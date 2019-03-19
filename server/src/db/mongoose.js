import mongoose from 'mongoose'
import debug from 'debug'

mongoose.connect('mongodb://developer:dev123@ds249737.mlab.com:49737/tg_db', { useNewUrlParser: true })

const db = mongoose.connection

db.on('error', err => { debug(err) })
db.once('open', callback => { debug('Connected to mongodb') })

export default mongoose
