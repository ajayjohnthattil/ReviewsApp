import * as React from "react";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from'../screens/ProfileScreen';
import ExploreScreen from '../screens/ExploreScreen';
import NotificationScreen from '../screens/NotificationScreen';


const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {

    return(
        <Tab.Navigator 
            initialRouteName ="Home" 
            activeColor="#e91e63"
            barStyle={{ backgroundColor: 'tomato' }}
        >
            <Tab.Screen 
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
        />
            <Tab.Screen 
                name ="Explore" 
                options={{
                    tabBarLabel: 'Explore',
                    tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
                component={ExploreScreen}/>
            <Tab.Screen 
                name ="Notification" 
                options={{
                    tabBarLabel: 'Notification',
                    tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="bell" color={color} size={26} />
                    ),
                }}
                component={NotificationScreen}/>
            <Tab.Screen 
                name ="Profile" 
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
                component={ProfileScreen}/>
        </Tab.Navigator>
    )

    


}

export default BottomTabNavigator;
