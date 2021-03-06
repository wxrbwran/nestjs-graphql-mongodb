import { Field, InputType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType()
export class UpdateStudentInput {
  @Field()
  id: string;

  @MinLength(1)
  @Field()
  firstName: string;

  @Field()
  @MinLength(1)
  lastName: string;
}
