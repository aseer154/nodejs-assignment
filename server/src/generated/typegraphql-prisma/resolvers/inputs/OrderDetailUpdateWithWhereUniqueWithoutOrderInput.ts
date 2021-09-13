import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderDetailUpdateWithoutOrderInput } from "../inputs/OrderDetailUpdateWithoutOrderInput";
import { OrderDetailWhereUniqueInput } from "../inputs/OrderDetailWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderDetailUpdateWithWhereUniqueWithoutOrderInput {
  @TypeGraphQL.Field(_type => OrderDetailWhereUniqueInput, {
    nullable: false
  })
  where!: OrderDetailWhereUniqueInput;

  @TypeGraphQL.Field(_type => OrderDetailUpdateWithoutOrderInput, {
    nullable: false
  })
  data!: OrderDetailUpdateWithoutOrderInput;
}
