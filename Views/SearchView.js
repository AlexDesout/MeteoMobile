import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BasicCard from '../components/Card';
import Search from '../components/Search';
import { useNavigation } from '@react-navigation/native';


export default function SearchView(){
    const navigation = useNavigation();

    function previousPage(){
        navigation.goBack()
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={previousPage}>
                <Text>Previous Page</Text>
            </TouchableOpacity>
            <Search></Search>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
})