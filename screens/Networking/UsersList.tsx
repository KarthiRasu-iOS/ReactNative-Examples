import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList } from "react-native";
import { SafeAreaView, Text, View } from "react-native";

type Users = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: Address,
    phone: string,
    website: string,
    company: Company
}

type Address = {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: Geo
}

type Geo = {
    lat: string,
    lng: string
}

type Company = {
    name: string,
    catchPhrase: string,
    bs: string,
}

const UsersList = () => {

    const [isLoading, setLoading] = useState(false);
    const [users, setUsers] = useState<Users[]>();

    const getUsersData = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const json = await response.json()
            setUsers(json);
            setLoading(false)
        }
        catch (error) {
            console.log('error -->', error)
            setLoading(false)
        }
    }

    useEffect(() => {
        getUsersData();
    }, [])

    return (
        <View style={{ flex: 1 }}>
            {isLoading ? <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <ActivityIndicator />
            </View> :
                <View style={{ backgroundColor: 'white' }}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ flexGrow: 1 }}
                        style={{ paddingHorizontal: 10 }}
                        data={users}
                        keyExtractor={({ id }) => id.toString()}
                        renderItem={({ item }) =>
                            <View style={{
                                marginVertical: 10,
                                padding: 20,
                                borderRadius: 24,
                                backgroundColor: 'rgba(52, 52, 52, 0.2)',
                            }}>
                                <Text style={{ fontSize: 16, marginBottom: 5 }}>
                                    <Text style={{ fontWeight: '600' }}>Name : </Text>{item.name}
                                </Text>
                                <Text style={{ fontSize: 16, marginBottom: 5 }}>
                                    <Text style={{ fontWeight: '600' }}>Email : </Text>{item.email}
                                </Text>
                                <Text style={{ fontSize: 16, marginBottom: 5 }}>
                                    <Text style={{ fontWeight: '600' }}>Phone : </Text>{item.phone}
                                </Text>
                                <Text style={{ fontSize: 16, marginBottom: 5 }}>
                                    <Text style={{ fontWeight: '600' }}>Webiste : </Text>{item.website}
                                </Text>

                                <View style={{
                                    marginTop: 10,
                                    paddingVertical: 10,
                                    backgroundColor: 'rgba(52, 52, 52, 0.1)',
                                    padding: 20,
                                    borderRadius: 12,
                                }}>
                                    <Text style={{ fontSize: 16, fontWeight: '600' }}>Address</Text>
                                    <Text style={{ fontSize: 16 }}>{item.address.street},{item.address.suite},{item.address.city},{item.address.zipcode}</Text>
                                </View>
                            </View>
                        }
                    />
                    <View style={{ height: 40, backgroundColor: 'red' }}></View>
                </View>
            }
        </View>
    )
}

export default UsersList;