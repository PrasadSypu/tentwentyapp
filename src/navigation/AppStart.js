import { createStackNavigator } from "@react-navigation/stack";
import React from 'react';
import MainTabRoute from "./MainTabRoute";
import Dashboard from "../screens/Dashboard";
import MovieCard from "../components/MovieCard";
import Movies from "../screens/Movies";
import Details from "../screens/Details";
import Trailer from "../screens/WatchTrailer";

const Stack = createStackNavigator();

const AppStart = () =>{
    return(
        <Stack.Navigator
            name="AppStart"
            initialRouteName="Movies"
        >
            {/* <Stack.Screen name ="MainTabRoute" component={MainTabRoute}/> */}
            <Stack.Screen name ="Dashboard" component={Dashboard}/>
            <Stack.Screen name ="MovieCard" component={MovieCard}/>
            <Stack.Screen name ="Movies" component={Movies}/>
            <Stack.Screen name ="Details" component={Details}/>
            <Stack.Screen name ="Trailer" component={Trailer}/>

        </Stack.Navigator>
    )

};

export default AppStart;