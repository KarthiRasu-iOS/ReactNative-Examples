import React from "react";
import { View } from 'react-native'
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerProfile from "./DrawerProfile";
import { NavigationContainer } from "@react-navigation/native";
import DrawerFeeds from "./DrawerFeeds";

const Drawer = createDrawerNavigator()

const DrawerBase = () => {
    return (
        <NavigationContainer >
            <Drawer.Navigator initialRouteName="Profile">
                <Drawer.Screen name="Profile" component={DrawerProfile} />
                <Drawer.Screen name="Feeds" component={DrawerFeeds} />
            </Drawer.Navigator>
        </NavigationContainer>

    )
}

export default DrawerBase