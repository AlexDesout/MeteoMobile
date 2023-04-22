import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Search() {

  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  const searchFunction = () =>{
    // console.log(searchQuery)
    if (searchQuery != ''){
      navigation.navigate('City', {city: searchQuery});
    }
  }

  return (
    <View style={{marginTop:100}}>
    <Searchbar
      placeholder="Search post"
      onChangeText={onChangeSearch}
      value={searchQuery}
      onIconPress = {searchFunction}
      onSubmit = {()=> console.log(searchQuery)}
      style = {styles.nav}
      mode = 'bar'
    />
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    width:250,
    backgroundColor:'red',
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

