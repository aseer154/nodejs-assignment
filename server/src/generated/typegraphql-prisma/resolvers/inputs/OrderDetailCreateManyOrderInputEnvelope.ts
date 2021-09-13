import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderDetailCreateManyOrderInput } from "../inputs/OrderDetailCreateManyOrderInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderDetailCreateManyOrderInputEnvelope {
  @TypeGraphQL.Field(_type => [OrderDetailCreateManyOrderInput], {
    nullable: false
  })
  data!: OrderDetailCreateManyOrderInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
