/* eslint-disable prettier/prettier */
import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import Section1Child from './Section1Child';


const data=[
  {
    image:require('../img/trump.jpg'),
    title:'President Trump is said to have responded "extremely well" to his Covid treatment'
  },

  {
    image:require('../img/microsoft.jpg'),
    title:'Microsoft makes remote work option permanent'
  },
  {
    image:require('../img/bigtechs.jpg'),
    title:'Big Tech: Between a rock and a hard place'
  },
  {
    image:require('../img/hospitality.jpg'),
    title:'Hospitality sector in legal action over lockdowns'
  },


]


const Section1 = () => {
  return (
    <ScrollView horizontal={true} style={{paddingTop:3}}>
        {
          data.map(item=>{
            return(
              <Section1Child image={item.image}  title={item.title}/>
            )
          })
        }
    </ScrollView>
  );
};


export default Section1;


const styles=StyleSheet.create({
  text:{
    fontSize:16,
    fontWeight:"bold",
    paddingLeft:5,
    paddingTop:5
  }
})