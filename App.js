import React from 'react';
import styled from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { navigationStackData } from './src/data/navigationStackData';

const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <SafeContainer>
      <NavigationContainer >
        <Stack.Navigator>
          {navigationStackData.map((data, index) => (
            <Stack.Screen
              key={index}
              name={data.name}
              component={data.component}
              options={data.options}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeContainer>
  );
}


const SafeContainer = styled.SafeAreaView`
  flex: 1;
  margin-top: 6%;
`


