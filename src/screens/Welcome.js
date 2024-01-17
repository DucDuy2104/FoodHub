import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Welcome = () => {
  return (
    <View style={styles.container}>
        <View>
            <Image source={require('../assets/img/logoWellcome.png')} />
        </View>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
    container:{
        width : "100%",
        height : "100%",
        backgroundColor: '#FE724C',
        justifyContent: 'center',
        alignItems: 'center'
    }
})