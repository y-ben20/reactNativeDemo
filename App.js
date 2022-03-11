/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {StatusBar} from 'react-native';

import Navigation from './src/navigation';
import Nav from './src/jindutiao/nav';

const App = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <Nav />
    </>
  );
};

export default App;
