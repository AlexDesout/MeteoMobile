import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { View, ImageBackground, Text, StyleSheet } from 'react-native';


export default function BasicCard(data) {
  const image = { uri: `http://openweathermap.org/img/wn/${data.all.weather[0].icon}@2x.png` };
  console.log(data.all)


  return (


      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {data.all.name}
          </Typography>

          <ImageBackground source={image} resizeMode="cover" style= {styles.img}>
            <Text></Text>
          </ImageBackground>

          {/* <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography> */}
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {data.all.weather[0].description}
          </Typography>
          <Typography variant="body2">
            {data.all.main.temp}°C
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>


  );
}

const styles = StyleSheet.create({
    img: {
        width:'50%',
        height:'5rem',
    },
  });