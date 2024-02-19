import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Welcome from '../screens/Welcome/Welcome';
import WelcomeToFood from '../screens/Welcome/WelcomeToFood';
import LoginScreen from '../screens/Login/LoginScreen';
import SignUpScreen from '../screens/Login/SignUpScreen';
import HomeScreens from '../screens/Page/HomeScreens';
import ItemHome2 from '../components/ItemHome2';
import DrawerNavigator from '../screens/Page/DrawerNavigator';
import Profiles from '../screens/Page/Profiles';
import BotNav from './BotNav';
import Food_Detail from '../screens/Page/Food_Detail';

const Stack = createStackNavigator();

const Stacks = () => {
    return (
        <Stack.Navigator initialRouteName='LoginScreen' screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen options={{ headerShown: false }} name='WelCome' component={Welcome} />
            <Stack.Screen options={{ headerShown: false }} name='WelcomeToFood' component={WelcomeToFood} />
            <Stack.Screen options={{ headerShown: false }} name='LoginScreen' component={LoginScreen} />
            <Stack.Screen options={{ headerShown: false }} name='SignUpScreen' component={SignUpScreen} />
            <Stack.Screen options={{ headerShown: false }} name='Home' component={BotNav} />
            <Stack.Screen options={{ headerShown: false }} name='ItemHome2' component={ItemHome2} />
            <Stack.Screen options={{ headerShown: false }} name='DrawerNavigator' component={DrawerNavigator} />
            <Stack.Screen options={{ headerShown: false }} name='detail' component={Food_Detail}/>
            <Stack.Screen options={{ headerShown: false }} name='Profiles' component={Profiles} />
        </Stack.Navigator>
    )
}

export default Stacks