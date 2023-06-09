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



export default function HomeView() {
    const [location, setLocation] = useState([]);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
        //   console.log(location.coords)
    }


    const navigation = useNavigation();

    function onPress() {
        navigation.navigate('Search');
    }

    if (location.length != 0) {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.navbar} onPress={onPress}>
                    <Search></Search>
                </TouchableOpacity>
                <View style={styles.meteo}>
                    <MeteoByCoord position={location}></MeteoByCoord>
                </View>
            </View>
        )
    }

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
