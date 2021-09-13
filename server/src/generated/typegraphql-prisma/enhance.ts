import { ClassType } from "type-graphql";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";
import * as argsTypes from "./resolvers/crud/args.index";

const crudResolversMap = {
  Product: crudResolvers.ProductCrudResolver,
  Order: crudResolvers.OrderCrudResolver,
  OrderDetail: crudResolvers.OrderDetailCrudResolver,
  User: crudResolvers.UserCrudResolver
};
const relationResolversMap = {
  Product: relationResolvers.ProductRelationsResolver,
  Order: relationResolvers.OrderRelationsResolver,
  OrderDetail: relationResolvers.OrderDetailRelationsResolver,
  User: relationResolvers.UserRelationsResolver
};
const actionResolversMap = {
  Product: {
    product: actionResolvers.FindUniqueProductResolver,
    findFirstProduct: actionResolvers.FindFirstProductResolver,
    products: actionResolvers.FindManyProductResolver,
    createProduct: actionResolvers.CreateProductResolver,
    createManyProduct: actionResolvers.CreateManyProductResolver,
    deleteProduct: actionResolvers.DeleteProductResolver,
    updateProduct: actionResolvers.UpdateProductResolver,
    deleteManyProduct: actionResolvers.DeleteManyProductResolver,
    updateManyProduct: actionResolvers.UpdateManyProductResolver,
    upsertProduct: actionResolvers.UpsertProductResolver,
    aggregateProduct: actionResolvers.AggregateProductResolver,
    groupByProduct: actionResolvers.GroupByProductResolver
  },
  Order: {
    order: actionResolvers.FindUniqueOrderResolver,
    findFirstOrder: actionResolvers.FindFirstOrderResolver,
    orders: actionResolvers.FindManyOrderResolver,
    createOrder: actionResolvers.CreateOrderResolver,
    createManyOrder: actionResolvers.CreateManyOrderResolver,
    deleteOrder: actionResolvers.DeleteOrderResolver,
    updateOrder: actionResolvers.UpdateOrderResolver,
    deleteManyOrder: actionResolvers.DeleteManyOrderResolver,
    updateManyOrder: actionResolvers.UpdateManyOrderResolver,
    upsertOrder: actionResolvers.UpsertOrderResolver,
    aggregateOrder: actionResolvers.AggregateOrderResolver,
    groupByOrder: actionResolvers.GroupByOrderResolver
  },
  OrderDetail: {
    orderDetail: actionResolvers.FindUniqueOrderDetailResolver,
    findFirstOrderDetail: actionResolvers.FindFirstOrderDetailResolver,
    orderDetails: actionResolvers.FindManyOrderDetailResolver,
    createOrderDetail: actionResolvers.CreateOrderDetailResolver,
    createManyOrderDetail: actionResolvers.CreateManyOrderDetailResolver,
    deleteOrderDetail: actionResolvers.DeleteOrderDetailResolver,
    updateOrderDetail: actionResolvers.UpdateOrderDetailResolver,
    deleteManyOrderDetail: actionResolvers.DeleteManyOrderDetailResolver,
    updateManyOrderDetail: actionResolvers.UpdateManyOrderDetailResolver,
    upsertOrderDetail: actionResolvers.UpsertOrderDetailResolver,
    aggregateOrderDetail: actionResolvers.AggregateOrderDetailResolver,
    groupByOrderDetail: actionResolvers.GroupByOrderDetailResolver
  },
  User: {
    user: actionResolvers.FindUniqueUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    users: actionResolvers.FindManyUserResolver,
    createUser: actionResolvers.CreateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    deleteUser: actionResolvers.DeleteUserResolver,
    updateUser: actionResolvers.UpdateUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    upsertUser: actionResolvers.UpsertUserResolver,
    aggregateUser: actionResolvers.AggregateUserResolver,
    groupByUser: actionResolvers.GroupByUserResolver
  }
};
const resolversInfo = {
  Product: ["product", "findFirstProduct", "products", "createProduct", "createManyProduct", "deleteProduct", "updateProduct", "deleteManyProduct", "updateManyProduct", "upsertProduct", "aggregateProduct", "groupByProduct"],
  Order: ["order", "findFirstOrder", "orders", "createOrder", "createManyOrder", "deleteOrder", "updateOrder", "deleteManyOrder", "updateManyOrder", "upsertOrder", "aggregateOrder", "groupByOrder"],
  OrderDetail: ["orderDetail", "findFirstOrderDetail", "orderDetails", "createOrderDetail", "createManyOrderDetail", "deleteOrderDetail", "updateOrderDetail", "deleteManyOrderDetail", "updateManyOrderDetail", "upsertOrderDetail", "aggregateOrderDetail", "groupByOrderDetail"],
  User: ["user", "findFirstUser", "users", "createUser", "createManyUser", "deleteUser", "updateUser", "deleteManyUser", "updateManyUser", "upsertUser", "aggregateUser", "groupByUser"]
};
const relationResolversInfo = {
  Product: ["orderDetails"],
  Order: ["customer", "orderDetails"],
  OrderDetail: ["product", "order"],
  User: ["orders"]
};
const modelsInfo = {
  Product: ["id", "createdAt", "updatedAt", "name", "image", "description", "quantity", "price"],
  Order: ["id", "createdAt", "updatedAt", "customerId"],
  OrderDetail: ["id", "createdAt", "updatedAt", "productId", "orderId", "quantity", "totalPrice"],
  User: ["id", "createdAt", "updatedAt", "email", "firstName", "lastName", "address"]
};
const inputsInfo = {
  ProductWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "image", "description", "quantity", "price", "orderDetails"],
  ProductOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "name", "image", "description", "quantity", "price", "orderDetails"],
  ProductWhereUniqueInput: ["id"],
  ProductOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "name", "image", "description", "quantity", "price", "_count", "_avg", "_max", "_min", "_sum"],
  ProductScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "name", "image", "description", "quantity", "price"],
  OrderWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "customerId", "customer", "orderDetails"],
  OrderOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "customerId", "customer", "orderDetails"],
  OrderWhereUniqueInput: ["id"],
  OrderOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "customerId", "_count", "_avg", "_max", "_min", "_sum"],
  OrderScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "customerId"],
  OrderDetailWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "productId", "product", "orderId", "order", "quantity", "totalPrice"],
  OrderDetailOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "productId", "product", "orderId", "order", "quantity", "totalPrice"],
  OrderDetailWhereUniqueInput: ["id"],
  OrderDetailOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "productId", "orderId", "quantity", "totalPrice", "_count", "_avg", "_max", "_min", "_sum"],
  OrderDetailScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "productId", "orderId", "quantity", "totalPrice"],
  UserWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "email", "firstName", "lastName", "address", "orders"],
  UserOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "email", "firstName", "lastName", "address", "orders"],
  UserWhereUniqueInput: ["id", "email"],
  UserOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "email", "firstName", "lastName", "address", "_count", "_avg", "_max", "_min", "_sum"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "email", "firstName", "lastName", "address"],
  ProductCreateInput: ["id", "createdAt", "updatedAt", "name", "image", "description", "quantity", "price", "orderDetails"],
  ProductUpdateInput: ["id", "createdAt", "updatedAt", "name", "image", "description", "quantity", "price", "orderDetails"],
  ProductCreateManyInput: ["id", "createdAt", "updatedAt", "name", "image", "description", "quantity", "price"],
  ProductUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "name", "image", "description", "quantity", "price"],
  OrderCreateInput: ["id", "createdAt", "updatedAt", "customer", "orderDetails"],
  OrderUpdateInput: ["id", "createdAt", "updatedAt", "customer", "orderDetails"],
  OrderCreateManyInput: ["id", "createdAt", "updatedAt", "customerId"],
  OrderUpdateManyMutationInput: ["id", "createdAt", "updatedAt"],
  OrderDetailCreateInput: ["id", "createdAt", "updatedAt", "quantity", "totalPrice", "product", "order"],
  OrderDetailUpdateInput: ["id", "createdAt", "updatedAt", "quantity", "totalPrice", "product", "order"],
  OrderDetailCreateManyInput: ["id", "createdAt", "updatedAt", "productId", "orderId", "quantity", "totalPrice"],
  OrderDetailUpdateManyMutationInput: ["id", "createdAt", "updatedAt", "quantity", "totalPrice"],
  UserCreateInput: ["createdAt", "updatedAt", "email", "firstName", "lastName", "address", "orders"],
  UserUpdateInput: ["createdAt", "updatedAt", "email", "firstName", "lastName", "address", "orders"],
  UserCreateManyInput: ["id", "createdAt", "updatedAt", "email", "firstName", "lastName", "address"],
  UserUpdateManyMutationInput: ["createdAt", "updatedAt", "email", "firstName", "lastName", "address"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  FloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  OrderDetailListRelationFilter: ["every", "some", "none"],
  OrderDetailOrderByRelationAggregateInput: ["_count"],
  ProductCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name", "image", "description", "quantity", "price"],
  ProductAvgOrderByAggregateInput: ["quantity", "price"],
  ProductMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name", "image", "description", "quantity", "price"],
  ProductMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "name", "image", "description", "quantity", "price"],
  ProductSumOrderByAggregateInput: ["quantity", "price"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  FloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  UserRelationFilter: ["is", "isNot"],
  OrderCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "customerId"],
  OrderAvgOrderByAggregateInput: ["customerId"],
  OrderMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "customerId"],
  OrderMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "customerId"],
  OrderSumOrderByAggregateInput: ["customerId"],
  IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  ProductRelationFilter: ["is", "isNot"],
  OrderRelationFilter: ["is", "isNot"],
  OrderDetailCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "productId", "orderId", "quantity", "totalPrice"],
  OrderDetailAvgOrderByAggregateInput: ["quantity", "totalPrice"],
  OrderDetailMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "productId", "orderId", "quantity", "totalPrice"],
  OrderDetailMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "productId", "orderId", "quantity", "totalPrice"],
  OrderDetailSumOrderByAggregateInput: ["quantity", "totalPrice"],
  OrderListRelationFilter: ["every", "some", "none"],
  OrderOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "email", "firstName", "lastName", "address"],
  UserAvgOrderByAggregateInput: ["id"],
  UserMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "email", "firstName", "lastName", "address"],
  UserMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "email", "firstName", "lastName", "address"],
  UserSumOrderByAggregateInput: ["id"],
  OrderDetailCreateNestedManyWithoutProductInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  FloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  OrderDetailUpdateManyWithoutProductInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutOrdersInput: ["create", "connectOrCreate", "connect"],
  OrderDetailCreateNestedManyWithoutOrderInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserUpdateOneWithoutOrdersInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  OrderDetailUpdateManyWithoutOrderInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  ProductCreateNestedOneWithoutOrderDetailsInput: ["create", "connectOrCreate", "connect"],
  OrderCreateNestedOneWithoutOrderDetailsInput: ["create", "connectOrCreate", "connect"],
  ProductUpdateOneWithoutOrderDetailsInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  OrderUpdateOneWithoutOrderDetailsInput: ["create", "connectOrCreate", "upsert", "connect", "disconnect", "delete", "update"],
  OrderCreateNestedManyWithoutCustomerInput: ["create", "connectOrCreate", "createMany", "connect"],
  OrderUpdateManyWithoutCustomerInput: ["create", "connectOrCreate", "upsert", "createMany", "connect", "set", "disconnect", "delete", "update", "updateMany", "deleteMany"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  OrderDetailCreateWithoutProductInput: ["id", "createdAt", "updatedAt", "quantity", "totalPrice", "order"],
  OrderDetailCreateOrConnectWithoutProductInput: ["where", "create"],
  OrderDetailCreateManyProductInputEnvelope: ["data", "skipDuplicates"],
  OrderDetailUpsertWithWhereUniqueWithoutProductInput: ["where", "update", "create"],
  OrderDetailUpdateWithWhereUniqueWithoutProductInput: ["where", "data"],
  OrderDetailUpdateManyWithWhereWithoutProductInput: ["where", "data"],
  OrderDetailScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "productId", "orderId", "quantity", "totalPrice"],
  UserCreateWithoutOrdersInput: ["createdAt", "updatedAt", "email", "firstName", "lastName", "address"],
  UserCreateOrConnectWithoutOrdersInput: ["where", "create"],
  OrderDetailCreateWithoutOrderInput: ["id", "createdAt", "updatedAt", "quantity", "totalPrice", "product"],
  OrderDetailCreateOrConnectWithoutOrderInput: ["where", "create"],
  OrderDetailCreateManyOrderInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithoutOrdersInput: ["update", "create"],
  UserUpdateWithoutOrdersInput: ["createdAt", "updatedAt", "email", "firstName", "lastName", "address"],
  OrderDetailUpsertWithWhereUniqueWithoutOrderInput: ["where", "update", "create"],
  OrderDetailUpdateWithWhereUniqueWithoutOrderInput: ["where", "data"],
  OrderDetailUpdateManyWithWhereWithoutOrderInput: ["where", "data"],
  ProductCreateWithoutOrderDetailsInput: ["id", "createdAt", "updatedAt", "name", "image", "description", "quantity", "price"],
  ProductCreateOrConnectWithoutOrderDetailsInput: ["where", "create"],
  OrderCreateWithoutOrderDetailsInput: ["id", "createdAt", "updatedAt", "customer"],
  OrderCreateOrConnectWithoutOrderDetailsInput: ["where", "create"],
  ProductUpsertWithoutOrderDetailsInput: ["update", "create"],
  ProductUpdateWithoutOrderDetailsInput: ["id", "createdAt", "updatedAt", "name", "image", "description", "quantity", "price"],
  OrderUpsertWithoutOrderDetailsInput: ["update", "create"],
  OrderUpdateWithoutOrderDetailsInput: ["id", "createdAt", "updatedAt", "customer"],
  OrderCreateWithoutCustomerInput: ["id", "createdAt", "updatedAt", "orderDetails"],
  OrderCreateOrConnectWithoutCustomerInput: ["where", "create"],
  OrderCreateManyCustomerInputEnvelope: ["data", "skipDuplicates"],
  OrderUpsertWithWhereUniqueWithoutCustomerInput: ["where", "update", "create"],
  OrderUpdateWithWhereUniqueWithoutCustomerInput: ["where", "data"],
  OrderUpdateManyWithWhereWithoutCustomerInput: ["where", "data"],
  OrderScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "customerId"],
  OrderDetailCreateManyProductInput: ["id", "createdAt", "updatedAt", "orderId", "quantity", "totalPrice"],
  OrderDetailUpdateWithoutProductInput: ["id", "createdAt", "updatedAt", "quantity", "totalPrice", "order"],
  OrderDetailCreateManyOrderInput: ["id", "createdAt", "updatedAt", "productId", "quantity", "totalPrice"],
  OrderDetailUpdateWithoutOrderInput: ["id", "createdAt", "updatedAt", "quantity", "totalPrice", "product"],
  OrderCreateManyCustomerInput: ["id", "createdAt", "updatedAt"],
  OrderUpdateWithoutCustomerInput: ["id", "createdAt", "updatedAt", "orderDetails"]
};
const outputsInfo = {
  AggregateProduct: ["_count", "_avg", "_sum", "_min", "_max"],
  ProductGroupBy: ["id", "createdAt", "updatedAt", "name", "image", "description", "quantity", "price", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateOrder: ["_count", "_avg", "_sum", "_min", "_max"],
  OrderGroupBy: ["id", "createdAt", "updatedAt", "customerId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateOrderDetail: ["_count", "_avg", "_sum", "_min", "_max"],
  OrderDetailGroupBy: ["id", "createdAt", "updatedAt", "productId", "orderId", "quantity", "totalPrice", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
  UserGroupBy: ["id", "createdAt", "updatedAt", "email", "firstName", "lastName", "address", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  ProductCount: ["orderDetails"],
  ProductCountAggregate: ["id", "createdAt", "updatedAt", "name", "image", "description", "quantity", "price", "_all"],
  ProductAvgAggregate: ["quantity", "price"],
  ProductSumAggregate: ["quantity", "price"],
  ProductMinAggregate: ["id", "createdAt", "updatedAt", "name", "image", "description", "quantity", "price"],
  ProductMaxAggregate: ["id", "createdAt", "updatedAt", "name", "image", "description", "quantity", "price"],
  OrderCount: ["orderDetails"],
  OrderCountAggregate: ["id", "createdAt", "updatedAt", "customerId", "_all"],
  OrderAvgAggregate: ["customerId"],
  OrderSumAggregate: ["customerId"],
  OrderMinAggregate: ["id", "createdAt", "updatedAt", "customerId"],
  OrderMaxAggregate: ["id", "createdAt", "updatedAt", "customerId"],
  OrderDetailCountAggregate: ["id", "createdAt", "updatedAt", "productId", "orderId", "quantity", "totalPrice", "_all"],
  OrderDetailAvgAggregate: ["quantity", "totalPrice"],
  OrderDetailSumAggregate: ["quantity", "totalPrice"],
  OrderDetailMinAggregate: ["id", "createdAt", "updatedAt", "productId", "orderId", "quantity", "totalPrice"],
  OrderDetailMaxAggregate: ["id", "createdAt", "updatedAt", "productId", "orderId", "quantity", "totalPrice"],
  UserCount: ["orders"],
  UserCountAggregate: ["id", "createdAt", "updatedAt", "email", "firstName", "lastName", "address", "_all"],
  UserAvgAggregate: ["id"],
  UserSumAggregate: ["id"],
  UserMinAggregate: ["id", "createdAt", "updatedAt", "email", "firstName", "lastName", "address"],
  UserMaxAggregate: ["id", "createdAt", "updatedAt", "email", "firstName", "lastName", "address"]
};
const argsInfo = {
  FindUniqueProductArgs: ["where"],
  FindFirstProductArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyProductArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateProductArgs: ["data"],
  CreateManyProductArgs: ["data", "skipDuplicates"],
  DeleteProductArgs: ["where"],
  UpdateProductArgs: ["data", "where"],
  DeleteManyProductArgs: ["where"],
  UpdateManyProductArgs: ["data", "where"],
  UpsertProductArgs: ["where", "create", "update"],
  AggregateProductArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByProductArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueOrderArgs: ["where"],
  FindFirstOrderArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyOrderArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateOrderArgs: ["data"],
  CreateManyOrderArgs: ["data", "skipDuplicates"],
  DeleteOrderArgs: ["where"],
  UpdateOrderArgs: ["data", "where"],
  DeleteManyOrderArgs: ["where"],
  UpdateManyOrderArgs: ["data", "where"],
  UpsertOrderArgs: ["where", "create", "update"],
  AggregateOrderArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByOrderArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueOrderDetailArgs: ["where"],
  FindFirstOrderDetailArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyOrderDetailArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateOrderDetailArgs: ["data"],
  CreateManyOrderDetailArgs: ["data", "skipDuplicates"],
  DeleteOrderDetailArgs: ["where"],
  UpdateOrderDetailArgs: ["data", "where"],
  DeleteManyOrderDetailArgs: ["where"],
  UpdateManyOrderDetailArgs: ["data", "where"],
  UpsertOrderDetailArgs: ["where", "create", "update"],
  AggregateOrderDetailArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByOrderDetailArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  FindUniqueUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  CreateUserArgs: ["data"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  DeleteUserArgs: ["where"],
  UpdateUserArgs: ["data", "where"],
  DeleteManyUserArgs: ["where"],
  UpdateManyUserArgs: ["data", "where"],
  UpsertUserArgs: ["where", "create", "update"],
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
  > = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
  > = Partial<Record<ModelResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    if (resolverActionsConfig._all) {
      const allActionsDecorators = resolverActionsConfig._all;
      const resolverActionNames = resolversInfo[modelName as keyof typeof resolversInfo];
      for (const resolverActionName of resolverActionNames) {
        const actionTarget = (actionResolversConfig[
          resolverActionName as keyof typeof actionResolversConfig
        ] as Function).prototype;
        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(
            crudTarget,
            resolverActionName,
            Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)!,
          );
          allActionsDecorator(
            actionTarget,
            resolverActionName,
            Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)!,
          );
        }
      }
    }
    const resolverActionsToApply = Object.keys(resolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const resolverActionName of resolverActionsToApply) {
      const decorators = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[];
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      for (const decorator of decorators) {
        decorator(
          crudTarget,
          resolverActionName,
          Object.getOwnPropertyDescriptor(crudTarget, resolverActionName)!,
        );
        decorator(
          actionTarget,
          resolverActionName,
          Object.getOwnPropertyDescriptor(actionTarget, resolverActionName)!,
        );
      }
    }
  }
}

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
  > = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel> | "_all", MethodDecorator[]>>;

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    if (relationResolverActionsConfig._all) {
      const allActionsDecorators = relationResolverActionsConfig._all;
      const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
      for (const relationResolverActionName of relationResolverActionNames) {
        for (const allActionsDecorator of allActionsDecorators) {
          allActionsDecorator(
            relationResolverTarget,
            relationResolverActionName,
            Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
          );
        }
      }
    }
    const relationResolverActionsToApply = Object.keys(relationResolverActionsConfig).filter(
      it => it !== "_all"
    );
    for (const relationResolverActionName of relationResolverActionsToApply) {
      const decorators = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[];
      for (const decorator of decorators) {
        decorator(
          relationResolverTarget,
          relationResolverActionName,
          Object.getOwnPropertyDescriptor(relationResolverTarget, relationResolverActionName)!,
        );
      }
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys | "_all", PropertyDecorator[]>
>;

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    for (const decorator of enhanceConfig.class) {
      decorator(typeClass);
    }
  }
  if (enhanceConfig.fields) {
    if (enhanceConfig.fields._all) {
      const allFieldsDecorators = enhanceConfig.fields._all;
      for (const typeFieldName of typeFieldNames) {
        for (const allFieldsDecorator of allFieldsDecorators) {
          allFieldsDecorator(typePrototype, typeFieldName);
        }
      }
    }
    const configFieldsToApply = Object.keys(enhanceConfig.fields).filter(
      it => it !== "_all"
    );
    for (const typeFieldName of configFieldsToApply) {
      const fieldDecorators = enhanceConfig.fields[typeFieldName]!;
      for (const fieldDecorator of fieldDecorators) {
        fieldDecorator(typePrototype, typeFieldName);
      }
    }
  }
}

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
  > = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
  > = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
  > = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}







