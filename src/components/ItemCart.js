import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

const ItemCart
  = (props) => {

    const { dataSP, onDelete, onAdd, onMin } = props;
    const [count, setCount] = useState(dataSP.count)

    return (
      <View style={styles.container}>
        <Image style={styles.img1}
          source={{ uri: dataSP.image }} />

        <View style={styles.viewText}>
          <Text style={styles.text1}>{dataSP.name}</Text>
          <Text style={styles.text2}>{dataSP.title}</Text>
          <Text style={styles.text3}>${dataSP.price}</Text>
        </View>

        <View style={styles.view3}>
          <TouchableOpacity onPress={onDelete}>
            <Image style={styles.img2} source={require('../assets/img/card/delete.png')} />
          </TouchableOpacity>
          <View style={styles.view2}>
            <TouchableOpacity onPress={()=>{onMin(dataSP, count); setCount(pre => {if(count > 1) { return --pre } else { return pre }})}} style={styles.press}>
              <Text style={styles.text5}>-</Text>
            </TouchableOpacity >
            <Text style={styles.text4}>{count}</Text>
            <TouchableOpacity onPress={() => {onAdd(dataSP, count); setCount(pre => ++pre )}} style={[styles.press, { backgroundColor: '#FE724C' }]}>
              <Text style={styles.text6}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }

export default ItemCart


const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10
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