import React from 'react';
import { View } from 'react-native';

import ParameterContainer from '../components/parameterContainer';
import ParameterHeader from '../components/parameterHeader';
import ConfirmButton from '../components/confirmButton';

import styled from 'styled-components/native';

const ParametroCorazon = () => {
  return (
    <View>
      <ParameterHeader headerTitle={'Parámetros - corazón'} />
      <ParameterContainer secondaryEnabled={false} iconName='heart' containerText='Pulsaciones máximas' />
      <Input />
      <ParameterContainer secondaryEnabled={false} iconName='heart' containerText='Pulsaciones minimas' />
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

export default ParametroCorazon;