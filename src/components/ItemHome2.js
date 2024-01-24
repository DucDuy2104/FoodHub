import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ItemHome2 = (props) => {

  const { data2 } = props;

  return (
    <View style={styles.container}>
      <Image style={styles.img1}
        source={{ uri: data2.anh }} />
      <View style={[styles.row, styles.view1]}>
        <Text style={styles.text1}><Text style={styles.text2}>$</Text>{data2.price}</Text>
        <Image source={require('../assets/img/home/whiteheat.png')} />
      </View>

      <ImageBackground style={styles.bg1} source={require('../assets/img/home/bg.png')}>
        <Text style={styles.text3}>{data2.rate} <Image source={require('../assets/img/home/start.png')} /> <Text style={styles.text4}>(25+)</Text></Text>
      </ImageBackground>

      <Text style={styles.text5}>{data2.name}</Text>
      <Text style={styles.text6}>{data2.title}</Text>
    </View>
  )
}

export default ItemHome2

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  container: {
    width: 154,
    height: 216,
    borderRadius: 15,
    marginRight: 20
  },
  img1: {
    width: 154.43,
    height: 147.36,
    borderRadius: 15
  },
  view1: {
    justifyContent: 'space-between',
    marginHorizontal: 10,
    top: -140
  },
  text1: {
    width: 60,
    height: 28.262,
    borderRadius: 20,
    backgroundColor: 'white',
    textAlign: 'center',
    lineHeight: 25,
    color: '#111719',
    fontSize: 18.25,
    fontWeight: '600'
  },
  text2: {
    color: '#FE724C',
    fontSize: 9,
    fontWeight: '400'
  },
  bg1: {
    width: 120,
    height: 50,
    top: -50,
    left: -15,
    alignItems: 'center',
  },
  text3: {
    textAlign: 'center',
    lineHeight: 35,
    color: '#000',
    fontSize: 13,
    fontWeight: '600'
  },
  text4: {
    color: '#9796A1',
    fontSize: 8,
    fontWeight: '400'
  },
  text5: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    top: -60,
    marginLeft: 10
  },
  text6: {
    color: '#9796A1',
    fontSize: 12,
    fontWeight: '300',
    top: -60, marginLeft: 10
  }
})