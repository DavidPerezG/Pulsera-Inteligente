import React from 'react';
import { Dimensions, Text, View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';


const LocationScreen = () => {
  return (
    <View style={{ display: 'flex', width: '100%' }}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          title={'Localización'}
        />
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default LocationScreen;