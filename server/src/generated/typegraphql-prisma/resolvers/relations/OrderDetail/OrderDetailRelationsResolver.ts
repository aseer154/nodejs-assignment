import * as TypeGraphQL from "type-graphql";
import { Order } from "../../../models/Order";
import { OrderDetail } from "../../../models/OrderDetail";
import { Product } from "../../../models/Product";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => OrderDetail)
export class OrderDetailRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Product, {
    nullable: true
  })
  async product(@TypeGraphQL.Root() orderDetail: OrderDetail, @TypeGraphQL.Ctx() ctx: any): Promise<Product | null> {
    return getPrismaFromContext(ctx).orderDetail.findUnique({
      where: {
        id: orderDetail.id,
      },
    }).product({});
  }

  @TypeGraphQL.FieldResolver(_type => Order, {
    nullable: true
  })
  async order(@TypeGraphQL.Root() orderDetail: OrderDetail, @TypeGraphQL.Ctx() ctx: any): Promise<Order | null> {
    return getPrismaFromContext(ctx).orderDetail.findUnique({
      where: {
        id: orderDetail.id,
      },
    }).order({});
  }
}
