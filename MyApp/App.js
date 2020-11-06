/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import AddRemoveContacts from './src/Screens/AddRemoveContacts';
import ChatListCompanyView from './src/Screens/ChatListCompanyView';
import MainPage from './src/Screens/MainPage';

const App = () => {
  return (
    <>
      <Router>


        <Stack key="root">


          <Scene key="main" component={MainPage} title="Main Page" initial />


          <Scene key="addremovecontacts" component={AddRemoveContacts} hideNavBar />


          <Scene key="chatlistcompanyview" component={ChatListCompanyView} hideNavBar />


        </Stack>


      </Router>
    </>
  );
};
export default App;
