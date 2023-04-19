import { StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native'
import styled from 'styled-components'
import React from 'react'
import { colors } from '../utils/colors'

const ConfirmButton = (isLoading, callbackFunction) => {
  return (
    <TouchableOpacity onPress={() => callbackFunction}>
      <Btn>
        {isLoading == true ? <ActivityIndicator /> :
          <Txt>
            ACEPTAR
          </Txt>}
      </Btn>
    </TouchableOpacity>
  )
}

const Btn = styled.View`
  align-self: center;
  align-content: center;
  justify-content: center;
  margin-top: 5%;
  background-color: ${colors.blue};
  width: 80%;
  height: 70px;
  border-radius: 5px;
  border-color: "#1c337c";
  border-width: 1px;
`;
const Txt = styled.Text`
  font-size: 15px;
  color: white;
  font-weight: bold;
  align-self: center;
`;
export default ConfirmButton;
