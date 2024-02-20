import { FlatList, Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import HomeDropDown from '../../components/HomeDropDown'
import ItemHome1 from '../../components/ItemHome1'
import ItemHome2 from '../../components/ItemHome2'
import AxiosInstance from '../../helper/AxiosInstance'

const HomeScreens = ({navigation}) => {
    const [listsp, setListSp] = useState();

    const getAllProducts = async () => {
        try {
            console.log('on get Pro')
            const response = await AxiosInstance().get('/api/products');
            if(response) {
                console.log('response', response);
                setListSp(response)
            } else {
                console.log("not ok")
            }
        } catch (error) {
            console.log("lỗi cl", error.message)
        }
    }

    useEffect(()=> {
        getAllProducts()
    }, [])

    const onItemLick = (item) => {
        navigation.navigate('detail', {
            item: item
        })
    }

    return listsp? (
        <View style={styles.container}>
            <View style={[styles.view1, styles.row]}>
                <Pressable onPress={() => openDrawer()}>
                    <Image style={styles.img1} source={require('../../assets/img/home/drawer.png')} />
                </Pressable>
                <View>
                    <HomeDropDown />
                    <Text style={styles.text1}>4102 Pretty View Lane</Text>
                </View>
                <Image style={styles.img2} source={require('../../assets/img/home/avatarr.png')} />
            </View>

            <ScrollView>
                <Text style={styles.text2}>What would you like to order</Text>

                <View style={[styles.view2, styles.row]}>
                    <View style={[styles.view3, styles.row]}>
                        <Image style={[styles.img3]} source={require('../../assets/img/home/icons8-search-10.png')} />
                        <TextInput style={[styles.input1,]}
                            placeholder='Find for food or restaurant...' />
                    </View>
                    <Image style={[styles.img4,]} source={require('../../assets/img/home/select.png')} />
                </View>

                <ScrollView style={styles.scroll} horizontal={true}>
                    <ImageBackground style={styles.bg1}
                        imageStyle={{ borderRadius: 100 }}
                        source={require('../../assets/img/home/bgO.png')}>
                        <Image source={require('../../assets/img/home/hamburger.png')} />
                        <Text style={styles.text3}>Burger</Text>
                    </ImageBackground>

                    <ImageBackground style={styles.bg2}
                        imageStyle={{ borderRadius: 100 }}
                        source={require('../../assets/img/home/bgW.png')}>
                        <Image style={styles.img5} source={require('../../assets/img/home/donut.png')} />
                        <Text style={styles.text4}>Donut</Text>
                    </ImageBackground>

                    <ImageBackground style={styles.bg2}
                        imageStyle={{ borderRadius: 100 }}
                        source={require('../../assets/img/home/bgW.png')}>
                        <Image style={styles.img5} source={require('../../assets/img/home/pizza.png')} />
                        <Text style={styles.text4}>Pizza</Text>
                    </ImageBackground>

                    <ImageBackground style={styles.bg2}
                        imageStyle={{ borderRadius: 100 }}
                        source={require('../../assets/img/home/bgW.png')}>
                        <Image style={styles.img5} source={require('../../assets/img/home/hotdog.png')} />
                        <Text style={styles.text4}>Mexican</Text>
                    </ImageBackground>

                    <ImageBackground style={styles.bg2}
                        imageStyle={{ borderRadius: 100 }}
                        source={require('../../assets/img/home/bgW.png')}>
                        <Image style={styles.img5} source={require('../../assets/img/home/icedream.png')} />
                        <Text style={styles.text4}>Asia</Text>
                    </ImageBackground>

                    <ImageBackground style={styles.bg2}
                        imageStyle={{ borderRadius: 100 }}
                        source={require('../../assets/img/home/bgW.png')}>
                        <Image style={styles.img5} source={require('../../assets/img/home/asia.png')} />
                        <Text style={styles.text4}>Cheese</Text>
                    </ImageBackground>
                </ScrollView>

                <View style={[styles.view4, styles.row]}>
                    <Text style={styles.text5}>Featured Restaurants</Text>
                    <Text style={styles.text6}>View All  <Image source={require('../../assets/img/home/arrorR.png')} /></Text>
                </View>
                <FlatList data={data1}
                    renderItem={({ item }) => <ItemHome1 data1={item} />}
                    keyExtractor={(item) => item.id}
                    horizontal={true}
                    style={[styles.flat1]} />

                <Text style={[styles.text5, styles.text7]}>Popular Items</Text>
                <FlatList horizontal={true}
                    data={listsp}
                    renderItem={({ item }) => <ItemHome2 onItemLick={()=>onItemLick(item)} item={item} />}
                    keyExtractor={(item) => item.id}
                    style={[styles.flat2]} />
            </ScrollView>
        </View>
        
    ) : <Text>Loading...</Text>
}

export default HomeScreens

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10
    },
    row: {
        flexDirection: 'row'
    },
    view1: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    img1: {
        height: 65,
        width: 65
    },
    text1: {
        top: -30,
        color: '#FE724C',
        fontSize: 15,
        fontWeight: '500',
        textAlign: 'center'
    },
    text2: {
        marginLeft: 10,
        color: '#323643',
        fontSize: 36,
        fontWeight: '700',
        top: -15
    },
    view2: {
        justifyContent: 'space-between',
        alignItems: 'center',
        top: -20,
        marginLeft: 10
    },
    input1: {
        width: 260,
        marginLeft: 10
    },
    img3: {
        width: 20,
        height: 20,
    },
    img4: {
        width: 100,
        height: 100,
        marginTop: 30
    },
    view3: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#EFEFEF',
        borderRadius: 10,
        backgroundColor: '#FCFCFD',
        paddingLeft: 10,
        width: 280
    },
    scroll: {
        marginLeft: 10,
        top: -30
    },
    bg1: {
        width: 60,
        height: 100,
        borderRadius: 100,
        backgroundColor: '#fe724c',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginRight: 10
    },
    text3: {
        color: "#fff",
        fontSize: 11,
        fontWeight: '500',
        marginBottom: 10
    },
    bg2: {
        width: 70,
        height: 160,
        bottom: 10,
        marginRight: 10
    },
    text4: {
        fontSize: 11,
        fontWeight: '500',
        marginLeft: 20,
        marginTop: 5
    },
    img5: {
        marginLeft: 10,
        marginTop: 15,
        width: 55,
        height: 55
    },
    view4: {
        justifyContent: 'space-between',
        marginHorizontal: 10,
        top: -60,
        alignItems: 'center'
    },
    text5: {
        color: '#323643',
        fontSize: 18,
        fontWeight: '600'
    },
    text6: {
        color: '#F56844',
        fontSize: 13,
        fontWeight: '400'
    },
    flat1: {
        marginLeft: 10,
        top: -55,
        left: -20
    },
    flat2: {
        marginLeft: 10,
        top: -20,
        height: 300,
    },
    text7: {
        top: -35,
        marginLeft: 10
    }

})

