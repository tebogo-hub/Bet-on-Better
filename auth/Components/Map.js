import React from 'react'
import { MapView,Marker } from 'react-native-maps';
import {StyleSheet} from 'react-native'
function Map() {
    return (
        <MapView
            style={styles.mapsectionContainer}
            loadingEnabled = {true}
            region={{
                latitude: -28.7154773,
                longitude:  24.7348093,
                latitudeDelta: 0.021,
                longitudeDelta: 0.0421,
            }}
        >
        </MapView>    
    )
}

const styles = StyleSheet.create({
    mapsectionContainer: {
        position: 'absolute',
        width: '359px',
        height: '366px',
        left: 8,
        top: 185,
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
        borderRadius: '16px',
    },
})

export default Map
