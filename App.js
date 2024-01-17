import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import SignUpScreen from './src/screens/SignUpScreen'
import LoginScreen from './src/screens/LoginScreen'
import Welcome from './src/screens/Welcome'
const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <SignUpScreen/> */}
      {/* <LoginScreen/> */}
      <Welcome/>
      
    </SafeAreaView>
  )
}

export default App