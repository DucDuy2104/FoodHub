import { FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import HomeDropDown from '../../components/HomeDropDown'

const HomeScreens = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.view1, styles.row]}>
                <Image style={styles.img1} source={require('../../assets/img/home/drawer.png')} />
                <View>
                    <HomeDropDown />
                    <Text style={styles.text1}>4102 Pretty View Lane</Text>
                </View>
                <Image style={styles.img2} source={require('../../assets/img/home/avatarr.png')} />
            </View>

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
                    <Image style={styles.img5} source={require('../../assets/img/home/hamburger.png')} />
                    <Text style={styles.text4}>Burger</Text>
                </ImageBackground>

                <ImageBackground style={styles.bg2}
                    imageStyle={{ borderRadius: 100 }}
                    source={require('../../assets/img/home/bgW.png')}>
                    <Image style={styles.img5} source={require('../../assets/img/home/hamburger.png')} />
                    <Text style={styles.text4}>Burger</Text>
                </ImageBackground>

                <ImageBackground style={styles.bg2}
                    imageStyle={{ borderRadius: 100 }}
                    source={require('../../assets/img/home/bgW.png')}>
                    <Image style={styles.img5} source={require('../../assets/img/home/hamburger.png')} />
                    <Text style={styles.text4}>Burger</Text>
                </ImageBackground>

                <ImageBackground style={styles.bg2}
                    imageStyle={{ borderRadius: 100 }}
                    source={require('../../assets/img/home/bgW.png')}>
                    <Image style={styles.img5} source={require('../../assets/img/home/hamburger.png')} />
                    <Text style={styles.text4}>Burger</Text>
                </ImageBackground>
            </ScrollView>

            <View style={[styles.view4, styles.row]}>
                <Text style={styles.text5}>Featured Restaurants</Text>
                <Text style={styles.text6}>View All  <Image source={require('../../assets/img/home/arrorR.png')}/></Text>
            </View>
            <FlatList />

            <Text>Popular Items</Text>
            <FlatList />
        </View>
    )
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
        paddingLeft: 10
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
        marginRight: 15
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
        marginRight: 15
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
    }

})