import gql from 'graphql-tag';

const CREATE_ORDER = gql`
	mutation ($createOrderData: OrderCreateInput!) {
		createOrder(data: $createOrderData) {
			id
			orderDetails {
				id
				productId
			}
		}
	}
`;

const GET_ORDERS = gql`
	{
		orderDetails {
			orderId,
			quantity,
			totalPrice
		}
	}
`;

const GET_ORDER = gql`
	query($orderDetailsWhere: OrderDetailWhereInput) {
		orderDetails(where: $orderDetailsWhere) {
			orderId
			quantity
			totalPrice
			product {
				name
				price
			}
		}
	}
`;

const GET_ORDER_HISTORY = gql`
	query($groupByOrderDetailBy: [OrderDetailScalarFieldEnum!]!) {
		groupByOrderDetail(by: $groupByOrderDetailBy) {
			orderId
			_count {
				productId
			}
			_sum {
				quantity
				totalPrice
			}
		}
	}
`;

export { CREATE_ORDER, GET_ORDERS, GET_ORDER, GET_ORDER_HISTORY };
