import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  firstName: string;
  @Field({nullable : true})
  lastName: string;
  @Field(()=> Boolean)
  isActive: boolean;
}