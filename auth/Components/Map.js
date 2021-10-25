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
        position: 'absolute',
        width: '375px',
        height: '378px',
        borderRadius: 0,
        top: 0,
        
    },
})

export default Map
