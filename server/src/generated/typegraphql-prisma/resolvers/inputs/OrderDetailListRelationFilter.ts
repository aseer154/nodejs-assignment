import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderDetailWhereInput } from "../inputs/OrderDetailWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderDetailListRelationFilter {
  @TypeGraphQL.Field(_type => OrderDetailWhereInput, {
    nullable: true
  })
  every?: OrderDetailWhereInput | undefined;

  @TypeGraphQL.Field(_type => OrderDetailWhereInput, {
    nullable: true
  })
  some?: OrderDetailWhereInput | undefined;

  @TypeGraphQL.Field(_type => OrderDetailWhereInput, {
    nullable: true
  })
  none?: OrderDetailWhereInput | undefined;
}
