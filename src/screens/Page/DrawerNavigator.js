import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreens from './HomeScreens';
import LoginScreen from '../Login/LoginScreen';
import Profiles from './Profiles';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{
        headerShown: false
    }}>
        <Drawer.Screen name='HomeScreens' component={HomeScreens}/>
        <Drawer.Screen name='LoginScreen' component={LoginScreen}/>
        <Drawer.Screen name='Profiles' component={Profiles}/>
    </Drawer.Navigator>
  )
}

export default DrawerNavigator

const styles = StyleSheet.create({})