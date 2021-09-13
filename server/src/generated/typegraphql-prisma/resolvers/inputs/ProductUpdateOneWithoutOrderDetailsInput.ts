import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutOrderDetailsInput } from "../inputs/ProductCreateOrConnectWithoutOrderDetailsInput";
import { ProductCreateWithoutOrderDetailsInput } from "../inputs/ProductCreateWithoutOrderDetailsInput";
import { ProductUpdateWithoutOrderDetailsInput } from "../inputs/ProductUpdateWithoutOrderDetailsInput";
import { ProductUpsertWithoutOrderDetailsInput } from "../inputs/ProductUpsertWithoutOrderDetailsInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProductUpdateOneWithoutOrderDetailsInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutOrderDetailsInput, {
    nullable: true
  })
  create?: ProductCreateWithoutOrderDetailsInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutOrderDetailsInput, {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutOrderDetailsInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpsertWithoutOrderDetailsInput, {
    nullable: true
  })
  upsert?: ProductUpsertWithoutOrderDetailsInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutOrderDetailsInput, {
    nullable: true
  })
  update?: ProductUpdateWithoutOrderDetailsInput | undefined;
}
