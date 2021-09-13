import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderDetailScalarWhereInput } from "../inputs/OrderDetailScalarWhereInput";
import { OrderDetailUpdateManyMutationInput } from "../inputs/OrderDetailUpdateManyMutationInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderDetailUpdateManyWithWhereWithoutProductInput {
  @TypeGraphQL.Field(_type => OrderDetailScalarWhereInput, {
    nullable: false
  })
  where!: OrderDetailScalarWhereInput;

  @TypeGraphQL.Field(_type => OrderDetailUpdateManyMutationInput, {
    nullable: false
  })
  data!: OrderDetailUpdateManyMutationInput;
}
