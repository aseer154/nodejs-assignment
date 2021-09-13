import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutOrderDetailsInput } from "../inputs/ProductCreateWithoutOrderDetailsInput";
import { ProductUpdateWithoutOrderDetailsInput } from "../inputs/ProductUpdateWithoutOrderDetailsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProductUpsertWithoutOrderDetailsInput {
  @TypeGraphQL.Field(_type => ProductUpdateWithoutOrderDetailsInput, {
    nullable: false
  })
  update!: ProductUpdateWithoutOrderDetailsInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutOrderDetailsInput, {
    nullable: false
  })
  create!: ProductCreateWithoutOrderDetailsInput;
}
