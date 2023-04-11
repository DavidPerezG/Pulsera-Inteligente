import React from 'react';
import { View } from 'react-native';

import ParameterContainer from '../components/parameterContainer';
import ParameterHeader from '../components/parameterHeader';
import ConfirmButton from '../components/confirmButton';

import styled from 'styled-components/native';

const ParametroOxigeno = () => {
  return (
    <View>
      <ParameterHeader headerTitle={'Parámetros - oxígeno'} />
      <ParameterContainer color='red' iconName='drop' containerText='Valor máximo' />
      <Input />
      <ParameterContainer color='red' iconName='drop' containerText='Valor minimo' />
      <Input />
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
