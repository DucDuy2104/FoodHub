import { View, Text, SafeAreaView, InputAccessoryView } from 'react-native'
import React from 'react'

import Welcome from './src/screens/Welcome/Welcome'
import WelcomeToFood from './src/screens/Welcome/WelcomeToFood'
import LoginScreen from './src/screens/Login/LoginScreen'
import SignUpScreen from './src/screens/Login/SignUpScreen'
import Profiles from './src/screens/Page/Profiles'
import Card from './src/screens/Page/Cart'
import ItemCard from './src/components/ItemCart'
import MyOrder from './src/screens/Page/MyOrder'
import ItemOrder1 from './src/components/ItemOrder1'
import ItemOrder2 from './src/components/ItemOrder2'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreens from './src/screens/Page/HomeScreens'
import HomeDropDown from './src/components/HomeDropDown'
import ItemHome1 from './src/components/ItemHome1'
import ItemHome2 from './src/components/ItemHome2'
import { createStackNavigator } from '@react-navigation/stack'
const Stack = createStackNavigator()

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <Welcome/> */}
      {/* <WelcomeToFood/> */}
      {/* <LoginScreen/> */}
      {/* <SignUpScreen/> */}
      {/* <Profiles/> */}
      {/* <Cart/> */}
      {/* <ItemCart/> */}
      {/* <MyOrder /> */}
      {/* <ItemOrder1/> */}
      {/* <ItemOrder2/> */}
      {/* <HomeDropDown/> */}
      {/* <HomeScreens/> */}

      <NavigationContainer>
        <Stack.Navigator initialRouteName='LoginScreen'>
          <Stack.Screen options={{ headerShown: false }} name='WelCome' component={Welcome} />
          <Stack.Screen options={{ headerShown: false }} name='WelcomeToFood' component={WelcomeToFood} />
          <Stack.Screen options={{ headerShown: false }} name='LoginScreen' component={LoginScreen} />
          <Stack.Screen options={{ headerShown: false }} name='SignUpScreen' component={SignUpScreen} />
          <Stack.Screen options={{ headerShown: false }} name='HomeScreens' component={HomeScreens} />
          <Stack.Screen options={{ headerShown: false }} name='ItemHome2' component={ItemHome2} />
        </Stack.Navigator>
      </NavigationContainer>

    </SafeAreaView>
  )
}

export default App