import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {UserProvider} from './src/contexts/UserContext';
import MainStack from './src/stacks/MainStack';

export default () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </UserProvider>
  );
};
