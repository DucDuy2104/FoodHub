import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ItemCard = (props) => {

  const {dataSP} = props;

  return (
    <View style={styles.container}>
      <Image style={styles.img1}
      source={{uri: dataSP.anh}}/>

      <View style={styles.viewText}>
        <Text style={styles.text1}>{dataSP.ten}</Text>
        <Text style={styles.text2}>{dataSP.mota}</Text>
        <Text style={styles.text3}>${dataSP.gia}</Text>
      </View>

      <View style={styles.view3}>
        <Image style={styles.img2} source={require('../assets/img/card/delete.png')}/>
        <View style={styles.view2}>
          <Pressable style={styles.press}>
            <Text style={styles.text5}>-</Text>
          </Pressable >
          <Text style={styles.text4}>{dataSP.soluong}</Text>
          <Pressable style={[styles.press,{backgroundColor: '#FE724C'}]}>
            <Text style={styles.text6}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default ItemCard

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  img1: {
    borderRadius: 20,
    width: 87,
    height: 87
  },
  viewText: {
    justifyContent: 'space-around',
  },
  text1: {
    color: '#000',
    fontSize: 18,
    fontWeight: '600'
  },
  text2: {
    fontSize: 14,
    color: '#8C8A9D',
    fontWeight: '300'
  },
  text3: {
    fontSize: 16,
    color: '#FE724C',
    fontSize: 16, 
    fontWeight: '600'
  },
  img2: {
    width: 25,
    height: 25,
    bottom: 15,
    left: 75
  },
  view2: {
    flexDirection: 'row',
    top: 17
  },
  press: {
    width: 35,
    height: 35,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#FE724C'
  },
  text4: {
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    top: 8
  },
  text5: {
    textAlign: 'center',
    fontSize: 40,
    bottom: 15,
    color: '#FE724C'
  },
  text6: {
    textAlign: 'center',
    fontSize: 30,
    bottom: 5,
    color: 'white'
  },

})