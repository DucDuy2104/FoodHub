import { View, Text, Image } from 'react-native'
import React from 'react'
import OrderStyles from '../styles/OrderItemStyle'

const OrderItem = () => {
    return (
        <View style={OrderStyles.container}>
            <Image style={OrderStyles.image} source={{ uri: "https://firebasestorage.googleapis.com/v0/b/foodhub-642d2.appspot.com/o/tacos.jpg?alt=media&token=5463056b-c87f-432e-bbf6-6673c49e206e" }} />
            <View style={OrderStyles.rightSection}>
                <Text style={OrderStyles.name}>
                    Name
                </Text >
                <Text style={OrderStyles.topping}>
                    topping
                </Text>
                <Text style={OrderStyles.price}>
                    $30.00
                </Text>
                <Text style={OrderStyles.quantity}>
                    Quantity: 3
                </Text>
            </View>

        </View>
    )
}

export default OrderItem