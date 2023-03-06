import { StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components'
import React from 'react'

const ConfirmButton = () => {
  return (
    <View>
      <Btn>
        <Txt>
          ACEPTAR
        </Txt>
      </Btn>
    </View>
  )
}

const Btn = styled.View`
  align-self: center;
  align-content: center;
  justify-content: center;
  margin-top: 5%;
  background-color: #27ee45;
  width: 80%;
  height: 70px;
  border-radius: 5px;
  border-color: "#1c337c";
  border-width: 3px;
`;
const Txt = styled.Text`
  font-size: 15px;
  color: black;
  font-weight: bold;
  align-self: center;
`;
export default ConfirmButton;
