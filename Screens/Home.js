import React from 'react'
import { View, StyleSheet, TextInput, Text, TouchableOpacity, ImageBackground, SafeAreaView, ScrollView, Image, Button } from 'react-native'

export default function Home({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                placeholder="  Search  "
                style={styles.searchbar}
            />

            <View style={styles.mapsectionContainer}>

            </View>
            <ScrollView horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
                style={styles.scrollcontainer}
            >
                <View style={styles.cardContainer}>
                    <View style={styles.imageContainer}>
                    </View>
                    <Text style={styles.headerText}>Giving Hope</Text>
                    <Text style={styles.contentText}>
                        Giving hope to the hopeless.
                        together we can give hope and help a soul for better tomorrow.
                    </Text>
                </View>
                <View style={styles.cardContainer2}>
                    <View style={styles.imageContainer}>
                    </View>
                    <Text style={styles.headerText}>Bet on Better</Text>
                    <Text style={styles.contentText}>
                        Giving hope to the hopeless.
                        together we can give hope and help a soul for better tomorrow.
                    </Text>

                </View>
                <View style={styles.cardContainer3}>
                    <View style={styles.imageContainer}>
                    </View>
                    <Text style={styles.headerText}>Bet on Better</Text>
                    <Text style={styles.contentText}>
                        Giving hope to the hopeless.
                        together we can give hope and help a soul for better tomorrow.
                    </Text>

                    <Text style={styles.textbottom}>
                        By helping a soul, together we can change the world.
                    </Text>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        width: '375px',
        height: '812px',
    },
    searchbar: {
        position: 'absolute',
        width: '317px',
        height: '35px',
        left: 29,
        top: 100,
        backgroundColor: '#E5E5E5',
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
        outline: 'none',
        borderRadius: '16px',
    },
    mapsectionContainer: {
        position: 'absolute',
        width: '359px',
        height: '366px',
        left: 8,
        top: 185,
        backgroundColor: 'white',
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
        borderRadius: '16px',
    },
    scrollcontainer: {
        position: 'absolute',
        width: '375px',
        height: '141px',
        left: 0,
        top: 557,
        backgroundColor: 'rgba(141, 219, 224, 1)',
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
        display: 'flex',
        flexDirection: 'row',
    },
    cardContainer: {
        position: 'absolute',
        width: '207px',
        height: '119px',
        left: 8,
        top: 10,
        backgroundColor: '#ffffff',
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
        borderRadius: '14px'
    },
    cardContainer2: {
        position: 'relative',
        width: '207px',
        height: '119px',
        left: '110%',
        top: 10,
        backgroundColor: '#ffffff',
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
        borderRadius: '14px'
    },
    cardContainer3: {
        position: 'relative',
        width: '207px',
        height: '119px',
        left: '116%',
        top: 10,
        backgroundColor: '#ffffff',
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
        borderRadius: '14px'
    },
    imageContainer: {
        position: 'absolute',
        width: '77px',
        height: '67px',
        left: '10px',
        top: '5px',
        backgroundColor: 'gray',
        boxShadow: '0px 4px 4px rgba(0,0,0, 0.25)',
        borderRadius: '5px'
    },
    headerText: {
        position: 'absolute',
        height: '16px',
        left: '100px',
        top: '5px',
        fontFamily: 'arial black ',
        fontStyle: 'normal',
        fontWeight: '900',
        fontSize: '14px',
        lineHeight: '16px',
        color: 'rgba(63, 131, 224, 1)'
    },
    contentText: {
        position: 'absolute',
        width: '100px',
        left: '100px',
        top: '25px',
        fontFamily: 'arial',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '11px',
        color: 'rgba(0, 0, 0, 0.74)',
    },
    textbottom: {
        position: "absolute",
        height: "14px",
        left: "34px",
        top: "300px",
        fontFamily: "arial",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "12px",
        color: "rgba(94, 206, 253, 1)",
      },
})

