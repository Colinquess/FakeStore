import {styles} from './contants';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  ImageBackground,
  Dimensions,
} from 'react-native';

const windowWidth = Dimensions.get('window').width.toFixed(0);
const windowHeight = Dimensions.get('window').height.toFixed(0);

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => {
  const image = {
    uri: `https://fakeimg.pl/${windowWidth}x${windowHeight}?text=${title}%0D%0APlaceholder`,
  };
  return (
    <View style={styles.item}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const CategoriesMenu = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  function getCategories() {
    fetch('https://fakestoreapi.com/products/categories')
      .then(resp => resp.json())
      .then(setData);
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal={true}
        data={data}
        renderItem={({item}) => <Item title={item} />}
      />
    </SafeAreaView>
  );
};

export default CategoriesMenu;
