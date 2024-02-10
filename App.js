import { View, Text, SafeAreaView, InputAccessoryView, Image } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreens from './src/screens/Page/HomeScreens';
import Cart from './src/screens/Page/Cart';
import Food_Detail from './src/screens/Page/Food_Detail';
import Profiles from './src/screens/Page/Profiles';
import Stacks from './src/screens/Stacks';
import MyOrder from './src/screens/Page/MyOrder';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName='Stacks' screenOptions={{ headerShown: false }}>
          <Tab.Screen name='HomeScreens' component={HomeScreens} options={{
            tabBarLabel: () => null,
            headerShown: false,
            tabBarIcon: ({ focused }) => <Image style={{ width: 30, height: 30}} source={focused ? require('./src/assets/img/navigation/homeS.png') : require('./src/assets/img/navigation/home.png')} />
          }} />
          <Tab.Screen name='Cart' component={Cart}
            options={{
              tabBarLabel: () => null,
              tabBarIcon: ({ focused }) => <Image style={{ width: 30, height: 30}} source={focused ? require('./src/assets/img/navigation/bagS.png') : require('./src/assets/img/navigation/bag.png')} />
            }} />
          <Tab.Screen name='Food_Detail' component={Food_Detail}
            options={{
              tabBarLabel: () => null,
              tabBarIcon: ({ focused }) => <Image style={{ width: 30, height: 30}} source={focused ? require('./src/assets/img/navigation/icons8-heart-40.png') : require('./src/assets/img/navigation/heart.png')} />
            }} />
          <Tab.Screen name='MyOrder' component={MyOrder}
            options={{
              tabBarLabel: () => null,
              tabBarIcon: ({ focused }) => <Image style={{ width: 30, height: 30}} source={focused ? require('./src/assets/img/navigation/icons8-bell-40.png') : require('./src/assets/img/navigation/bell.png')} />
            }} />
          <Tab.Screen name='Stacks' component={Stacks}
            options={
              {
                // tabBarStyle: { display: 'none' }, // hide component of stack in tab,
                headerShown: false,
                tabBarButton: () => null
              }
            } />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default App