import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateOrderDetailArgs } from "./args/AggregateOrderDetailArgs";
import { OrderDetail } from "../../../models/OrderDetail";
import { AggregateOrderDetail } from "../../outputs/AggregateOrderDetail";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => OrderDetail)
export class AggregateOrderDetailResolver {
  @TypeGraphQL.Query(_returns => AggregateOrderDetail, {
    nullable: false
  })
  async aggregateOrderDetail(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateOrderDetailArgs): Promise<AggregateOrderDetail> {
    return getPrismaFromContext(ctx).orderDetail.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
