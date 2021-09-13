import * as TypeGraphQL from "type-graphql";
import { OrderDetail } from "../../../models/OrderDetail";
import { Product } from "../../../models/Product";
import { ProductOrderDetailsArgs } from "./args/ProductOrderDetailsArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Product)
export class ProductRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [OrderDetail], {
    nullable: false
  })
  async orderDetails(@TypeGraphQL.Root() product: Product, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProductOrderDetailsArgs): Promise<OrderDetail[]> {
    return getPrismaFromContext(ctx).product.findUnique({
      where: {
        id: product.id,
      },
    }).orderDetails(args);
  }
}
