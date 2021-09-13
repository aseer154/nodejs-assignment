import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateOrConnectWithoutOrderDetailsInput } from "../inputs/OrderCreateOrConnectWithoutOrderDetailsInput";
import { OrderCreateWithoutOrderDetailsInput } from "../inputs/OrderCreateWithoutOrderDetailsInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderCreateNestedOneWithoutOrderDetailsInput {
  @TypeGraphQL.Field(_type => OrderCreateWithoutOrderDetailsInput, {
    nullable: true
  })
  create?: OrderCreateWithoutOrderDetailsInput | undefined;

  @TypeGraphQL.Field(_type => OrderCreateOrConnectWithoutOrderDetailsInput, {
    nullable: true
  })
  connectOrCreate?: OrderCreateOrConnectWithoutOrderDetailsInput | undefined;

  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: true
  })
  connect?: OrderWhereUniqueInput | undefined;
}
