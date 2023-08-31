import React from 'react';
import {View, Text, StyleSheet, Image, Pressable, Alert} from 'react-native';

export type ItemProps = {
  id: Number;
  title: String;
  price: Number;
  category: String;
  description: String;
  image: String;
};

type ShelfItemPropType = {
  itemProps: ItemProps;
};

const ShelfItem: React.FC<ShelfItemPropType> = (props: ShelfItemPropType) => {
  const image: Object = {
    uri: props.itemProps.image,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{props.itemProps.title}</Text>
      <View style={styles.bodyContent}>
        <Image
          source={image}
          resizeMode="contain"
          style={styles.cardItemImagePlace}
        />
        <View style={styles.cardBody}>
          <View style={styles.group2}>
            <Text style={styles.subtitleStyle}>
              {props.itemProps.description}
            </Text>
          </View>
          <View style={styles.group}>
            <Text style={styles.price}>
              Price: $ {props.itemProps.price.toFixed(2)}
            </Text>
            <Pressable
              onPress={() => Alert.alert('Untitled')}
              style={styles.button}>
              <Text style={styles.addCart}>Add to cart</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    borderRadius: 3,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'rgba(39,76,139,1)',
    margin: 3,
    height: 162,
  },
  titleStyle: {
    backgroundColor: 'lightblue',
    borderRadius: 2,
    display: 'flex',
    fontSize: 12,
    color: '#000',
    paddingBottom: 0,
    textAlign: 'center',
    height: 30,
  },
  bodyContent: {
    padding: 5,
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
  cardItemImagePlace: {
    height: '100%',
    width: 155,
    margin: 0,
    borderRadius: 11,
    marginBottom: 2,
    marginLeft: 2,
    paddingBottom: 0,
    paddingLeft: 0,
  },
  cardBody: {
    overflow: 'hidden',
    flex: 1,
    alignItems: 'center',
  },
  group2: {
    overflow: 'hidden',
    height: 100,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  subtitleStyle: {
    fontFamily: 'roboto-regular',
    fontSize: 8,
    color: '#000',
    lineHeight: 8,
    letterSpacing: 0,
    textAlign: 'left',
    flex: 1,
    width: 151,
  },
  group: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  price: {
    fontFamily: 'roboto-regular',
    fontSize: 8,
    color: '#000',
    lineHeight: 15,
    letterSpacing: 0,
    textAlign: 'center',
    height: 15,
    width: '30%',
  },
  button: {
    borderRadius: 30,
    height: 15,
    width: 70,
    backgroundColor: 'rgba(78,195,85,1)',
  },
  addCart: {
    height: 15,
    width: 70,
    fontFamily: 'roboto-regular',
    fontSize: 8,
    color: '#000',
    lineHeight: 15,
    letterSpacing: 0,
    textAlign: 'center',
    flex: 1,
    alignSelf: 'center',
  },
});

export default ShelfItem;
