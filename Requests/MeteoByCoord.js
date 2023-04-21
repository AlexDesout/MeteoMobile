import { useState, useEffect } from 'react';
import BasicCard from '../components/Card';
import { View } from 'react-native-web';


export default function MeteoByCoord(data) {
    const [weather, setWeather] = useState([])
    let url =
        `https://api.openweathermap.org/data/2.5/weather?lat=${data.coords.latitude}&lon=${data.coords.longitude}&France&units=metric&lang=fr&appid=1c759b526e6d29cb90e1258a8add75c2`; 


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
            <View>
                <BasicCard all = {weather}></BasicCard>
            </View>
        )
    }

}