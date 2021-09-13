import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OrderDetailCreateManyProductInput } from "../inputs/OrderDetailCreateManyProductInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class OrderDetailCreateManyProductInputEnvelope {
  @TypeGraphQL.Field(_type => [OrderDetailCreateManyProductInput], {
    nullable: false
  })
  data!: OrderDetailCreateManyProductInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
