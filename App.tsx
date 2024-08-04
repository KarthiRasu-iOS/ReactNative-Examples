/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Fragment } from 'react';
import NavigationBase from './screens/Navigation/NavigationBase';
import BottomBarBase from './screens/BottomBar/BottomBarBase';
import DrawerBase from './screens/Drawer/DrawerBase'
import UsersList from './screens/Networking/UsersList';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView, StatusBar } from 'react-native';

const App = () => {
  return (
    // <NavigationBase />
    // <BottomBarBase />
    // <DrawerBase />

    <Fragment>
      <SafeAreaView style={{ flex: 0, backgroundColor: 'purple' }} />
      {/* <SafeAreaView style={{ flex: 1 }}> */}
      <StatusBar barStyle="light-content" />
      <UsersList />
      {/* </SafeAreaView> */}
    </Fragment>

  );
}

export default App;