import { Resolver, Query, Arg, Ctx } from 'type-graphql'
import { AppContext } from 'src/context'

@Resolver()
export default class GreetResolver {
  @Query(() => String)
  greet(@Arg('name') name: string) {
    return `Hello, ${name}`
  }

  // Only for test
  @Query(() => String, { nullable: true })
  hash(@Arg('plain') plain: string, @Ctx() { hs }: AppContext) {
    return hs.hash(plain)
  }

  @Query(() => Boolean)
  check(
    @Arg('hashed') hashed: string,
    @Arg('plain') plain: string,
    @Ctx() { hs }: AppContext,
  ) {
    return hs.check(hashed, plain)
  }
}
