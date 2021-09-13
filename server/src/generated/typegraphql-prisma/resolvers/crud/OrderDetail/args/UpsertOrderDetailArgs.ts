import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrderDetailCreateInput } from "../../../inputs/OrderDetailCreateInput";
import { OrderDetailUpdateInput } from "../../../inputs/OrderDetailUpdateInput";
import { OrderDetailWhereUniqueInput } from "../../../inputs/OrderDetailWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOrderDetailArgs {
  @TypeGraphQL.Field(_type => OrderDetailWhereUniqueInput, {
    nullable: false
  })
  where!: OrderDetailWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderDetailCreateInput, {
    nullable: false
  })
  create!: OrderDetailCreateInput;

  @TypeGraphQL.Field(_type => OrderDetailUpdateInput, {
    nullable: false
  })
  update!: OrderDetailUpdateInput;
}
