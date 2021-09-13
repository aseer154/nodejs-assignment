import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrderDetailUpdateInput } from "../../../inputs/OrderDetailUpdateInput";
import { OrderDetailWhereUniqueInput } from "../../../inputs/OrderDetailWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOrderDetailArgs {
  @TypeGraphQL.Field(_type => OrderDetailUpdateInput, {
    nullable: false
  })
  data!: OrderDetailUpdateInput;

  @TypeGraphQL.Field(_type => OrderDetailWhereUniqueInput, {
    nullable: false
  })
  where!: OrderDetailWhereUniqueInput;
}
