import React from "react";
import { View, Text, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NavigationParamList } from "./NavigationBase";

type UsersProps = NativeStackScreenProps<NavigationParamList, 'Users'>

const Users = ({ navigation }: UsersProps) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text> Users </Text>
            <Button title="Move To Home" onPress={() => {
                navigation.navigate('Home')
            }}></Button>
        </View>
    )
}

export default Users;