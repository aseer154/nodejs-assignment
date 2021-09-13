import React from 'react';
import {InputNumber, Table} from 'antd';

import { GET_ORDER } from '../../queries/order.queries';
import {useQuery} from '@apollo/client';

interface OrderDetailsProps {
    orderId: string | null
}

const OrderDetailsPage: React.FC<OrderDetailsProps> = ({ orderId }) => {
    const { data } = useQuery(GET_ORDER, { 
        variables: {
            "orderDetailsWhere": {
                "orderId": {
                    "equals": orderId
                }
            }
        }
    });
    
    const columns = [
        {
            title: 'Item Name',
            dataIndex: 'product',
            render: (e: any) => <>{e.name}</>,
        },
        {
            title: 'Unit Price',
            dataIndex: 'product',
            render: (e: any) => <>{e.price.toLocaleString()}</>,
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            render: (value: any, row: any, index: any) => (
                <>{value.toLocaleString()}</>
            ),
        },
        {
            key: 'totalPrice',
            title: 'Item Total',
            dataIndex: 'totalPrice',
            render: (value: any, row: any, index: any) => (
                <>{value.toLocaleString()}</>
            ),
        }
    ]
        
    return (
        <>
            {
                (data) &&
                ( 
                    <Table
                        columns={columns}
                        dataSource={data.orderDetails}
                    />
                )
            }
        </>
    )
}

export default OrderDetailsPage;