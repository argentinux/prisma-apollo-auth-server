import { InputType, Field } from 'type-graphql'
import { Length, MinLength } from 'class-validator'

@InputType()
export class UserInput {
  @Field(() => String)
  @Length(4, 15)
  username!: string

  @Field(() => String)
  @MinLength(6)
  password!: string
}
