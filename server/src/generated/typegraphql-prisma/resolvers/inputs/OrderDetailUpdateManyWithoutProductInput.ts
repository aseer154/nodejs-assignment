import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderDetailCreateManyProductInputEnvelope } from "../inputs/OrderDetailCreateManyProductInputEnvelope";
import { OrderDetailCreateOrConnectWithoutProductInput } from "../inputs/OrderDetailCreateOrConnectWithoutProductInput";
import { OrderDetailCreateWithoutProductInput } from "../inputs/OrderDetailCreateWithoutProductInput";
import { OrderDetailScalarWhereInput } from "../inputs/OrderDetailScalarWhereInput";
import { OrderDetailUpdateManyWithWhereWithoutProductInput } from "../inputs/OrderDetailUpdateManyWithWhereWithoutProductInput";
import { OrderDetailUpdateWithWhereUniqueWithoutProductInput } from "../inputs/OrderDetailUpdateWithWhereUniqueWithoutProductInput";
import { OrderDetailUpsertWithWhereUniqueWithoutProductInput } from "../inputs/OrderDetailUpsertWithWhereUniqueWithoutProductInput";
import { OrderDetailWhereUniqueInput } from "../inputs/OrderDetailWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderDetailUpdateManyWithoutProductInput {
  @TypeGraphQL.Field(_type => [OrderDetailCreateWithoutProductInput], {
    nullable: true
  })
  create?: OrderDetailCreateWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderDetailCreateOrConnectWithoutProductInput], {
    nullable: true
  })
  connectOrCreate?: OrderDetailCreateOrConnectWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderDetailUpsertWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  upsert?: OrderDetailUpsertWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => OrderDetailCreateManyProductInputEnvelope, {
    nullable: true
  })
  createMany?: OrderDetailCreateManyProductInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [OrderDetailWhereUniqueInput], {
    nullable: true
  })
  connect?: OrderDetailWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderDetailWhereUniqueInput], {
    nullable: true
  })
  set?: OrderDetailWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderDetailWhereUniqueInput], {
    nullable: true
  })
  disconnect?: OrderDetailWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderDetailWhereUniqueInput], {
    nullable: true
  })
  delete?: OrderDetailWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderDetailUpdateWithWhereUniqueWithoutProductInput], {
    nullable: true
  })
  update?: OrderDetailUpdateWithWhereUniqueWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderDetailUpdateManyWithWhereWithoutProductInput], {
    nullable: true
  })
  updateMany?: OrderDetailUpdateManyWithWhereWithoutProductInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderDetailScalarWhereInput], {
    nullable: true
  })
  deleteMany?: OrderDetailScalarWhereInput[] | undefined;
}
