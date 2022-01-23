import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int, { description: 'User id' })
  exampleField: number;
  
  @Field({ description: 'First Name' } )
  firstName: string;

  @Field({ description: 'Last Name' } )
  lastName: string;

  @Field(()=> Boolean, { description: 'Active or passive' } )
  isActive: boolean;
}
