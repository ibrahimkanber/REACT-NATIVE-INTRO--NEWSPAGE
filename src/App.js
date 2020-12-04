/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Image,
  ImageBackground,
  View,
  Text,
  ScrollView,
  FlatList,
} from 'react-native';
import FileHeader from './components/FileHeader';
import NavbarItem from './components/NavbarItem';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';

const App = () => {
 
  return (
      <ScrollView>
        <FileHeader />
        <Section1 />
        <Section2 />
        <Section3 />
      </ScrollView>
 
  );
};

export default App;
