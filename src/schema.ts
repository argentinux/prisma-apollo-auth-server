import { buildSchema } from 'type-graphql'
import GreetResolver from './resolvers/greet'

export const createSchema = async () => {
  const schema = buildSchema({
    resolvers: [GreetResolver],
  })
  return schema
}
