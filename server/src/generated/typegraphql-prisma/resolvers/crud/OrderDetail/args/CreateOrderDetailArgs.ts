import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrderDetailCreateInput } from "../../../inputs/OrderDetailCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOrderDetailArgs {
  @TypeGraphQL.Field(_type => OrderDetailCreateInput, {
    nullable: false
  })
  data!: OrderDetailCreateInput;
}