const data1 = [
    {
        id: 1,
        img: 'https://i.pinimg.com/236x/77/74/b9/7774b9fc16a1d904a24658c82f136707.jpg',
        rate: 4.5,
        brand: 'HighLands',
        time: '10-15'
    },
    {
        id: 2,
        img: 'https://i.pinimg.com/236x/aa/e4/0a/aae40a668370be315cadec8b3c3c1b1b.jpg',
        rate: 4.5,
        brand: 'Phuc Long',
        time: '5-10'
    },
    {
        id: 3,
        img: 'https://i.pinimg.com/236x/18/d3/32/18d332a420eeeb1be91b19691ce4f105.jpg',
        rate: 4.5,
        brand: 'KFC',
        time: '20-25'
    },
    {
        id: 4,
        img: 'https://i.pinimg.com/474x/5a/fe/e9/5afee90967ba5aea8b65acd54ce8e6f5.jpg',
        rate: 4.5,
        brand: 'Starbuck',
        time: '10-15'
    },
    {
        id: 5,
        img: 'https://i.pinimg.com/564x/ba/95/97/ba9597c49522e35ee6515923fed912fc.jpg',
        rate: 4.5,
        brand: 'McDonald\’s',
        time: '10-20'
    },

]

const data2 = [
    {
        id: 1,
        anh: 'https://i.pinimg.com/236x/a6/b0/48/a6b0482fe9ccf6121f34450899dbc644.jpg',
        name: 'Salmon Salad',
        title: 'Baked salmon fish',
        rate: 4.5,
        price: 5.20,
        use: 25
    },
    {
        id: 2,
        anh: 'https://i.pinimg.com/236x/a6/b0/48/a6b0482fe9ccf6121f34450899dbc644.jpg',
        name: 'Salmon Salad',
        title: 'Baked salmon fish',
        rate: 4.5,
        price: 5.20,
        use: 25
    },
    {
        id: 3,
        anh: 'https://i.pinimg.com/236x/a9/11/06/a91106886e11586a5cda7daf79c0dac9.jpg',
        name: 'Salmon Salad',
        title: 'Baked salmon fish',
        rate: 4.5,
        price: 5.20,
        use: 25
    },
    {
        id: 4,
        anh: 'https://i.pinimg.com/236x/b1/8a/30/b18a3030056840dac7dedb25d10fb513.jpg',
        name: 'Salmon Salad',
        title: 'Baked salmon fish',
        rate: 4.5,
        price: 5.20,
        use: 25
    },
    {
        id: 5,
        anh: 'https://i.pinimg.com/236x/59/df/31/59df31b9f9d87ca9ed776bb18ecb0de5.jpg',
        name: 'Salmon Salad',
        title: 'Baked salmon fish',
        rate: 4.5,
        price: 5.20,
        use: 25
    },
]