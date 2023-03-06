import React from 'react';
import { Dimensions, ScrollView, Text, View } from 'react-native';
import {
  LineChart,

} from "react-native-chart-kit";
import styled from 'styled-components/native';
import { colors } from '../utils/colors';


const HomeScreen = () => {
  return (
    <ScrollView style={{ display: 'flex', height: '100%', flex: 1, margin: 10, marginBottom: 80 }}>
      <TitleContainer>
        <TitleText>Mis Datos</TitleText>

      </TitleContainer>
      <SubtitleContainer>
        <SubtitleText>Oxigenación</SubtitleText>
      </SubtitleContainer>
      <LineChart
        data={{
          labels: ["0:00", "0:30", "1:00", "1:30", "2:00", "2:30"],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100
              ]
            }
          ]
        }}
        width={Dimensions.get("window").width * .96} // from react-native
        height={220}
        yAxisLabel=""
        yAxisSuffix="o"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: `${colors.blue}`,
          backgroundGradientFrom: `${colors.blueDark}`,
          backgroundGradientTo: `${colors.blueDarker}`,
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: `${colors.blue}`,
          }
        }}
        bezier
        style={{
          borderRadius: 16,
        }}
      ></LineChart>
      <SubtitleContainer>
        <SubtitleText>Frecuencia</SubtitleText>
      </SubtitleContainer>
      <LineChart
        data={{
          labels: ["0:00", "0:30", "1:00", "1:30", "2:00", "2:30"],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100
              ]
            }
          ]
        }}
        width={Dimensions.get("window").width * .96} // from react-native
        height={220}
        yAxisLabel=""
        yAxisSuffix="o"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: `${colors.blueDark}`,
          backgroundGradientFrom: `${colors.blueDark}`,
          backgroundGradientTo: `${colors.blueDarker}`,
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: `${colors.blue}`,
          }
        }}
        bezier
        style={{
          marginVertical: 0,
          borderRadius: 16,
        }}
      ></LineChart>
      <SubtitleContainer>
        <SubtitleText>Respiración</SubtitleText>
      </SubtitleContainer>
      <LineChart
        data={{
          labels: ["0:00", "0:30", "1:00", "1:30", "2:00", "2:30"],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100
              ]
            }
          ]
        }}
        width={Dimensions.get("window").width * .96} // from react-native
        height={220}
        yAxisLabel=""
        yAxisSuffix="o"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: `${colors.blue}`,
          backgroundGradientFrom: `${colors.blueDark}`,
          backgroundGradientTo: `${colors.blueDarker}`,
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: `${colors.blue}`,
          }
        }}
        bezier
        style={{
          borderRadius: 16,
        }}
      ></LineChart>
    </ScrollView>
  )
}

const TitleContainer = styled.View`
  padding: 20px;
  border-radius: 10px;
  background-color: white;
  border-color: ${colors.blueLightier};
  border-width: 0.5px;
  width: ${Dimensions.get('window').width * .96};
`;

const TitleText = styled.Text`
  font-size: 40px;
  text-align: center;
  font-family: 'Lato_400Regular';
`;

const SubtitleContainer = styled.View`
  padding: 10px;
  margin-top: 10px;
  border-radius: 10px;
  background-color: white;
  border-color: ${colors.blueLightier};
  border-width: 0.5px;
  width: ${Dimensions.get('window').width * .96};
`;

const SubtitleText = styled.Text`
  font-size: 20px;
  text-align: center;
  font-family: 'Lato_400Regular';
`;

export default HomeScreen;