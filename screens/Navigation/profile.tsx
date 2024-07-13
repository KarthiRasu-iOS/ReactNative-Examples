import React, { useLayoutEffect } from "react";
import { View, Text, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NavigationParamList } from "./NavigationBase";

type ProfileProps = NativeStackScreenProps<NavigationParamList, 'Profile'>

const Profile = ({ navigation, route }: ProfileProps) => {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Name:{route.params.userName}</Text>
            <Button title="Move To Users Screen" onPress={() => {
                navigation.navigate('Users')
            }}></Button>
        </View>
    )
}

export default Profile;