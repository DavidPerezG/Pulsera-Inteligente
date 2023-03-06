import React from 'react'

import Icon from 'react-native-vector-icons/AntDesign';
import IconSecondary from 'react-native-vector-icons/Entypo';
import styled from 'styled-components'

const ParameterContainer = ({iconName, containerText, secondaryEnabled}) => {

  return (
    <Container>
      {
        secondaryEnabled ? (
          <Icon name={iconName} size={24} color={'red'} />
        ) : <IconSecondary name={iconName} size={24} color={'red'} />
      }
      <Description>{containerText}</Description>
    </Container>
  )
}

const Container = styled.View`
  width: 80%;
  height: 100px;
  display: flex;
  align-self: center;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  border-radius: 15px;
  border-width: 1px;
  border-color: gray;
`;
const Description = styled.Text`
  font-size: 15px;
  color: black;
  font-weight: bold;
`;
export default ParameterContainer;
