import { View, Text, FlatList } from 'react-native'
import React from 'react'
import OrderItemStyle2 from '../styles/OrderItemStyle2'
import colors from './Colors'
import OrderItem from './OrderItem'


const OrderItem2 = ({data}) => {

    const render =({item}) => {
        return (
            <OrderItem order={item}/>
        )
    }

    const getTotal = () => {
      var total = 0;
      data.products.forEach(fo => {
        total += fo.count * fo.price 
      });
      return total
    }
  return (
    <View style={OrderItemStyle2.container}>
      <View style={OrderItemStyle2.header}>
        <View>
            <Text style={{fontSize: 18, fontWeight: 'bold', color:'black'}}>Order Date</Text>
            <Text>{data.date}</Text>
        </View>
        <Text style={{color: colors.primary, fontWeight: 'bold', fontSize: 18}}>${(getTotal()+5).toFixed(2)}</Text>
      </View>

      <FlatList
        renderItem={render}
        data={data.products}
        keyExtractor={(item)=> item.id}
        style={OrderItemStyle2.flat}
      />
    </View>
  )
}

export default OrderItem2