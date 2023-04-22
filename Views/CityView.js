import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BasicCard from '../components/Card';
import Search from '../components/Search';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import MeteoByCoord from '../Requests/MeteoByCoord';
import * as Location from 'expo-location';
import { useRoute } from '@react-navigation/native';
import MeteoByCity from '../Requests/MeteoByCity';



export default function CityView() {
    const route = useRoute()
    // console.log(route.params.city)

    const navigation = useNavigation();

    function onPress() {
        navigation.navigate('Search');
    }

    
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.navbar} onPress={onPress}>
                    <Search></Search>
                </TouchableOpacity>
                <View style={styles.meteo}>
                    <MeteoByCity city = {route.params.city}></MeteoByCity>
                </View>
            </View>
        )
    
    

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#A4C3F0',
        alignItems: 'center',
    },
    navbar: {
        marginTop: 20,
    },
    meteo: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
    },
});
