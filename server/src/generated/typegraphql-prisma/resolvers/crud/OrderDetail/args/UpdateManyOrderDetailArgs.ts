import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrderDetailUpdateManyMutationInput } from "../../../inputs/OrderDetailUpdateManyMutationInput";
import { OrderDetailWhereInput } from "../../../inputs/OrderDetailWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyOrderDetailArgs {
  @TypeGraphQL.Field(_type => OrderDetailUpdateManyMutationInput, {
    nullable: false
  })
  data!: OrderDetailUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => OrderDetailWhereInput, {
    nullable: true
  })
  where?: OrderDetailWhereInput | undefined;
}
