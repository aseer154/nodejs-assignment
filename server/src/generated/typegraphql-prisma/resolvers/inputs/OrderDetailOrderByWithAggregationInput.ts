import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderDetailAvgOrderByAggregateInput } from "../inputs/OrderDetailAvgOrderByAggregateInput";
import { OrderDetailCountOrderByAggregateInput } from "../inputs/OrderDetailCountOrderByAggregateInput";
import { OrderDetailMaxOrderByAggregateInput } from "../inputs/OrderDetailMaxOrderByAggregateInput";
import { OrderDetailMinOrderByAggregateInput } from "../inputs/OrderDetailMinOrderByAggregateInput";
import { OrderDetailSumOrderByAggregateInput } from "../inputs/OrderDetailSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderDetailOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  productId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  orderId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  quantity?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  totalPrice?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => OrderDetailCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: OrderDetailCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OrderDetailAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: OrderDetailAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OrderDetailMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: OrderDetailMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OrderDetailMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: OrderDetailMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => OrderDetailSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: OrderDetailSumOrderByAggregateInput | undefined;
}
