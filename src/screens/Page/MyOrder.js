import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ItemOrder1 from '../../components/ItemOrder1'
import ItemOrder2 from '../../components/ItemOrder2'

const MyOrder = () => {
    return (
        <View style={styles.container}>
            <View style={styles.view1}>
                <Image source={require('../../assets/img/backbtn.png')}/>
                <Text style={[styles.text1, styles.bold400]}>My Orders</Text>
                <Image style={styles.img1} source={require('../../assets/img/myorders/img13.png')}/>
            </View>


            <Text style={styles.text2}>Lasted Orders</Text>
            <FlatList style={styles.flat1} data={data}
            renderItem={({item}) => <ItemOrder2 lstSP={item} />}
            keyExtractor={(item) => item.id}/>
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