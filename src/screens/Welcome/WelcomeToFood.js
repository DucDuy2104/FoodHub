import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const WelcomeToFood = () => {
  return (
    <View style={styles.container}>
      <Image style={{ width: '103%', height: '100%' }} source={require('../../assets/img/Nhanne.png')} />
      <View style={styles.position}>
        <Text style={styles.Welcome}>Welcome to</Text>
        <Text style={styles.Foodhub}>FoodHub</Text>
        <Text style={styles.Textnho}>Your favorite foods delivered fast at your door</Text>
      </View>
      <View style={{position: 'absolute', top: '557'}}>
        <View style={styles.signSec}>
          <View style={styles.line} />
          <Text style={styles.suwTxt}>Sign up width</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.suwContainer}>
          <TouchableOpacity style={styles.suwItem}>
            <Image style={{ width: 28, height: 28 }} source={require('../../assets/img/facebook.png')} />
            <Text style={{ marginLeft: 10, color: "black", fontSize: 13, fontWeight: '400' }}>FACEBOOK</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.suwItem}>
            <Image style={{ width: 28, height: 28 }} source={require('../../assets/img/ggicon.png')} />
            <Text style={{ marginLeft: 10, color: "black", fontSize: 13, fontWeight: '400' }}>GOOGLE</Text>
          </TouchableOpacity>
        </View>
        <View style={{alignItems:'center'}}>
        <TouchableOpacity style={styles.suwbutton}>
            <Text style={{color: "white", fontSize: 13, fontWeight: '400', lineHeight:17, marginTop: -3 }}>Start with email or phone</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.txtHave}>
                Already have an account? {' '}
                <Text style={{textDecorationLine: 'underline'}}>Sign in</Text>
            </Text>
      </View>

    </View>
  )
}

export default WelcomeToFood

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: 'center',
  },
  position: {
    position: 'absolute',
    width: 311,
    height: 184,
    top: 160,
    left: 28
  },
  Welcome: {
    fontWeight: 'bold',
    lineHeight: 57.6,
    fontFamily: 'Sofia Pro',
    fontSize: 45,
    color: '#ffffff'
  },
  Foodhub: {
    fontWeight: 'bold',
    lineHeight: 67.84,
    fontFamily: 'Sofia Pro',
    fontSize: 53,
    color: '#FE724C',
  },
  Textnho: {
    fontWeight: '400',
    lineHeight: 27,
    fontFamily: 'Sofia Pro',
    fontSize: 18,
    color: '#30384F',
  },
  signSec: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 557
  },
  suwTxt: {
    fontSize: 14,
    fontWeight: '500',
    marginHorizontal: 10,
    color: '#fff'
  },
  line: {
    height: 0.5,
    flex: 1,
    backgroundColor: '#5B5B5E'
  },
  suwItem: {
    width: 147,
    height: 57,
    borderRadius: 29,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    elevation: 5,
    shadowColor: '#D3D1D8',
    shadowOffset: { width: 18.587, height: 18.587 },
    shadowOpacity: 0.25,
    shadowRadius: 37.174,
    backgroundColor: 'white'
  },
  suwContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10
  },
  suwbutton:{
    width: 315,
    height: 54,
    marginTop: 30,
    fontSize: 17,
    color:'#ffffff',
    lineHeight: 17,
    borderRadius: 29,
    padding: 20,
    shadowColor: '#ffffff',
    shadowOffset: { width: 18.587, height: 18.587 },
    shadowOpacity: 0.25,
    shadowRadius: 37.174,
    alignItems:'center',
    backgroundColor: '#888'
  },  
  txtHave: {
    fontSize: 14,
    fontWeight: '400',
    color:'white',
    marginTop: 20,
    width: '100%',
    textAlign: 'center'
},
})
