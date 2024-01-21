import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ItemOrder1 = () => {
    return (
        <ImageBackground source={require('../assets/img/myorders/itemOrder.png')} style={styles.container}>
            <View style={[styles.view1, styles.row]}>
                <View style={styles.row}>
                    <ImageBackground style={styles.viewStarBuck} source={require('../assets/img/myorders/Union.png')}>
                        <Image style={styles.img1} source={require('../assets/img/myorders/starbucks.png')} />
                    </ImageBackground>
                    <View style={styles.view3}>
                        <Text style={[styles.text1, styles.gray, styles.bold400]}>3 item</Text>
                        <Text style={[styles.text2, styles.size16]}>Starbuck <Image source={require('../assets/img/myorders/check.png')} /></Text>
                    </View>
                </View>
                <Text style={[styles.text3, styles.size16, styles.bold400, styles.textRight]}>#264100</Text>
            </View>

            <View style={styles.view4}>
                <View>
                    <Text style={[styles.text4, styles.gray]}>Estimated Arrival</Text>
                    <Text style={styles.text5}>25 <Text style={[styles.textmin, styles.bold400]}>min</Text></Text>
                </View>
                <View>
                    <Text style={[styles.text4, styles.gray, styles.textRight]}>Now</Text>
                    <Text style={[styles.text6, styles.bold400]}>Food on the way</Text>
                </View>
            </View>

            <View style={[styles.view5, styles.row]}>
                <ImageBackground style={styles.bg1}
                    source={require('../assets/img/myorders/cancel.png')}>
                    <Pressable style={styles.press}>
                        <Text style={[styles.text7, styles.bold400, styles.textCenter]}>Cancel</Text>
                    </Pressable>
                </ImageBackground>
                <ImageBackground style={[styles.bg1, styles.bg2]}
                    source={require('../assets/img/myorders/trackOrder.png')}>
                    <Pressable style={[styles.press2]}>
                        <Text style={[styles.text8, styles.bold400, styles.textCenter]}>Track Order</Text>
                    </Pressable>
                </ImageBackground>
            </View>
        </ImageBackground>
    )
}

export default ItemOrder1

const styles = StyleSheet.create({
    container: {
        height: 280,
        marginTop: 10
    },
    row: {
        flexDirection: 'row',
    },
    size16: {
        fontSize: 16
    },
    gray: {
        color: '#9796A1',
    },
    bold400: {
        fontWeight: '400'
    },
    view1: {
        justifyContent: 'space-between',
        paddingTop: 16,
        paddingLeft: 20,
        paddingRight: 36
    },
    viewStarBuck: {
        marginRight: 15,
        padding: 10,
        width: 90,
        height: 90
    },
    view3: {
        justifyContent: 'center',
        top: -10,
        left: -15
    },
    img1: {
        width: 45,
        height: 45,
        left: 4
    },
    text1: {
        fontSize: 12,
    },
    textCenter: {
        textAlign: 'center'
    },
    text2: {
        color: '#000',
        fontWeight: '600'
    },
    text3: {
        color: '#FE724C',
    },
    text4: {
        fontSize: 12,
    },
    view4: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 36,
        paddingRight: 36,
        top: -10
    },
    textRight: {
        textAlign: 'right'
    },
    text5: {
        color: '#000',
        fontSize: 40,
        fontWeight: '600'
    },
    textmin: {
        color: '#000',
        fontSize: 15,
    },
    text6: {
        color: '#111719',
        fontSize: 14
    },
    view5: {
        justifyContent: 'space-between'
    },
    bg1: {
        width: 200,
        height: 100
    },
    bg2: {
        width: 200,
        height: 100,
        left: -20
    },
    press: {
        marginTop: 20
    },
    text7: {
        fontSize: 15,
        color: '#11719'
    },
    press2: {
        marginLeft: 10,
        marginTop: 17
    },
    text8: {
        color: '#fff',
        fontSize: 15
    }
})