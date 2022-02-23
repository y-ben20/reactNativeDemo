/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import ContactsScreen from './src/screens/ContactsScreen';
import CallingScreen from './src/screens/CallingScreen';
import IncomingCallScreen from './src/screens/incomingCallScreen';

const App = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <IncomingCallScreen />
    </>
  );
};

export default App;
