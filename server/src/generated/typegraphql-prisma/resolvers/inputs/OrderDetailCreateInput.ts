import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderCreateNestedOneWithoutOrderDetailsInput } from "../inputs/OrderCreateNestedOneWithoutOrderDetailsInput";
import { ProductCreateNestedOneWithoutOrderDetailsInput } from "../inputs/ProductCreateNestedOneWithoutOrderDetailsInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderDetailCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  quantity?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: true
  })
  totalPrice?: number | undefined;

  @TypeGraphQL.Field(_type => ProductCreateNestedOneWithoutOrderDetailsInput, {
    nullable: true
  })
  product?: ProductCreateNestedOneWithoutOrderDetailsInput | undefined;

  @TypeGraphQL.Field(_type => OrderCreateNestedOneWithoutOrderDetailsInput, {
    nullable: true
  })
  order?: OrderCreateNestedOneWithoutOrderDetailsInput | undefined;
}
