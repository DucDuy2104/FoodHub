import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

import Welcome from './src/screens/Welcome/Welcome'
import WelcomeToFood from './src/screens/Welcome/WelcomeToFood'
import LoginScreen from './src/screens/Login/LoginScreen'
import SignUpScreen from './src/screens/Login/SignUpScreen'
// <<<<<<< Updated upstream
import Profiles from './src/screens/Page/Profiles'
import Card from './src/screens/Page/Cart'
import ItemCard from './src/components/ItemCart'
import MyOrder from './src/screens/Page/MyOrder'
import ItemOrder1 from './src/components/ItemOrder1'
import ItemOrder2 from './src/components/ItemOrder2'
// =======
import Food_Detail from './src/screens/Page/Food_Detail'
// >>>>>>> Stashed changes
const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Food_Detail/>
      {/* <Welcome/> */}
      {/* <WelcomeToFood/> */}
      {/* <LoginScreen/> */}
      {/* <SignUpScreen/> */}
      {/* <Profiles/> */}
      {/* <Cart/> */}
      {/* <ItemCart/> */}
      {/* <MyOrder/> */}
      {/* <ItemOrder1/> */}
      {/* <ItemOrder2/> */}
    </SafeAreaView>
  )
}

export default App