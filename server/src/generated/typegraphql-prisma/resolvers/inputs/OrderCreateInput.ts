import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderDetailCreateNestedManyWithoutOrderInput } from "../inputs/OrderDetailCreateNestedManyWithoutOrderInput";
import { UserCreateNestedOneWithoutOrdersInput } from "../inputs/UserCreateNestedOneWithoutOrdersInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderCreateInput {
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

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutOrdersInput, {
    nullable: true
  })
  customer?: UserCreateNestedOneWithoutOrdersInput | undefined;

  @TypeGraphQL.Field(_type => OrderDetailCreateNestedManyWithoutOrderInput, {
    nullable: true
  })
  orderDetails?: OrderDetailCreateNestedManyWithoutOrderInput | undefined;
}
