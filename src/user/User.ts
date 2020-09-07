import { ObjectType, Field, ID } from 'type-graphql'

@ObjectType()
export default class User {
  @Field(() => ID)
  readonly id!: string

  @Field(() => String)
  username!: string

  // Nop
  password_hash!: string

  @Field(() => String)
  created_at!: Date

  @Field(() => String)
  updated_at!: Date
}
