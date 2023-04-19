import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import ParameterContainer from '../components/parameterContainer';
import ParameterHeader from '../components/parameterHeader';
import ConfirmButton from '../components/confirmButton';

import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import showToast from '../utils/toast';
import Toast from 'react-native-toast-message';

'../utils/toast';

const ParametroCorazon = () => {
  const [pulsacionMax, setPulsacionMax] = useState('');
  const [pulsacionMin, setPulsacionMin] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const storeData = async () => {
    setIsLoading(true);

    try {
      await AsyncStorage.setItem('@pulsacion_maxima', pulsacionMax);
      await AsyncStorage.setItem('@pulsacion_minima', pulsacionMin);
      showToast('Datos guardados correctamente', '');
    } catch (e) {
      // saving error
    }
    setIsLoading(false);

  }

  const getData = async () => {
    try {
      const max = await AsyncStorage.getItem('@pulsacion_maxima');
      const min = await AsyncStorage.getItem('@pulsacion_minima');
      setPulsacionMax(max || '0');
      setPulsacionMin(min || '0');
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getData();

  }, [])


  return (
    <View>
      <ParameterHeader headerTitle={'Parámetros - corazón'} />
      <ParameterContainer color='red' iconName='heart' containerText='Pulsaciones máximas' />
      <Input onChangeText={(text) => {
        setPulsacionMax(text);
      }} />
      <ParameterContainer color='red' iconName='heart' containerText='Pulsaciones minimas' />
      <Input onChangeText={(text) => {
        setPulsacionMin(text);
      }} />
      <ConfirmButton isLoading={isLoading} callbackFunction={() => storeData} />
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

export default ParametroCorazon;