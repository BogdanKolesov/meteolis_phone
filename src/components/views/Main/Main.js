import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../Home';
import Articles from '../Articles';
import Calcs from '../Calcs';
import MetarTaf from '../MetarTaf';

const Tab = createBottomTabNavigator();

const screenOptions = {
    headerShown: false,
    tabBarStyle: {}
}

const Main = () => {
    return (
        <>
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
        </>
    );
}

export default Main;
