import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../utils/colors';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';


const ConfigScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TitleContainer>
        <TitleText>Configuración</TitleText>
      </TitleContainer>
      <OptionsContainer>
        <TouchableOpacity onPress={() => { navigation.navigate('Settings', { screen: "ParamCorazon" }) }}>
          <OptionContainer>
            <SubText>Parametro seguro del corazon</SubText>
            <Icon name="right" size={20} color={'black'} />
          </OptionContainer>
        </TouchableOpacity>
        <Line />
        <TouchableOpacity onPress={() => { navigation.navigate('Settings', { screen: "ParamOxigeno" }) }}>
          <OptionContainer>
            <SubText>Parametro seguro de oxigeno en sangre</SubText>
            <Icon name="right" size={20} color={'black'} />
          </OptionContainer>
        </TouchableOpacity>

        <Line />
        <TouchableOpacity >

          <OptionContainer>
            <SubText>Configurar zonas seguras de ubicación</SubText>
            <Icon name="right" size={20} color={'black'} />
          </OptionContainer>
        </TouchableOpacity>

        <Line />
        <TouchableOpacity onPress={() => { navigation.navigate('Settings', { screen: "ParamEdad" }) }}>

          <OptionContainer>
            <SubText>Rango de edad</SubText>
            <Icon name="right" size={20} color={'black'} />
          </OptionContainer>
        </TouchableOpacity>

        <Line />
      </OptionsContainer>

    </View>
  )
}

export default ConfigScreen;


const TitleContainer = styled.View`
  margin: 15px;
  padding: 20px;
  border-radius: 10px;
  background-color: white;
  border-color: ${colors.blueLightier};
  border-width: 0.5px;
`;

const OptionsContainer = styled.View`
  margin: 15px;
  margin-top: 0;
  padding: 20px;
  border-radius: 10px;
  background-color: white;
  border-color: ${colors.blueLightier};
  border-width: 0.5px;
  height: 80%;
  
`;

const OptionContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const TitleText = styled.Text`
  font-size: 40px;
  text-align: center;
  font-family: 'Lato_400Regular';
`;

const SubText = styled.Text`
  font-family: 'Lato_400Regular';
  font-size: 17px;
`;

const Line = styled.View`
  height: 1px;
  background-color: gray;
  margin-top: 0px;
`;


