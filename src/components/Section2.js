/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Section2 = () => {
  return (
    <View style={styles.container}>
      <Text>1 hour ago | </Text>
      <TouchableOpacity>
        <Text style={styles.textRight}>Science & Environment</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#e0e0e0',
    padding: 5,
    
  },

  textRight:{
      color:"red"
  }
});

export default Section2;
