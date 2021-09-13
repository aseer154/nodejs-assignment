import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { OrderDetailOrderByWithRelationInput } from "../../../inputs/OrderDetailOrderByWithRelationInput";
import { OrderDetailWhereInput } from "../../../inputs/OrderDetailWhereInput";
import { OrderDetailWhereUniqueInput } from "../../../inputs/OrderDetailWhereUniqueInput";
import { OrderDetailScalarFieldEnum } from "../../../../enums/OrderDetailScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyOrderDetailArgs {
  @TypeGraphQL.Field(_type => OrderDetailWhereInput, {
    nullable: true
  })
  where?: OrderDetailWhereInput | undefined;

  @TypeGraphQL.Field(_type => [OrderDetailOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: OrderDetailOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => OrderDetailWhereUniqueInput, {
    nullable: true
  })
  cursor?: OrderDetailWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [OrderDetailScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "createdAt" | "updatedAt" | "productId" | "orderId" | "quantity" | "totalPrice"> | undefined;
}
