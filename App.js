import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

import Welcome from './src/screens/Welcome/Welcome'
import WelcomeToFood from './src/screens/Welcome/WelcomeToFood'
import LoginScreen from './src/screens/Login/LoginScreen'
import SignUpScreen from './src/screens/Login/SignUpScreen'
import Profiles from './src/screens/Page/Profiles'
const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <Welcome/> */}
      {/* <WelcomeToFood/> */}
      {/* <LoginScreen/> */}
      {/* <SignUpScreen/> */}
      <Profiles/>
    </SafeAreaView>
  )
}

export default App