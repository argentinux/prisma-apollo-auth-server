import { Resolver, Query, Arg } from 'type-graphql'

@Resolver()
export default class GreetResolver {
  @Query(() => String)
  greet(@Arg('name') name: string) {
    return `Hello, ${name}`
  }
}
