import React from 'react';
import styled from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { navigationStackData } from './src/data/navigationStackData';
import AppLoading from 'expo-app-loading';
import { useFonts, Roboto_100Thin, Roboto_300Light, Roboto_400Regular, Roboto_700Bold, Roboto_900Black } from '@expo-google-fonts/roboto';


const Stack = createNativeStackNavigator();



export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_900Black
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  else {
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
    )
  }
}


const SafeContainer = styled.SafeAreaView`
  flex: 1;
  margin-top: 6%;
`


