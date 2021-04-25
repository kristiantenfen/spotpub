import React from 'react'
import { createStackNavigator} from '@react-navigation/stack';

import Home from '../views/Home';
import PubSearch from '../views/PubSearch';
import PubView from '../views/PubView';

const AppRouter = createStackNavigator();

const Routes: React.FC = () => (
    <AppRouter.Navigator
        screenOptions={{
            headerShown:false
        }}
    >
        <AppRouter.Screen name="Home" component={Home} />
        <AppRouter.Screen name="PubSearch" component={PubSearch} />
        <AppRouter.Screen name="PubView" component={PubView} />
    </AppRouter.Navigator>
)

export default Routes;
