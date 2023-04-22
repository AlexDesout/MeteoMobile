import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BasicCard from '../components/Card';
import Search from '../components/Search';
import { useNavigation } from '@react-navigation/native';
import { IconButton, MD3Colors } from 'react-native-paper';
import CityCard from '../components/CityCard';
import { useState } from 'react';


export default function SearchView() {
    const navigation = useNavigation();
    const [city, setCity] = useState(['Paris', 'Londres', 'Rome', 'Madrid'])
    // console.log(city)

    function previousPage() {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <View style = {styles.navigation}>
                <IconButton
                    style = {styles.icon}
                    icon="arrow-left"
                    iconColor={MD3Colors.error50}
                    size={30}
                    onPress={previousPage}
                    iconColor='black'
                    mode='contained-tonal'
                    containerColor='red'

                />
                <Search style={styles.navbar}></Search>
            </View>
            <View style = {styles.cityList}>
                {city.map((c) =>
                    <CityCard city = {c}></CityCard>
                )}
                
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        // flexDirection:'row',
        // justifyContent: 'center',
        alignItems: 'center',
    },
    navigation: {
        display: 'flex',
        flexDirection: 'row',
        // justifyContent:'flex-start',
        marginTop: 20,  
        // backgroundColor: 'red',
        // width:280,
    },
    cityList: {
        display: 'flex',
        flexDirection: 'column',
        // backgroundColor:'green',
        width:400,
        alignItems:'center',
        marginTop:60,
        
        
    },
})