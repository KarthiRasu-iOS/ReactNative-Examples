import React from "react";
import { View, Text, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NavigationParamList } from "./NavigationBase";

type HomeProps = NativeStackScreenProps<NavigationParamList, 'Home'>;

const Home = ({ navigation }: HomeProps) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text> Home Screen </Text>
            <Button title="Move To Profile" onPress={() => {
                navigation.navigate('Profile', {
                    userName: "Richards"
                })
            }}></Button>
        </View>
    )
}

export default Home;
