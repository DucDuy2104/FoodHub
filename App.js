import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler'
import Stacks from './src/navigation/Stacks'
import { AppProvider } from './src/global/AppContext'
import OrderItem from './src/components/OrderItem'
import { SafeAreaView } from 'react-native'
import OrderItem2 from './src/components/OrderItem2'

const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stacks />
      </NavigationContainer>
    </AppProvider>
  )
}

export default App