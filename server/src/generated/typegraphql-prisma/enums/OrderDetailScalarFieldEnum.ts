import * as TypeGraphQL from "type-graphql";

export enum OrderDetailScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  productId = "productId",
  orderId = "orderId",
  quantity = "quantity",
  totalPrice = "totalPrice"
}
TypeGraphQL.registerEnumType(OrderDetailScalarFieldEnum, {
  name: "OrderDetailScalarFieldEnum",
  description: undefined,
});
