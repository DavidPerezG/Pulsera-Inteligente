import React from 'react'
import styled from 'styled-components'

const ParameterHeader = ({headerTitle}) => {
  return (
    <Container>
      <Title>{headerTitle}</Title>
    </Container>
  )
}

const Container = styled.View`
  width: 100%;
  height: 50px;
  border-bottom-width: 1px;
  border-color: gray;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin-bottom: 30px;
`;

const Title = styled.Text`
  font-size: 15px;
  color: black;
  font-weight: bold;
`;

export default ParameterHeader;
