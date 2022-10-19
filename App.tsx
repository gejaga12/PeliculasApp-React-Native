import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';

// dcf2955e2df50f6a0e255e175a984f84 API

const App = () => {
  return (
    <NavigationContainer>
     <Navigation />
    </NavigationContainer>
  );
};

export default App;
