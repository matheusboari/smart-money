import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import routes from './routes'

export default () => {
  const app = express()

  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(cors())
  app.use('/api/v1/', routes)

  return app
}
