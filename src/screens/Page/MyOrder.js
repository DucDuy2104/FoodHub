import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import OrderItem2 from '../../components/OrderItem2'
import { AppContext } from '../../global/AppContext'
import AxiosInstance from '../../helper/AxiosInstance'

const MyOrder = () => {
    const {curUser} = useContext(AppContext)
    const [orders, setOrders] = useState()
    const [count, setCount] = useState(0)
    const [refreshing, setRefreshing] = useState(false)

    const getData = async () => {
        try {
            const response = await AxiosInstance().get('/api/orders/' + curUser.email)
            if(response.status) {
                console.log('orders: ', response.data.orders)
                setOrders(response.data.orders)
            } 
        } catch (error) {
            console.log('err: ', error.message)
        }
    }

    useEffect(()=> {
        getData()
    }, [count])

    
    return (
        <View style={styles.container}>
            <View style={styles.view1}>
                <Image source={require('../../assets/img/backbtn.png')}/>
                <Text style={[styles.text1, styles.bold400]}>My Orders</Text>
                <Image style={styles.img1} source={require('../../assets/img/myorders/img13.png')}/>
            </View>

            <FlatList
            refreshing={refreshing}
            onRefresh={()=> {setCount(pre => ++pre)}}
            style={styles.flat1} data={orders}
            renderItem={({item}) => <OrderItem2 data={item} />}
            keyExtractor={(item) => item.date}/>
        </View>
    ) 
}

export default MyOrder

const styles = StyleSheet.create({
    view1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    text1: {
        color: '#111719',
        fontSize: 18,
        marginTop: 17
    },
    bold400: {
        fontWeight: '400'
    },
    img1: {
        marginTop: 10
    },
    text2: {
        marginLeft: 36,
        color: '#111719',
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 10
    },
    flat1: {
        paddingBottom: 40
    }
})

const data = [
    {
        id: 1,
        anh: 'https://i.pinimg.com/236x/92/45/c6/9245c655d6307d0e53b5fed652a35a3e.jpg',
        thoigian: '20 Jun, 10:30',
        ten: 'Jimmy John\'s',
        tt: 'Order Delivered',
        soluong: 7,
        gia: 17.10
    },
    {
        id: 2,
        anh: 'https://i.pinimg.com/236x/4b/eb/2a/4beb2a37a5810f9eacc37e3c6234889c.jpg',
        thoigian: '19 Jun, 11:50',
        ten: 'Subway',
        tt: 'Order Delivered',
        soluong: 3,
        gia: 20.50
    },
    {
        id: 3,
        anh: 'https://i.pinimg.com/236x/92/45/c6/9245c655d6307d0e53b5fed652a35a3e.jpg',
        thoigian: '20 Jun, 10:30',
        ten: 'Jimmy John\'s',
        tt: 'Order Delivered',
        soluong: 3,
        gia: 17.10
    },
    {
        id: 4,
        anh: 'https://i.pinimg.com/236x/4b/eb/2a/4beb2a37a5810f9eacc37e3c6234889c.jpg',
        thoigian: '19 Jun, 11:50',
        ten: 'Subway',
        tt: 'Order Delivered',
        soluong: 9,
        gia: 20.50
    },
    {
        id: 5,
        anh: 'https://i.pinimg.com/236x/92/45/c6/9245c655d6307d0e53b5fed652a35a3e.jpg',
        thoigian: '20 Jun, 10:30',
        ten: 'Jimmy John\'s',
        tt: 'Order Delivered',
        soluong: 3,
        gia: 17.10
    },
]