/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';




const Section1Child = ({image,title}) => {
  return (
    <View style={{marginHorizontal:5,alignItems:"center",height:300,backgroundColor:"rgba(0,0,0,0.1)"}}>
      <Image
        source={image}
        style={{width: 400, height: 250}}></Image>
        <View >
        <Text style={styles.text}>{title}</Text>
        </View>
     
    </View>
  );
};


export default Section1Child;


const styles=StyleSheet.create({
  text:{
    fontSize:16,
    fontWeight:"bold",
    paddingLeft:5,
    paddingTop:5,
    width:400
  }
})