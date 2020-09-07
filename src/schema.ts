import { buildSchema } from 'type-graphql'
import GreetResolver from './resolvers/greet'
import { UserResolver } from './user'

export const createSchema = async () => {
  const schema = buildSchema({
    resolvers: [GreetResolver, UserResolver],
  })
  return schema
}
