import './config'
import log from 'loglevel'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { createSchema } from './schema'
import { APP_PORT } from './config'

async function start() {
  const schema = await createSchema()
  const context = {}

  const app = express()

  const apolloServer = new ApolloServer({
    schema,
    context,
  })

  apolloServer.applyMiddleware({ app })

  return new Promise((resolve) => {
    const server = app.listen(APP_PORT, () => {
      log.info(`Server listening at ${APP_PORT}`)
      resolve(server)
    })
  })
}

start()
