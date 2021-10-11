import React from 'react'
import MapView from 'react-native-maps';
import {StyleSheet} from 'react-native'
function Map() {
    return (
        <MapView
            style = {styles.mapsectionContainer}
            initialRegion={{
                latitude: -28.7154773,
                longitude: 24.7348093,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
      />
    )
}

const styles = StyleSheet.create({
    mapsectionContainer: {
        width: '100%' ,
        height: '45%',
        borderRadius: 16,
        top: 150,
        marginHorizontal: '1%',
    },
})

export default Map
