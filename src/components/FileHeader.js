/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import NavbarItem from './NavbarItem';

const FileHeader = () => {
  const items = ['Top Stories', 'My News', 'Popular', 'Video'];
  return (
    <ImageBackground
      source={require('../img/bbclogo.jpg')}
      style={{resizeMode: 'cover'}}>
      <View style={styles.container}>
        <View style={styles.smallContainer}>
          {items.map((item) => {
            return <NavbarItem title={item}/>;
          })}
          
        </View>
      </View>
    </ImageBackground>
  );
};

export default FileHeader;

const styles = StyleSheet.create({
  container: {
    height: 100,
  },

  smallContainer: {
    flex: 0.95,
    paddingLeft:10,
    paddingRight:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    
  },
});
