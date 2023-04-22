import { useState, useEffect } from 'react';
import BasicCard from '../components/Card';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function MeteoByCity(data) {
    // console.log(data.position.coords.latitude)
    const [weather, setWeather] = useState([])
    let url =
        `https://api.openweathermap.org/data/2.5/weather?q=${data.city},France&units=metric&lang=fr&appid=1c759b526e6d29cb90e1258a8add75c2`; 


    function getMeteo() {

        const fetchOptions = {
            method: "GET"
        };
        fetch(url, fetchOptions)
            .then((response) => {
                return response.json();
            })
            .then((dataJSON) => {
                setWeather(dataJSON)
                // console.log(dataJSON)
            })
            .catch((error) => console.log(error));
    }

    useEffect(() => {
        getMeteo()

    }, [])


    if (weather.length != 0) {
        return (
            <View style = {styles.container}>
                <BasicCard all = {weather}></BasicCard>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
    //   backgroundColor:'red',
      width: 400,
      height: 500,
      alignItems:'center'
    }
  });
  