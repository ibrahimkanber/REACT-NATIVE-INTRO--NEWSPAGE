/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const NavbarItem = (props) => {
  return (
    <TouchableOpacity >
      <Text style={{color: 'white'}}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default NavbarItem;
