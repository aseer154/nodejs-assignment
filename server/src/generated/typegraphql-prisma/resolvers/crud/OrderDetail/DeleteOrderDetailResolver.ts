import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteOrderDetailArgs } from "./args/DeleteOrderDetailArgs";
import { OrderDetail } from "../../../models/OrderDetail";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => OrderDetail)
export class DeleteOrderDetailResolver {
  @TypeGraphQL.Mutation(_returns => OrderDetail, {
    nullable: true
  })
  async deleteOrderDetail(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOrderDetailArgs): Promise<OrderDetail | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).orderDetail.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
