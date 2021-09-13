import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderDetailCreateManyOrderInputEnvelope } from "../inputs/OrderDetailCreateManyOrderInputEnvelope";
import { OrderDetailCreateOrConnectWithoutOrderInput } from "../inputs/OrderDetailCreateOrConnectWithoutOrderInput";
import { OrderDetailCreateWithoutOrderInput } from "../inputs/OrderDetailCreateWithoutOrderInput";
import { OrderDetailWhereUniqueInput } from "../inputs/OrderDetailWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderDetailCreateNestedManyWithoutOrderInput {
  @TypeGraphQL.Field(_type => [OrderDetailCreateWithoutOrderInput], {
    nullable: true
  })
  create?: OrderDetailCreateWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderDetailCreateOrConnectWithoutOrderInput], {
    nullable: true
  })
  connectOrCreate?: OrderDetailCreateOrConnectWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => OrderDetailCreateManyOrderInputEnvelope, {
    nullable: true
  })
  createMany?: OrderDetailCreateManyOrderInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OrderDetailWhereUniqueInput], {
    nullable: true
  })
  connect?: OrderDetailWhereUniqueInput[] | undefined;
}
