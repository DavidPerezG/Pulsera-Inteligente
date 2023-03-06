import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import createGlobalStyle from 'styled-components/native';
import 'react-native-gesture-handler';
import * as React from 'react';
import BottomNavigator from './src/screens/BottomNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  useFonts,
  Lato_400Regular
} from "@expo-google-fonts/dev";


export default function App() {
  let [fontsLoaded] = useFonts({
    Lato_400Regular
  });

  if (!fontsLoaded) {
    return null;
  } else {
    return (

      <NavigationContainer>
        <SafeAreaView>
          <AppComponent>
            <BottomNavigator />
          </AppComponent>
        </SafeAreaView>
      </NavigationContainer>


    );
  }
}

const AppComponent = styled.View`
  display: flex;
  height: 100%;
  background-color: #bd9090;
  font-family: 'Lato_400Regular';
`;


