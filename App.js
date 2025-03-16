import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import { Ionicons } from '@expo/vector-icons';
import SearchScreen from './screens/SearchScreen';
import { View, Text, useColorScheme, Image ,StyleSheet,Button} from 'react-native';




const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();



function SettingsScreen() {
  return (
    <View>
      <Text>Settings Screen</Text>
    </View>
  );
}



export default function App() {
  const colorScheme = useColorScheme();


  return (
    
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          let iconSize = focused ? 30 : 25;

          // Set icon based on the screen name
          if (route.name === 'Home') {
            iconName = <Image source={require('./assets/chat.png')} style={{ width: iconSize, height: iconSize }} />;
          }
          else if (route.name === 'Status') {
            iconName = <Image source={require('./assets/chat.png')} style={{ width: iconSize, height: iconSize }} />;
          }
          else if (route.name === 'Settings') {
            iconName = <Image source={require('./assets/comm.png')} style={{ width: iconSize, height: iconSize }} />;
          }
          else if (route.name === 'Profile') {
            iconName = <Image source={require('./assets/call.png')} style={{ width: iconSize, height: iconSize }} />;
          }

          // Return icon
          return iconName;
        },
        tabBarActiveTintColor: '#347F1',
        tabBarInactiveTintColor: 'gray',
      })}   style={{backgroundColor: 'black' ,color:'white'}}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Status" component={SearchScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

