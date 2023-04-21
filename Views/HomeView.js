import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BasicCard from '../components/Card';
import Search from '../components/Search';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import MeteoByCoord from '../Requests/MeteoByCoord';



export default function HomeView() {
    const [position, setPosition] = useState([])

    useEffect( ()=> {
        getLocation()
    }, [])

    function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        } else {
          console.log( "Geolocation is not supported by this browser.");
        }
      }

      function showPosition(position) {
        setPosition(position.coords)
        console.log(position.coords)
        
      }


    const navigation = useNavigation();

    function onPress() {
        navigation.navigate('Search');
    }

    if(position.length != 0) {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={onPress}>
                    <Search></Search>
                    {/* <Text>DZ</Text> */}
                </TouchableOpacity>
                {/* <BasicCard></BasicCard> */}
                <MeteoByCoord coords = {position}></MeteoByCoord>
                {/* <Text>Salut</Text> */}
            </View>
        )
    }
   
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
});
