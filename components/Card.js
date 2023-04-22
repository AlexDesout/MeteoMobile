import * as React from 'react';
import { Avatar, Button, Card, Text, shadow } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';


export default function BasicCard(data) {
  // console.log(data.all.cod);
  if (data.all.cod != "404") {
    const image = { uri: `http://openweathermap.org/img/wn/${data.all.weather[0].icon}@2x.png` };
    // console.log(data.all.main)

    return (
      <Card style={styles.card}>
        <Card.Content style={styles.content}>
          <Text variant="titleLarge" style={styles.title}>{data.all.name}</Text>
          <Text variant="bodyMedium" style={styles.temp}>{data.all.main.temp}°C</Text>
          <Text variant="bodyMedium" style={styles.sky}>{data.all.weather[0].description}</Text>
        </Card.Content>
        <Card.Cover source={image} style={styles.img} />
        <Card.Actions>
          {/* <Button>Cancel</Button>
        <Button>Ok</Button> */}
        </Card.Actions>
      </Card>
    );
  }
  else {
    <View style = {styles.error}>
      <Text>Ville introuvable</Text>
    </View>
  }
}



const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    width: 380,
    height: 400,
    backgroundColor: '#FFFFFF',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    marginBottom: 20,
  },
  temp: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sky: {
    fontSize: 15,
    marginBottom: 15,
  },
  img: {
    width: 200,
    height: 200,
  },
  error: {
    flex:1,
    backgroundColor:'red',
  },
});

