import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import ParameterContainer from '../components/parameterContainer';
import ParameterHeader from '../components/parameterHeader';
import ConfirmButton from '../components/confirmButton';

import styled from 'styled-components/native';
import showToast from '../utils/toast';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ParametroOxigeno = () => {
  const [oxigenacionMax, setOxigenacionMax] = useState('');
  const [oxigenacionMin, setOxigenacionMin] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const storeData = async () => {
    setIsLoading(true);

    try {
      await AsyncStorage.setItem('@oxigenacion_maxima', oxigenacionMax);
      await AsyncStorage.setItem('@oxigenacion_minima', oxigenacionMin);
      showToast('Datos guardados correctamente', '');
    } catch (e) {
      // saving error
    }
    setIsLoading(false);

  }

  const getData = async () => {
    try {
      const max = await AsyncStorage.getItem('@oxigenacion_maxima');
      const min = await AsyncStorage.getItem('@oxigenacion_minima');
      setOxigenacionMax(max || '0');
      setOxigenacionMin(min || '0');
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getData();

  }, [])

  return (
    <View>
      <ParameterHeader headerTitle={'Parámetros - oxígeno'} />
      <ParameterContainer color='red' iconName='drop' containerText='Valor máximo' />
      <Input onChangeText={(text) => {
        setOxigenacionMax(text);
      }} />
      <ParameterContainer color='red' iconName='drop' containerText='Valor minimo' />
      <Input onChangeText={(text) => {
        setOxigenacionMin(text);
      }} />
      <ConfirmButton />
    </View>
  )
}

const Input = styled.TextInput`
  margin-top: 15px;
  margin-bottom: 15px;
  width: 80%;
  height: 35px;
  align-self: center;
  border-radius: 5px;
  border-width: 1px;
  border-color: gray;
  padding-left: 10px;
`;

export default ParametroOxigeno;
