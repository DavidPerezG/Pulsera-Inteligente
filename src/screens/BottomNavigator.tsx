import React from 'react';
import { View, Text, TouchableOpacity, Settings } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';

import { colors } from '../utils/colors';

import HomeScreen from './HomeScreen';
import LocationScreen from './LocationScreen';
import ConfigScreen from './ConfigScreen';
import ParametroCorazon from './ParametroCorazon';
import ParametroOxigeno from './ParametroOxigeno';
import ParametroEdad from './ParametroEdad';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarActiveTintColor: `${colors.blueDark}`,
        headerShown: false,
        tabBarStyle: {
          display: 'flex',
          width: '100%',
          backgroundColor: '#ffffff',
          position: 'absolute',
          bottom: 0,
          height: 80,

        },
        tabBarItemStyle: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarIconStyle: {
          marginTop: 7,
        },
        tabBarLabelStyle: {
          marginBottom: 7
        }
      }}
    >

      <Tab.Screen name="HomeScreen" component={HomeScreen}
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color, size, focused }) => (
            <TouchableOpacity onPress={() => { navigation.navigate('HomeScreen') }}>
              <Icon name='home' size={30} color={focused ? colors.blueDark : 'black'} />

            </TouchableOpacity>
          ),
        }}

      />
      <Tab.Screen name="Location" component={LocationScreen}
        options={{
          tabBarLabel: 'Ubicación',
          tabBarIcon: ({ color, size, focused }) => (
            <TouchableOpacity onPress={() => {
              navigation.navigate('Location')
            }}>
              <Icon name='enviromento' size={30} color={focused ? colors.blueDark : 'black'} />

            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen name="Settings" component={SettingsNav}
        options={{
          tabBarLabel: 'Configuración',
          tabBarIcon: ({ color, size, focused }) => (
            <TouchableOpacity onPress={() => { navigation.navigate('Settings', { screen: "Config" }) }}>
              <Icon name='setting' size={30} color={focused ? colors.blueDark : 'black'} />

            </TouchableOpacity>
          ),
        }}
      />

    </Tab.Navigator>


  );


}


function SettingsNav() {
  return (
    <Tab.Navigator
      initialRouteName='Config'
      screenOptions={{
        headerShown: false,

      }}
    >
      <Tab.Screen name="Config" component={ConfigScreen} />

      <Tab.Screen name="ParamCorazon" component={ParametroCorazon} />
      <Tab.Screen name="ParamEdad" component={ParametroEdad} />
      <Tab.Screen name="ParamOxigeno" component={ParametroOxigeno} />
    </Tab.Navigator>
  );
}


{/* <NavigationOption>
        <Text>Inicio</Text>
      </NavigationOption>
      <NavigationOption>
        <Icon name="enviromento" size={30} color="#000000" />
        <Text>Ubicación</Text>
      </NavigationOption>
      <NavigationOption>
        <Icon name="setting" size={30} color="#000000" />
        <Text>Config.</Text>
      </NavigationOption> */}

export default BottomNavigator;

const NavContainer = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
  background-color: aliceblue;
  bottom: 0;
`;

const NavigationOption = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;

`;