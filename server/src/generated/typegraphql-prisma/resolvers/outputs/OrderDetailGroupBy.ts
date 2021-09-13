import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderDetailAvgAggregate } from "../outputs/OrderDetailAvgAggregate";
import { OrderDetailCountAggregate } from "../outputs/OrderDetailCountAggregate";
import { OrderDetailMaxAggregate } from "../outputs/OrderDetailMaxAggregate";
import { OrderDetailMinAggregate } from "../outputs/OrderDetailMinAggregate";
import { OrderDetailSumAggregate } from "../outputs/OrderDetailSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class OrderDetailGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  productId!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  orderId!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  quantity!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  totalPrice!: number;

  @TypeGraphQL.Field(_type => OrderDetailCountAggregate, {
    nullable: true
  })
  _count!: OrderDetailCountAggregate | null;

  @TypeGraphQL.Field(_type => OrderDetailAvgAggregate, {
    nullable: true
  })
  _avg!: OrderDetailAvgAggregate | null;

  @TypeGraphQL.Field(_type => OrderDetailSumAggregate, {
    nullable: true
  })
  _sum!: OrderDetailSumAggregate | null;

  @TypeGraphQL.Field(_type => OrderDetailMinAggregate, {
    nullable: true
  })
  _min!: OrderDetailMinAggregate | null;

  @TypeGraphQL.Field(_type => OrderDetailMaxAggregate, {
    nullable: true
  })
  _max!: OrderDetailMaxAggregate | null;
}
