import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './home';
import Profile from './profile';
import Users from './users';


export type NavigationParamList = {
    Home: undefined
    Profile: { userName: string }
    Users: undefined
}

const Stack = createNativeStackNavigator<NavigationParamList>()

const NavigationBase = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerTintColor: '#A020F0' }}>
                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Profile' component={Profile} />
                <Stack.Screen name='Users' component={Users} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NavigationBase;