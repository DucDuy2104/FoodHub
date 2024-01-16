import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import SignUpScreen from './src/screens/SignUpScreen'
import LoginScreen from './src/screens/LoginScreen'

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <SignUpScreen/>
      {/* <LoginScreen/> */}
    </SafeAreaView>
  )
}

export default App