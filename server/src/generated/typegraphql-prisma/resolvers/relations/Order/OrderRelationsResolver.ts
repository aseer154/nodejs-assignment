import * as TypeGraphQL from "type-graphql";
import { Order } from "../../../models/Order";
import { OrderDetail } from "../../../models/OrderDetail";
import { User } from "../../../models/User";
import { OrderOrderDetailsArgs } from "./args/OrderOrderDetailsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Order)
export class OrderRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async customer(@TypeGraphQL.Root() order: Order, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).order.findUnique({
      where: {
        id: order.id,
      },
    }).customer({});
  }

  @TypeGraphQL.FieldResolver(_type => [OrderDetail], {
    nullable: false
  })
  async orderDetails(@TypeGraphQL.Root() order: Order, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: OrderOrderDetailsArgs): Promise<OrderDetail[]> {
    return getPrismaFromContext(ctx).order.findUnique({
      where: {
        id: order.id,
      },
    }).orderDetails(args);
  }
}
