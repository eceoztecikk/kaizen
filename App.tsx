import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/home';
import Detail from './src/screens/detail';
import Explore from "./src/assets/svg/Explore";
import TabIcon from "./src/assets/svg/TabIcon";
import Star from "./src/assets/svg/Star";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: 'white' },
        tabBarActiveTintColor: '#1D1E1C',
        tabBarInactiveTintColor: 'lightgray',
        tabBarLabelStyle: { fontSize: 10, fontWeight: 'bold' },
        tabBarShowLabel: true,
      }}
    >
      <Tab.Screen
        name="Keşfet"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Keşfet',
          tabBarIcon: ({ color, size, focused }) => (
            <Explore isActive={focused} fill={color} width={size} height={size} />
          ),
        }}

      />
      <Tab.Screen
        name="."
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <TabIcon color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Daha Cüzdan"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Daha Cüzdan',
          tabBarIcon: ({ color, size, focused }) => (
            <Star isActive={focused} fill={color} width={size} height={size} />
          ),
        }}
      />

    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Detail"
          component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
