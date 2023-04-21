import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BasicCard from '../components/Card';
import Search from '../components/Search';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';



export default function HomeView() {
    const [position, setPosition] = useState()

    useEffect( ()=> {
        getLocation()
    })

    function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        } else {
          console.log( "Geolocation is not supported by this browser.");
        }
      }

      function showPosition(position) {
        console.log("Latitude: " + position.coords.latitude)
        console.log("Longitude: " + position.coords.longitude)
      }


    const navigation = useNavigation();

    function onPress() {
        navigation.navigate('Search');
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <Search></Search>
                {/* <Text>DZ</Text> */}
            </TouchableOpacity>
            <BasicCard></BasicCard>
            {/* <Text>Salut</Text> */}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
});
