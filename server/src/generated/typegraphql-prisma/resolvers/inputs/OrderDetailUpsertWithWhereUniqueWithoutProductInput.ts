import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderDetailCreateWithoutProductInput } from "../inputs/OrderDetailCreateWithoutProductInput";
import { OrderDetailUpdateWithoutProductInput } from "../inputs/OrderDetailUpdateWithoutProductInput";
import { OrderDetailWhereUniqueInput } from "../inputs/OrderDetailWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderDetailUpsertWithWhereUniqueWithoutProductInput {
  @TypeGraphQL.Field(_type => OrderDetailWhereUniqueInput, {
    nullable: false
  })
  where!: OrderDetailWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderDetailUpdateWithoutProductInput, {
    nullable: false
  })
  update!: OrderDetailUpdateWithoutProductInput;

  @TypeGraphQL.Field(_type => OrderDetailCreateWithoutProductInput, {
    nullable: false
  })
  create!: OrderDetailCreateWithoutProductInput;
}
