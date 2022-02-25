import * as React from "react";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from'../screens/ProfileScreen';
import ExploreScreen from '../screens/ExploreScreen';
import NotificationScreen from '../screens/NotificationScreen';


const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {

    return(
        <Tab.Navigator 
            initialRouteName ="Home" 
            
        >
            <Tab.Screen 
                name="Home"
                component={HomeScreen}
                options={{
                    //tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="home-outline" color={color} size={22}/>
                    ),
                }}
        />
            <Tab.Screen 
                name ="Explore" 
                component={ExploreScreen}
                options={{
                    //tabBarLabel: 'Explore',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="heart-outline" color={color} size={22}/>
                    ),
                }}
                />
            <Tab.Screen 
                name ="Notification" 
                component={NotificationScreen}
                options={{
                    //tabBarLabel: 'Notification',
                   tabBarIcon: ({ color }) => (
                    <Ionicons name="notifications-outline" color={color} size={22}/>
                   ),
                }}
                />
            <Tab.Screen 
                name ="Profile" 
                component={ProfileScreen}
                options={{
                    //tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="person-outline" color={color} size={22}/>
                    ),
                }}
                />
        </Tab.Navigator>
    )

    


}

export default BottomTabNavigator;
