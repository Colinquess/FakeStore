/* import React from 'react';
import {IItem} from './AddItem'; */
import {StyleSheet, StatusBar, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export interface Item {
  image?: string;
  item: string;
  quantity: string;
}

console.log('hey');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.6,
    backgroundColor: '#f9c2ff',
    /* padding: 20, */
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    marginTop: 0,
    backgroundColor: 'yellow',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Item;
