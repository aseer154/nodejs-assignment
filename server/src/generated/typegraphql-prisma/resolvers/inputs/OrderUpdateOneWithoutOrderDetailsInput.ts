import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateOrConnectWithoutOrderDetailsInput } from "../inputs/OrderCreateOrConnectWithoutOrderDetailsInput";
import { OrderCreateWithoutOrderDetailsInput } from "../inputs/OrderCreateWithoutOrderDetailsInput";
import { OrderUpdateWithoutOrderDetailsInput } from "../inputs/OrderUpdateWithoutOrderDetailsInput";
import { OrderUpsertWithoutOrderDetailsInput } from "../inputs/OrderUpsertWithoutOrderDetailsInput";
import { OrderWhereUniqueInput } from "../inputs/OrderWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderUpdateOneWithoutOrderDetailsInput {
  @TypeGraphQL.Field(_type => OrderCreateWithoutOrderDetailsInput, {
    nullable: true
  })
  create?: OrderCreateWithoutOrderDetailsInput | undefined;

  @TypeGraphQL.Field(_type => OrderCreateOrConnectWithoutOrderDetailsInput, {
    nullable: true
  })
  connectOrCreate?: OrderCreateOrConnectWithoutOrderDetailsInput | undefined;

  @TypeGraphQL.Field(_type => OrderUpsertWithoutOrderDetailsInput, {
    nullable: true
  })
  upsert?: OrderUpsertWithoutOrderDetailsInput | undefined;

  @TypeGraphQL.Field(_type => OrderWhereUniqueInput, {
    nullable: true
  })
  connect?: OrderWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => OrderUpdateWithoutOrderDetailsInput, {
    nullable: true
  })
  update?: OrderUpdateWithoutOrderDetailsInput | undefined;
}
