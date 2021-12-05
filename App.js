import React from 'react';
import styled from 'styled-components/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './src/components/views/Home';
import Articles from './src/components/views/Articles/';
import Calcs from './src/components/views/Calcs/';
import MetarTaf from './src/components/views/MetarTaf';
import { SafeAreaView } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const screenOptions = {
  headerShown: false,
  tabBarStyle: {}
}

export default function App() {
  return (
    <SafeContainer>
      <NavigationContainer >
        <Tab.Navigator initialRouteName='Home' screenOptions={screenOptions}>
          <Tab.Screen
            name="Главная страница"
            component={Home}
            options={{
              tabBarLabel: 'Главная страница',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={30} />
              ),
            }}
          />
          <Tab.Screen
            name="Metar/Taf"
            component={MetarTaf}
            options={{
              tabBarLabel: 'Metar/Taf',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="shield-airplane-outline" color={color} size={30} />
              ),
            }}
          />
          <Tab.Screen
            name="Статьи"
            component={Articles}
            options={{
              tabBarLabel: 'Статьи',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="book-open-variant" color={color} size={30} />
              ),
            }}
          />
          <Tab.Screen
            name="Расчётные методы"
            component={Calcs}
            options={{
              tabBarLabel: 'Расчётные методы',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="calculator" color={color} size={30} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeContainer>
  );
}


const SafeContainer = styled.SafeAreaView`
  flex: 1;
  margin-top: 6%;
`


