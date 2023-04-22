import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Avatar, Card, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';



export default function CityCard(data) {
    const navigation = useNavigation();
    function search(){
        navigation.navigate('City', {city: data.city});
    }

    return (
        <Card.Title
            style = {styles.city}
            title={data.city}
            left={(props) => <Avatar.Icon {...props} icon="eiffel-tower" />}
            right={(props) => <IconButton {...props} icon="dots-vertical" onPress={search}/>}
        />
    )
}


const styles = StyleSheet.create({
    city: {
        backgroundColor: '#A4C3F0', 
        marginTop:30,
        height:80,
        width:300,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        
        elevation: 11,
    },
   
})