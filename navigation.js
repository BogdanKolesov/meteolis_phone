import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/components/views/Home';
import Articles from './src/components/views/Articles/Articles';
import Calcs from './src/components/views/Calcs/Calcs';


// const store = configureStore()

export default function RootNavigation() {
    const Stack = createNativeStackNavigator()



    const screenOptions = {
        headerShown: false
    }

    return (
        // <ReduxProvider store={store}>
        <NavigationContainer initialRouteName='Home' screenOptions={screenOptions}>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Artiles" component={Articles} />
                <Stack.Screen name="Calcs" component={Calcs} />
            </Stack.Navigator>
        </NavigationContainer>
        // </ReduxProvider>
    )
}



