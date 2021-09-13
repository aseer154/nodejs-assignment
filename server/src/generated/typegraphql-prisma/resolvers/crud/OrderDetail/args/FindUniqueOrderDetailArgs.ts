import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrderDetailWhereUniqueInput } from "../../../inputs/OrderDetailWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueOrderDetailArgs {
  @TypeGraphQL.Field(_type => OrderDetailWhereUniqueInput, {
    nullable: false
  })
  where!: OrderDetailWhereUniqueInput;
}
