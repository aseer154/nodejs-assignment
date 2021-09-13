import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrderDetailCreateManyInput } from "../../../inputs/OrderDetailCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyOrderDetailArgs {
  @TypeGraphQL.Field(_type => [OrderDetailCreateManyInput], {
    nullable: false
  })
  data!: OrderDetailCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
