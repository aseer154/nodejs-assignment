import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderDetailCreateManyProductInputEnvelope } from "../inputs/OrderDetailCreateManyProductInputEnvelope";
import { OrderDetailCreateOrConnectWithoutProductInput } from "../inputs/OrderDetailCreateOrConnectWithoutProductInput";
import { OrderDetailCreateWithoutProductInput } from "../inputs/OrderDetailCreateWithoutProductInput";
import { OrderDetailWhereUniqueInput } from "../inputs/OrderDetailWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderDetailCreateNestedManyWithoutProductInput {
  @TypeGraphQL.Field(_type => [OrderDetailCreateWithoutProductInput], {
    nullable: true
  })
  create?: OrderDetailCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderDetailCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: OrderDetailCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => OrderDetailCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: OrderDetailCreateManyProductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OrderDetailWhereUniqueInput], {
    nullable: true
  })
  connect?: OrderDetailWhereUniqueInput[] | undefined;
}
