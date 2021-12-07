import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../Home';
import Articles from '../Articles';
import Calcs from '../Calcs';
import MeteoMap from '../MeteoMap';
import Codes from '../Codes';

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
                    name="О нас"
                    component={Home}
                    options={{
                        tabBarLabel: 'О нас',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={30} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Codes"
                    component={Codes}
                    options={{
                        tabBarLabel: 'Коды',
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
                    name="Прогнозы"
                    component={Calcs}
                    options={{
                        tabBarLabel: 'Прогнозы',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="calculator" color={color} size={30} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Карта"
                    component={MeteoMap}
                    options={{
                        tabBarLabel: 'Карта',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="map-outline" color={color} size={30} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </>
    );
}

export default Main;
