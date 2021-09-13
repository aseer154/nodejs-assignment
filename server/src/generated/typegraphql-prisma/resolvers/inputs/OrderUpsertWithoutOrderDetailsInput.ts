import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateWithoutOrderDetailsInput } from "../inputs/OrderCreateWithoutOrderDetailsInput";
import { OrderUpdateWithoutOrderDetailsInput } from "../inputs/OrderUpdateWithoutOrderDetailsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderUpsertWithoutOrderDetailsInput {
  @TypeGraphQL.Field(_type => OrderUpdateWithoutOrderDetailsInput, {
    nullable: false
  })
  update!: OrderUpdateWithoutOrderDetailsInput;

  @TypeGraphQL.Field(_type => OrderCreateWithoutOrderDetailsInput, {
    nullable: false
  })
  create!: OrderCreateWithoutOrderDetailsInput;
}
