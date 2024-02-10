import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Welcome from './Welcome/Welcome';
import WelcomeToFood from './Welcome/WelcomeToFood';
import LoginScreen from './Login/LoginScreen';
import SignUpScreen from './Login/SignUpScreen';
import HomeScreens from './Page/HomeScreens';
import ItemHome2 from '../components/ItemHome2';
import DrawerNavigator from './Page/DrawerNavigator';
import Profiles from './Page/Profiles';

const Stack = createStackNavigator();

const Stacks = () => {
    return (
        <Stack.Navigator initialRouteName='Profiles' screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen options={{ headerShown: false }} name='WelCome' component={Welcome} />
            <Stack.Screen options={{ headerShown: false }} name='WelcomeToFood' component={WelcomeToFood} />
            <Stack.Screen options={{ headerShown: false }} name='LoginScreen' component={LoginScreen} />
            <Stack.Screen options={{ headerShown: false }} name='SignUpScreen' component={SignUpScreen} />
            <Stack.Screen options={{ headerShown: false }} name='HomeScreens' component={HomeScreens} />
            <Stack.Screen options={{ headerShown: false }} name='ItemHome2' component={ItemHome2} />
            <Stack.Screen options={{ headerShown: false }} name='DrawerNavigator' component={DrawerNavigator} />
            <Stack.Screen options={{ headerShown: false }} name='Profiles' component={Profiles} />
        </Stack.Navigator>
    )
}

export default Stacks