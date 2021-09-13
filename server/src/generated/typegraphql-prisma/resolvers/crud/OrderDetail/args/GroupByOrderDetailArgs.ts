import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrderDetailOrderByWithAggregationInput } from "../../../inputs/OrderDetailOrderByWithAggregationInput";
import { OrderDetailScalarWhereWithAggregatesInput } from "../../../inputs/OrderDetailScalarWhereWithAggregatesInput";
import { OrderDetailWhereInput } from "../../../inputs/OrderDetailWhereInput";
import { OrderDetailScalarFieldEnum } from "../../../../enums/OrderDetailScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByOrderDetailArgs {
  @TypeGraphQL.Field(_type => OrderDetailWhereInput, {
    nullable: true
  })
  where?: OrderDetailWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OrderDetailOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: OrderDetailOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderDetailScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "productId" | "orderId" | "quantity" | "totalPrice">;

  @TypeGraphQL.Field(_type => OrderDetailScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: OrderDetailScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
