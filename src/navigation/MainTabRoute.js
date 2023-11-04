import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBar from '../components/navigation-tabs/TabBar';
import Dashboard from '../screens/Dashboard';
import Movies from '../screens/Movies';

const Tab = createBottomTabNavigator();

const MainTabRoute = () =>{

    return (
        <Tab.Navigator
            name="MainTabRoute"
            initialRouteName="Home"
            tabBar={(props) => <TabBar {...props}/>}
        >
            <Tab.Screen name="Dashboard" component={Dashboard}/>
            <Tab.Screen name="Movie" component={Movies}/>
        </Tab.Navigator>
    )
};

export default MainTabRoute;