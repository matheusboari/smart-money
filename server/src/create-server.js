import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import routes from './routes'
import moment from 'moment'

export default () => {
  const app = express()

  moment.locale('pt-BR')
  global.moment = moment
  
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(cors())
  app.use('/api/v1/', routes)

  return app
}
