import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ItemOrder2 = (props) => {
  
  const {lstSP} = props;

  return (
    <ImageBackground source={require('../assets/img/myorders/itemOrder.png')} 
    imageStyle={{borderRadius: 50}}
    style={styles.container}>
            <View style={[styles.view1, styles.row]}>
                <View style={styles.row}>
                    <ImageBackground style={styles.viewStarBuck} source={require('../assets/img/myorders/Union.png')}>
                        <Image style={styles.img1} source={{uri : lstSP.anh}} />
                    </ImageBackground>
                    <View style={styles.view3}>
                      <Text style={[styles.text1, styles.gray, styles.bold400]}>{lstSP.thoigian}  <Image source={require('../assets/img/myorders/Ellipsegray.png')} />  {lstSP.soluong} item</Text>
                        <Text style={[styles.text2, styles.size16]}>{lstSP.ten} <Image source={require('../assets/img/myorders/check.png')} /></Text>
                        <Text style={styles.green}><Image source={require('../assets/img/myorders/ellip.png')}/>  {lstSP.tt}</Text>
                    </View>
                </View>
                <Text style={[styles.text3, styles.size16, styles.bold400, styles.textRight]}>$<Text>{lstSP.gia}</Text></Text>
            </View>

            <View style={[styles.view5, styles.row]}>
                <ImageBackground style={styles.bg1}
                    source={require('../assets/img/myorders/cancel.png')}>
                    <Pressable style={styles.press}>
                        <Text style={[styles.text7, styles.bold400, styles.textCenter]}>Rate</Text>
                    </Pressable>
                </ImageBackground>
                <ImageBackground style={[styles.bg1, styles.bg2]}
                    source={require('../assets/img/myorders/trackOrder.png')}>
                    <Pressable style={[styles.press2]}>
                        <Text style={[styles.text8, styles.bold400, styles.textCenter]}>Re-Order</Text>
                    </Pressable>
                </ImageBackground>
            </View>
        </ImageBackground>
  )
}

export default ItemOrder2

const styles = StyleSheet.create({
  container: {
    height: 165,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 50
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
textRight: {
    textAlign: 'right'
},
view5: {
    justifyContent: 'space-between',
    top: -15
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
},
green: {
  color: '#4EE476',
  fontWeight: '400',
  fontSize: 12
}
})