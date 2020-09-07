import { Resolver, Query, Ctx, Mutation, Arg } from 'type-graphql'
import User from './User'
import { AppContext } from 'src/context'
import { UserInput } from './types'
import log from 'loglevel'

@Resolver()
export default class UserResolver {
  // Only for test
  @Query(() => [User])
  users(@Ctx() { prisma }: AppContext) {
    return prisma.users.findMany()
  }

  @Mutation(() => User, { nullable: true })
  async register(
    @Arg('data') { username, password }: UserInput,
    @Ctx() { prisma, hs }: AppContext,
  ) {
    const hashed_pw = await hs.hash(password)
    if (!hashed_pw) return null
    try {
      const user = await prisma.users.create({
        data: {
          username,
          password_hash: hashed_pw,
        },
      })
      return user
    } catch (err) {
      log.error(err)
      return null
    }
  }
}
