import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

import ShelfItem, {ItemProps} from './shelfItem';

type ItemShelfPropsType = {
  ListHeaderComponent: Function;
};

const ItemShelf: React.FC<ItemShelfPropsType> = (props: ItemShelfPropsType) => {
  const [products, setProducts] = useState<ItemProps[]>([]);

  function getProducts(category?: String) {
    fetch(
      `https://fakestoreapi.com/products${
        category ? `/category/${category}` : ''
      }`,
    )
      .then(resp => resp.json())
      .then(setProducts);
  }

  useEffect(getProducts, []);

  return (
    <FlatList
      ListHeaderComponent={props.ListHeaderComponent(getProducts)}
      data={products}
      renderItem={({item}) => <ShelfItem itemProps={item} />}
    />
  );
};

export default ItemShelf;
