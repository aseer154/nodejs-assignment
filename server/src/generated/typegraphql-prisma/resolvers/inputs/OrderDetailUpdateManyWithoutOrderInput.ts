import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderDetailCreateManyOrderInputEnvelope } from "../inputs/OrderDetailCreateManyOrderInputEnvelope";
import { OrderDetailCreateOrConnectWithoutOrderInput } from "../inputs/OrderDetailCreateOrConnectWithoutOrderInput";
import { OrderDetailCreateWithoutOrderInput } from "../inputs/OrderDetailCreateWithoutOrderInput";
import { OrderDetailScalarWhereInput } from "../inputs/OrderDetailScalarWhereInput";
import { OrderDetailUpdateManyWithWhereWithoutOrderInput } from "../inputs/OrderDetailUpdateManyWithWhereWithoutOrderInput";
import { OrderDetailUpdateWithWhereUniqueWithoutOrderInput } from "../inputs/OrderDetailUpdateWithWhereUniqueWithoutOrderInput";
import { OrderDetailUpsertWithWhereUniqueWithoutOrderInput } from "../inputs/OrderDetailUpsertWithWhereUniqueWithoutOrderInput";
import { OrderDetailWhereUniqueInput } from "../inputs/OrderDetailWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderDetailUpdateManyWithoutOrderInput {
  @TypeGraphQL.Field(_type => [OrderDetailCreateWithoutOrderInput], {
    nullable: true
  })
  create?: OrderDetailCreateWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderDetailCreateOrConnectWithoutOrderInput], {
    nullable: true
  })
  connectOrCreate?: OrderDetailCreateOrConnectWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderDetailUpsertWithWhereUniqueWithoutOrderInput], {
    nullable: true
  })
  upsert?: OrderDetailUpsertWithWhereUniqueWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => OrderDetailCreateManyOrderInputEnvelope, {
    nullable: true
  })
  createMany?: OrderDetailCreateManyOrderInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [OrderDetailUpdateWithWhereUniqueWithoutOrderInput], {
    nullable: true
  })
  update?: OrderDetailUpdateWithWhereUniqueWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderDetailUpdateManyWithWhereWithoutOrderInput], {
    nullable: true
  })
  updateMany?: OrderDetailUpdateManyWithWhereWithoutOrderInput[] | undefined;

  @TypeGraphQL.Field(_type => [OrderDetailScalarWhereInput], {
    nullable: true
  })
  deleteMany?: OrderDetailScalarWhereInput[] | undefined;
}
