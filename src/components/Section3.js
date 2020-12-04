/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const data = [
  {
    id: 1,
    image: require('../img/clarusway1.jpg'),
    title: 'New Cohorts are ready to launch!',
    titleSmallLeft: '15 min | ',
    titleSmallRight: 'Education',
  },
  {
    id: 2,
    image: require('../img/nobel.jpg'),
    title:
      'Nobel Peace Prize: UN World Food Programme wins for efforts to combat hunger',
    titleSmallLeft: '1h | ',
    titleSmallRight: 'Nobel',
  },
  {
    id: 3,
    image: require('../img/USAelections.jpg'),
    title: 'Top Republican Mitch McConnell avoids White House over Covid-19',
    titleSmallLeft: '1h | ',
    titleSmallRight: 'Politic',
  },
  {
    id: 4,
    image: require('../img/newtonBook.jpg'),
    title: "'Rare' Sir Isaac Newton work found on bookshelf sells for £22k",
    titleSmallLeft: '1h | ',
    titleSmallRight: 'UK',
  },
  {
    id: 5,
    image: require('../img/coronoSpain.jpg'),
    title: 'Coronavirus: Spain imposes state of emergency on Madrid',
    titleSmallLeft: '1h | ',
    titleSmallRight: 'Health',
  },
  {
    id: 6,
    image: require('../img/USAelections.jpg'),
    title: 'Top Republican Mitch McConnell avoids White House over Covid-19',
    titleSmallLeft: '1h | ',
    titleSmallRight: 'Politic',
  },
  {
    id: 7,
    image: require('../img/clarusway1.jpg'),
    title: 'New Cohorts are ready to launch!',
    titleSmallLeft: '15 min | ',
    titleSmallRight: 'Education',
  },
  {
    id: 8,
    image: require('../img/newtonBook.jpg'),
    title: "'Rare' Sir Isaac Newton work found on bookshelf sells for £22k",
    titleSmallLeft: '1h | ',
    titleSmallRight: 'UK',
  },
  {
    id: 9,
    image: require('../img/nobel.jpg'),
    title:
      'Nobel Peace Prize: UN World Food Programme wins for efforts to combat hunger',
    titleSmallLeft: '1h | ',
    titleSmallRight: 'Nobel',
  },
  {
    id: 10,
    image: require('../img/hospitality.jpg'),
    title: 'Hospitality sector in legal action over lockdowns',
    titleSmallLeft: '1h | ',
    titleSmallRight: 'Economic',
  },
  
];

const Section3 = () => {
  return data.map((data) => {
    return (
      <View style={styles.mainContainer} key={data.id}>
        <View>
          <Image source={data.image} style={styles.image} />
        </View>
        <View style={styles.containerRight}>
          <Text style={styles.title}>{data.title}</Text>
          <View style={styles.smalltextContainer}>
              <Text style={styles.smallTextLeft}>{data.titleSmallLeft}</Text>
            <TouchableOpacity>
              <Text style={styles.smallTextRight}>{data.titleSmallRight}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  });
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingRight: 100,
    flexDirection: 'row',
    marginBottom: 8,
    paddingLeft:5
  },
  containerRight: {
    paddingLeft: 8,
    paddingBottom:5,
    justifyContent: 'space-between',
    
  },

  image: {
    width: 100,
    height: 80,
  },

  title: {
    fontSize: 14,
  },

  smalltextContainer: {
    flexDirection: 'row',
  },
  smallTextLeft: {
    color: 'black',
  },
  smallTextRight: {
    color: 'red',
  },
});
export default Section3;
