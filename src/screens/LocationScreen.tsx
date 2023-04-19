import React, { useState, useEffect } from 'react';
import { Dimensions, Text, View, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { colors } from '../utils/colors';

const LocationScreen = () => {
  const [position, setPosition] = useState(null);
  //Obtener la locación del usuario
  useFocusEffect(
    React.useCallback(() => {
      setPosition(null);
      encontrarLocacion();
      console.log('los huevos de pascua de san andreas en particular, tienen la facultad de ser, obscuros, y muy, tetricos. *tin*')
    }, [])
  );

  async function encontrarLocacion() {
    setPosition(null);
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Aviso', 'Se deben proporcionar los permisos necesarios para utilizar la geolocalización', [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setPosition(location);
    console.log(location);
  };

  return (
    <View style={{ display: 'flex', width: '100%' }}>
      {
        position !== null ? (
          <><MapView
            style={styles.map}
            showsMyLocationButton={true}
            showsCompass={true}
            scrollEnabled={true}
            zoomEnabled={true}
            pitchEnabled={true}
            rotateEnabled={true}
            initialRegion={{
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
          >
            <Marker
              title='Yor are here'
              description='This is a description'
              coordinate={{ latitude: position.coords.latitude, longitude: position.coords.longitude }} />
          </MapView>
            <TouchableOpacity style={styles.buttonCallout} onPress={() => encontrarLocacion()}>
              <Text>Actualizar Ubicación</Text>
            </TouchableOpacity></>
        ) :
          <View style={styles.container}>
            <ActivityIndicator size={'large'} />
          </View>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  container: {
    flex: 1,
    marginTop: '70%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonCallout: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    top: '70%', //for center align
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor: `${colors.blue}`,
    width: 250,
    height: 30,
    textAlign: "center",
    borderRadius: 5,
    borderColor: "#1c337c",
    borderWidth: 1,
  },
});

export default LocationScreen;