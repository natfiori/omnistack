import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStak = createStackNavigator();

import Incidents from './pages/Incidents';
import Detail from './pages/Detail';

export default function Routes() {
    return (
        <NavigationContainer>

            <AppStak.Navigator screenOptions={{ headerShown: false }}>
                <AppStak.Screen name="Incidents" component={Incidents} />
                <AppStak.Screen name="Detail" component={Detail} />
            </AppStak.Navigator>

        </NavigationContainer>
    );
}