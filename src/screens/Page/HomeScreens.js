import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
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

            <FlatList />

            <FlatList />

            <View>
                <Text></Text>
                <Text></Text>
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
    }

})