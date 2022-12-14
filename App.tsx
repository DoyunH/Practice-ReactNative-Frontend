/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CategoriesScreen from './screens/CateforiesScreen';
import JWPlayer from './screens/JWPlayer';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Projects" component={CategoriesScreen} />
        <Stack.Screen name="JWPlayer" component={JWPlayer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
