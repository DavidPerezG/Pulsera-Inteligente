import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import ParameterContainer from '../components/parameterContainer';
import ParameterHeader from '../components/parameterHeader';
import ConfirmButton from '../components/confirmButton';

import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import showToast from '../utils/toast';

const ParametroEdad = () => {
  const [edad, setEdad] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const storeData = async () => {
    setIsLoading(true);

    try {
      await AsyncStorage.setItem('@edad', edad);
      showToast('Datos guardados correctamente', '');
    } catch (e) {
      // saving error
    }
    setIsLoading(false);

  }

  const getData = async () => {
    try {
      const edadVar = await AsyncStorage.getItem('@edad');
      setEdad(edadVar || '0');
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
      <ParameterContainer color='gray' iconName='calendar' containerText='Edad del usuario' />
      <Input onChangeText={(text) => {
        setEdad(text);
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

export default ParametroEdad;
