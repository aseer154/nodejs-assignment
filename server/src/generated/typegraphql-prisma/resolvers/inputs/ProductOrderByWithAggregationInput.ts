import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductAvgOrderByAggregateInput } from "../inputs/ProductAvgOrderByAggregateInput";
import { ProductCountOrderByAggregateInput } from "../inputs/ProductCountOrderByAggregateInput";
import { ProductMaxOrderByAggregateInput } from "../inputs/ProductMaxOrderByAggregateInput";
import { ProductMinOrderByAggregateInput } from "../inputs/ProductMinOrderByAggregateInput";
import { ProductSumOrderByAggregateInput } from "../inputs/ProductSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProductOrderByWithAggregationInput {
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
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  image?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  quantity?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  price?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ProductCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ProductCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProductAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ProductAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProductMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ProductMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProductMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ProductMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProductSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ProductSumOrderByAggregateInput | undefined;
}
