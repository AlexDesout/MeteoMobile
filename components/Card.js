import * as React from 'react';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';


export default function BasicCard(data) {
  const image = { uri: `http://openweathermap.org/img/wn/${data.all.weather[0].icon}@2x.png` };
  // console.log(data.all.main)

  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text variant="titleLarge">{data.all.name}</Text>
        <Text variant="bodyMedium">{data.all.main.temp}°C</Text>
        <Text variant="bodyMedium">{data.all.weather[0].description}</Text>
      </Card.Content>
      <Card.Cover source={image} style = {styles.img}/>
      <Card.Actions>
        {/* <Button>Cancel</Button>
        <Button>Ok</Button> */}
      </Card.Actions>
    </Card>
  );
}


const styles = StyleSheet.create({
  card: {
    textAlign:'center',
    alignItems:'center',
    width: 200,
  },
  img: {
    width: 100,
    height: 100,
  },
});

