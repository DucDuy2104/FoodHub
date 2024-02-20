import { View, Text, FlatList } from 'react-native'
import React from 'react'
import OrderItemStyle2 from '../styles/OrderItemStyle2'
import colors from './Colors'
import OrderItem from './OrderItem'


const OrderItem2 = () => {
    const orders = [
        {
            "products": [
                {
                    "count": 2,
                    "id": 2,
                    "image": "https://firebasestorage.googleapis.com/v0/b/foodhub-642d2.appspot.com/o/cheeseham.jpg?alt=media&token=5fe229e4-b51a-47f5-aef3-76f4c221fb58",
                    "name": "Cheeseburger",
                    "price": 8.49,
                    "title": "Classic Cheeseburger"
                },

                {
                    "count": 6,
                    "id": 9,
                    "image": "https://firebasestorage.googleapis.com/v0/b/foodhub-642d2.appspot.com/o/fishtacos.jpg?alt=media&token=89f261a9-9e60-40e9-ba25-bbbd4cbb43fe",
                    "name": "Crispy Fish Tacos",
                    "price": 10.99,
                    "title": "Crispy Fish Tacos"
                }
            ],
            "date" : "20-2-2024"
        }
    ]

    const render =({item}) => {
        return (
            <OrderItem order={item}/>
        )
    }
  return (
    <View style={OrderItemStyle2.container}>
      <View style={OrderItemStyle2.header}>
        <View>
            <Text style={{fontSize: 18, fontWeight: 'bold', color:'black'}}>Order Date</Text>
            <Text>20/12/2024</Text>
        </View>
        <Text style={{color: colors.primary, fontWeight: 'bold', fontSize: 18}}>$13.00</Text>
      </View>

      <FlatList
        renderItem={render}
        data={orders[0].products}
        keyExtractor={(item)=> item.id}
        style={OrderItemStyle2.flat}
      />
    </View>
  )
}

export default OrderItem2