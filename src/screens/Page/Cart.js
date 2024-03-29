import { FlatList, Image, Pressable, StyleSheet, Text, TextInput, View , TouchableOpacity} from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import ItemCard from '../../components/ItemCart'
import { AppContext } from '../../global/AppContext'
import AxiosInstance from '../../helper/AxiosInstance'

const Cart = () => {
    const { listCart, setListCart, curUser} = useContext(AppContext)
    const [count, setCount] = useState(0)
    const [refreshing, setRefreshing] = useState(false)
    const onDeleteItemPress = (id) => {
        listCart.forEach((food, i) => {
            if(food.id == id) {
                listCart.splice(i, 1);
            }
        });
        setListCart(listCart)
        onRefresh()
    }

    useEffect(()=> {
        console.log('reload')
    }, [listCart])

    const onRefresh=() => {
        setCount(pre=> ++pre)
        setRefreshing(false)
    }

    const getTotal =() => {
        var total =0;
        listCart.forEach(food => {
            total += food.count * food.price
        });

        return total
    }


    const onAdd = (item, count) => {
        listCart.forEach((e, i) => {
            if(e.id == item.id) {
                listCart[i].count = ++count
            }
        });
        console.log("onAdd...")
        setListCart(listCart)
        setCount(pre=> ++pre)
    }

    const onMin = (item, count) => {
        if(count > 1) {
            --count;
            listCart.forEach((e, i)=> {
                if(item.id == e.id) {
                    listCart[i].count = count
                }
            })
        }
        console.log("onMin...")
        setListCart(listCart)
        setCount(pre=> ++pre)
    }

    const onBuy = async (carts) => {
        try {
            const response = await AxiosInstance().post('api/orders/buy', {
                email: curUser.email,
                products: carts
            })
            if(response.status == true) {
                console.log("message: ", response.message)
                console.log("data: ", response.data)
                console.log("email: ", curUser.email)
            }
        } catch (error) {
            console.log("err: ", error.message)
        }
    }

    const onCheckOut=() => {
        if(listCart.length > 0) {
            onBuy(listCart)
        } else {
            console.log('message: empty cart')
        }
    }
    
    return listCart? (
        <View style={styles.container}>
            <View style={styles.view1}>
                <Text style={[styles.text1, styles.textCenter, styles.black]}>Cart</Text>
            </View>

            <FlatList style={styles.flat}
                refreshing={refreshing}
                onRefresh={onRefresh}
                data={listCart}
                renderItem={({ item }) => <ItemCard onAdd={onAdd} onMin={onMin} onDelete={()=> onDeleteItemPress(item.id)} dataSP={item} />}
                keyExtractor={(item) => item.id}
            />

            <View style={styles.view2}>
                <TextInput placeholder='Promo Code'
                    placeholderTextColor={'#BEBEBE'}
                    style={styles.input} />
                <Pressable style={styles.press}>
                    <Text style={styles.text2}>Apply</Text>
                </Pressable>
            </View>

            <View style={styles.view3}>
                <View style={styles.view4}>
                    <Text style={styles.text3}>Subtotal</Text>
                    <Text style={[styles.text3, styles.text4]}>${getTotal().toFixed(2)} <Text style={styles.text6}>USD</Text></Text>
                </View>
                <View style={styles.view4}>
                    <Text style={styles.text3}>Tax and Fees</Text>
                    <Text style={[styles.text3, styles.text4]}>${((10/100)*getTotal()).toFixed(2)} <Text style={styles.text6}>USD</Text></Text>
                </View>
                <View style={styles.view4}>
                    <Text style={styles.text3}>Delivery</Text>
                    <Text style={[styles.text3, styles.text4]}>$5.00 <Text style={styles.text6}>USD</Text></Text>
                </View>
                <View style={styles.view4}>
                    <Text style={styles.text3}>Total <Text style={styles.text5}>({listCart.length} item)</Text></Text>
                    <Text style={[styles.text3, styles.text4]}>${((getTotal()) + (((10/100)*getTotal())) + 5).toFixed(2)} <Text style={styles.text6}>USD</Text></Text>
                </View>
            </View>

            <TouchableOpacity onPress={onCheckOut} style={styles.press1}>
                <Text style={styles.text7}>CHECKOUT</Text>
            </TouchableOpacity>
        </View>
    ) : <Text>Loading...</Text>
}

export default Cart

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 25
    },
    view1: {
        alignItems:'center'
    },
    text1: {
        fontSize: 18,
        fontWeight: '400',
        lineHeight: 80,
    },
    textCenter: {
        textAlign: 'center'
    },
    black: {
        color: '#111719'
    },
    img1: {
        marginTop: 10,
        marginLeft: 10
    },
    flat: {
        height: 250,
        top: -30
    },
    view2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#EEE',
        marginTop: 25,
        top: -30
    },
    input: {
        alignItems: 'center',
        fontSize: 14,
        fontWeight: '300'
    },
    press: {
        borderRadius: 30,
        backgroundColor: '#FE724C',
        width: 100,
        height: 40,
        marginTop: 5
    },
    text2: {
        color: 'white',
        textAlign: 'center',
        lineHeight: 35,
        fontSize: 16,
        fontWeight: '400'
    },
    view3: {
        marginTop: 25,
        top: -30
    },
    view4: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: '#F1F2F3',
        borderBottomWidth: 1,
        paddingBottom: 8,
        paddingTop: 13,
        top: -15
    },
    text3: {
        color: '#000',
        fontSize: 16,
        fontWeight: '400',
    },
    text4: {
        fontSize: 19,
        fontWeight: '500'
    }, text5: {
        color: '#BEBEBE',
        fontSize: 14,
        fontWeight: '300'
    },
    text6: {
        color: '#9796A1',
        fontSize: 14,
        fontWeight: '400',
    },
    press1: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        width: 248,
        height: 57,
        borderRadius: 30,
        backgroundColor: '#FE724C',
        marginLeft: 50
    },
    text7: {
        fontSize: 15,
        color: 'white',
        fontWeight: '600',
        letterSpacing: 1.2
    }
})

const lstData = [
    {
        id: 1,
        anh: 'https://i.pinimg.com/564x/d3/38/7f/d3387f2a00fa54ae47d0762a2ee4f5c6.jpg',
        ten: 'red pizza',
        mota: 'Spicy chicken, beef',
        gia: 15.30,
        soluong: 2
    },
    {
        id: 2,
        anh: 'https://i.pinimg.com/236x/fb/03/ed/fb03ed8284423ec2b4be947531b77056.jpg',
        ten: 'seafood pizza',
        mota: 'Spicy chicken',
        gia: 15.30,
        soluong: 6
    },
    {
        id: 3,
        anh: 'https://i.pinimg.com/236x/28/60/b1/2860b1bc1a4acf38de03884784eaa9d6.jpg',
        ten: 'red pizza',
        mota: 'Spicy chicken, beef',
        gia: 15.30,
        soluong: 2
    },
    {
        id: 4,
        anh: 'https://i.pinimg.com/236x/34/28/93/342893d93c8023d361fb7b3dcb915001.jpg',
        ten: 'red pizza',
        mota: 'Spicy chicken, beef',
        gia: 15.30,
        soluong: 10
    },
    {
        id: 5,
        anh: 'https://i.pinimg.com/236x/28/13/ee/2813ee8b652a3e199be30277d9b9b779.jpg',
        ten: 'red pizza',
        mota: 'Spicy chicken, beef',
        gia: 15.30,
        soluong: 5
    },
]