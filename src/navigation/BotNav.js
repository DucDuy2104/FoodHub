import HomeScreens from '../screens/Page/HomeScreens';
import Cart from '../screens/Page/Cart';
import Profiles from '../screens/Page/Profiles';
import MyOrder from '../screens/Page/MyOrder';
import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavoriteScreen from '../screens/Page/FavoriteScreen';

const Tab = createBottomTabNavigator();

const BotNav = () => {
  return (
    <Tab.Navigator initialRouteName='Stacks' screenOptions={{ headerShown: false }}>
          <Tab.Screen name='HomeScreens' component={HomeScreens} options={{
            tabBarLabel: () => null,
            headerShown: false,
            tabBarIcon: ({ focused }) => <Image style={{ width: 20, height: 20}} source={focused ? require('../assets/img/navigation/homeS.png') : require('../assets/img/navigation/home.png')} />
          }} />
          <Tab.Screen name='Cart' component={Cart}
            options={{
              tabBarLabel: () => null,
              tabBarIcon: ({ focused }) => <Image style={{ width: 20, height: 20}} source={focused ? require('../assets/img/navigation/bagS.png') : require('../assets/img/navigation/bag.png')} />
            }} />
          <Tab.Screen name='Favor' component={FavoriteScreen}
            options={{
              tabBarLabel: () => null,
              tabBarIcon: ({ focused }) => <Image style={{ width: 20, height: 20}} source={focused ? require('../assets/img/navigation/icons8-heart-40.png') : require('../assets/img/navigation/heart.png')} />
            }} />
          <Tab.Screen name='MyOrder' component={MyOrder}
            options={{
              tabBarLabel: () => null,
              tabBarIcon: ({ focused }) => <Image style={{ width: 20, height: 20}} source={focused ? require('../assets/img/navigation/icons8-bell-40.png') : require('../assets/img/navigation/bell.png')} />
            }} />
    </Tab.Navigator>
  )
}

export default BotNav