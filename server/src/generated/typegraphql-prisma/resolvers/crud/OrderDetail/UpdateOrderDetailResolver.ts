import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateOrderDetailArgs } from "./args/UpdateOrderDetailArgs";
import { OrderDetail } from "../../../models/OrderDetail";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => OrderDetail)
export class UpdateOrderDetailResolver {
  @TypeGraphQL.Mutation(_returns => OrderDetail, {
    nullable: true
  })
  async updateOrderDetail(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOrderDetailArgs): Promise<OrderDetail | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).orderDetail.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
