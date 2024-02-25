import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler'
import Stacks from './src/navigation/Stacks'
import { AppProvider } from './src/global/AppContext'
import OrderItem from './src/components/OrderItem'
import { SafeAreaView } from 'react-native'
import FavoriteScreen from './src/screens/Page/FavoriteScreen'
import SignUpScreen from './src/screens/Login/SignUpScreen'
const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stacks />
        {/* <SignUpScreen /> */}
      </NavigationContainer>
    </AppProvider>
  )
}

export default App