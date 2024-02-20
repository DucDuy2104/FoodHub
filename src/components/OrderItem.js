import { View, Text, Image } from 'react-native'
import React from 'react'
import OrderStyles from '../styles/OrderItemStyle'

const OrderItem = ({order}) => {
    return (
        <View style={OrderStyles.container}>
            <Image style={OrderStyles.image} source={{ uri: order.image }} />
            <View style={OrderStyles.rightSection}>
                <Text style={OrderStyles.name}>
                    {order.name}
                </Text >
                <Text style={OrderStyles.topping}>
                    {order.title}
                </Text>
                <Text style={OrderStyles.price}>
                    ${order.price}
                </Text>
                <Text style={OrderStyles.quantity}>
                    Quantity: {order.count}
                </Text>
            </View>

        </View>
    )
}

export default OrderItem