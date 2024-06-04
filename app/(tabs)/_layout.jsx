import { View, Text } from 'react-native'
import React from 'react'
import {Tabs} from 'expo-router'
import home from './home'
import explore from './explore'
import profile from './profile'
import { FontAwesome } from '@expo/vector-icons';
// import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
// import Colors from '../constants/Colors'
export default function _layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown:false,
        // tabBarActiveTintColor:Colors.PRIMARY
      }}
    >
        <Tabs.Screen name="home" 
      
        options ={{tabBarLabel:'Home', tabBarIcon:({color}) => 
        <FontAwesome name="home" size={24} color={color} /> }} />

        <Tabs.Screen name="explore"  
        options ={{tabBarLabel:'Explore', tabBarIcon:({color}) => 
        <FontAwesome name="search" size={24} color={color} /> }}
        />
        <Tabs.Screen name="profile" 
        options ={{tabBarLabel:'Profile', tabBarIcon:({color}) =>
           <AntDesign name="profile" size={24} color={color} />
            }}
        
        />

    </Tabs>
  )
}