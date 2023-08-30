import React, {useState} from 'react';
import {
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Pressable,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export type onCategorySelect = {
  selectionCallback: Function;
};

type ItemTitle = {
  itemTitle: String;
};

type MenuItemPropsType = ItemTitle & onCategorySelect;

const MenuItem: React.FC<MenuItemPropsType> = (props: MenuItemPropsType) => {
  const [image, setImage] = useState();

  function getImage() {
    fetch(
      `https://fakestoreapi.com/products/category/${props.itemTitle}?limit=1`,
    )
      .then(resp => resp.json())
      .then(a => setImage(a[0].image));
  }
  getImage();

  return (
    <Pressable
      style={styles.item}
      onPress={() => props.selectionCallback(props.itemTitle)}>
      <ImageBackground
        source={{uri: image}}
        resizeMode="contain"
        style={styles.image}
      />
      <Text style={styles.title}>{props.itemTitle}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: {
    width: windowWidth * 0.8,
    height: windowHeight * 0.6,
    backgroundColor: 'white',
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 0,
    backgroundColor: 'cyan',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default MenuItem;
