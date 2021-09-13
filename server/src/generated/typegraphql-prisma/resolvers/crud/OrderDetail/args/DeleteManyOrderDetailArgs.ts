import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrderDetailWhereInput } from "../../../inputs/OrderDetailWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyOrderDetailArgs {
  @TypeGraphQL.Field(_type => OrderDetailWhereInput, {
    nullable: true
  })
  where?: OrderDetailWhereInput | undefined;
}
