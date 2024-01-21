import { FlatList, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import ItemCard from '../../components/ItemCard'

const Card = () => {
    return (
        <View style={styles.container}>
            <View style={styles.view1}>
                <Image style={styles.img1} source={require('../../assets/img/backbtn.png')} />
                <Text style={[styles.text1, styles.textCenter, styles.black]}>Card</Text>
            </View>

            <FlatList style={styles.flat}
                data={lstData}
                renderItem={({ item }) => <ItemCard dataSP={item} />}
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
                    <Text style={[styles.text3, styles.text4]}>$27.30 <Text style={styles.text6}>USD</Text></Text>
                </View>
                <View style={styles.view4}>
                    <Text style={styles.text3}>Tax and Fees</Text>
                    <Text style={[styles.text3, styles.text4]}>$27.30 <Text style={styles.text6}>USD</Text></Text>
                </View>
                <View style={styles.view4}>
                    <Text style={styles.text3}>Delivery</Text>
                    <Text style={[styles.text3, styles.text4]}>$27.30 <Text style={styles.text6}>USD</Text></Text>
                </View>
                <View style={styles.view4}>
                    <Text style={styles.text3}>Total <Text style={styles.text5}>(5 item)</Text></Text>
                    <Text style={[styles.text3, styles.text4]}>$27.30 <Text style={styles.text6}>USD</Text></Text>
                </View>
            </View>

            <Pressable style={styles.press1}>
                <Text style={styles.text7}>CHECKOUT</Text>
            </Pressable>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 25
    },
    view1: {
        flexDirection: 'row',
    },
    text1: {
        fontSize: 18,
        fontWeight: '400',
        lineHeight: 80,
        marginLeft: 90
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
        marginTop: 80,
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