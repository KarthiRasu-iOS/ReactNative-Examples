import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import BottomBarHome from "./BottomBarHome";
import BottomBarProfile from "./BottomBarProfile"
import BottomBarSearch from "./BottomBarSearch";
import staticImages from "../../utils/images";
import { Image } from "react-native";

const Tab = createBottomTabNavigator()

const BottomBarBase = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Profile"
                screenOptions={{
                    tabBarActiveTintColor: '#A020F0'
                }}>
                <Tab.Screen
                    name="Home"
                    component={BottomBarHome}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <Image
                                source={staticImages.bottomHome}
                                style={{ width: size, height: size, tintColor: color }}
                            />
                        ),
                    }} />
                <Tab.Screen
                    name="Profile"
                    component={BottomBarProfile}
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarIcon: ({ color, size }) => (
                            <Image
                                source={staticImages.bottomUser}
                                style={{ width: size, height: size, tintColor: color }}
                            />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Search"
                    component={BottomBarSearch}
                    options={{
                        tabBarLabel: 'Search',
                        tabBarIcon: ({ color, size }) => (
                            <Image
                                source={staticImages.bottomsearch}
                                style={{ width: size, height: size, tintColor: color }}
                            />
                        ),
                    }} />
            </Tab.Navigator>
        </NavigationContainer>

    )
}

export default BottomBarBase