import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutOrderDetailsInput } from "../inputs/ProductCreateOrConnectWithoutOrderDetailsInput";
import { ProductCreateWithoutOrderDetailsInput } from "../inputs/ProductCreateWithoutOrderDetailsInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProductCreateNestedOneWithoutOrderDetailsInput {
  @TypeGraphQL.Field(_type => ProductCreateWithoutOrderDetailsInput, {
    nullable: true
  })
  create?: ProductCreateWithoutOrderDetailsInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateOrConnectWithoutOrderDetailsInput, {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutOrderDetailsInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true
  })
  connect?: ProductWhereUniqueInput | undefined;
}
