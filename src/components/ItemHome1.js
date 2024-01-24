import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ItemHome1 = (props) => {

  const {data1} = props;

  return (
    <ImageBackground style={styles.bgimg1}
      imageStyle={{ borderTopRightRadius: 15, borderTopLeftRadius: 15 }}
      source={require('../assets/img/home/bgItem.png')}>
      <ImageBackground style={[styles.bgimg2, styles.row]}
      imageStyle={{ borderTopRightRadius: 15, borderTopLeftRadius: 15 }}
        source={{ uri: data1.img }}>
        <Text style={styles.text1}>{data1.rate} <Image style={{ width: 10, height: 10 }} source={require('../assets/img/home/start.png')} /> <Text style={styles.text2}>(25+)</Text></Text>
        <Image style={styles.img1} source={require('../assets/img/home/heart.png')} />
      </ImageBackground>

      <Text style={styles.text3}>{data1.brand}  <Image source={require('../assets/img/home/tick.png')} /></Text>

      <View style={[styles.row, styles.view4]}>
        <Text style={styles.text4}><Image source={require('../assets/img/home/delivery.png')}/> Free delivery</Text>
        <Text style={styles.text4}><Image source={require('../assets/img/home/clock.png')}/> {data1.time} mins</Text>
      </View>

      <View style={[styles.row, styles.view5]}>
        <Text style={styles.text5}>BURGER</Text>
        <Text style={styles.text5}>CHICKEN</Text>
        <Text style={styles.text5}>FAST FOOD</Text>
      </View>
    </ImageBackground>
  )
}

export default ItemHome1

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row'
  },
  bgimg1: {
    width: 400,
    height: 240,
    marginTop: 10,
    borderTopRightRadius: 15, 
    borderTopLeftRadius: 15,
  },
  bgimg2: {
    height: 136,
    width: 328,
    borderRadius: 15,
    justifyContent: 'space-between',
    orderTopRightRadius: 15, 
    borderTopLeftRadius: 15,
    paddingLeft: 16,
    marginLeft: 19
  },
  text1: {
    marginTop: 10,
    marginLeft: 10,
    backgroundColor: 'white',
    height: 30,
    width: 70,
    fontSize: 11,
    color: '#000',
    fontWeight: '600',
    borderRadius: 20,
    lineHeight: 30,
    textAlign: 'center'
  },
  text2: {
    color: '#9796A1',
    fontSize: 8,
    fontWeight: '400',
    marginBottom: 5,
    textAlign: 'center'
  },
  text3: {
    marginLeft: 13,
    color: '#000',
    fontSize: 15,
    fontWeight: '600',
    marginTop: 8,
    marginBottom: 5,
    paddingLeft: 16,
  },
  view4: {
    marginLeft: 13,
    paddingLeft: 16,
  },
  text4: {
    color: '#7E8392',
    fontSize: 12,
    fontWeight: '400',
    marginRight: 17, 
  },
  view5: {
    marginLeft: 13,
     marginTop: 7,
    paddingLeft: 16,
  },
  text5: {
    marginRight: 15,
    backgroundColor: '#f6f6f6',
    borderRadius: 7,
    textAlign: 'center',
    color: '#8A8E9B',
    fontSize: 12,
    fontWeight: '400',
    paddingVertical: 6,
    paddingHorizontal: 8, 
    width: 80
  }
})