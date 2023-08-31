import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

import ShelfItem, {ItemProps} from './shelfItem';
import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV();

type ItemShelfPropsType = {
  ListHeaderComponent: Function;
};

const ItemShelf: React.FC<ItemShelfPropsType> = (props: ItemShelfPropsType) => {
  const [products, setProducts] = useState<ItemProps[]>([]);
  const [cart, setCart] = useState<ItemProps[]>([]);

  if (storage.contains('cart')) {
    setCart(JSON.parse(storage.getString('cart')!));
  }

  function getProducts(category?: String): void {
    fetch(
      `https://fakestoreapi.com/products${
        category ? `/category/${category}` : ''
      }`,
    )
      .then(resp => resp.json())
      .then(setProducts);
  }

  function updateCartStorage(cartItem: any, change: number): void {
    let updatedCart = [...cart]; // Rebuild to avoid JS's memory pointer
    let cartItemIndex = updatedCart.findIndex(cartItem);

    if (
      cartItemIndex &&
      cartItemIndex > 0 &&
      updatedCart[cartItemIndex].qtdInCart // Is optional, so must be defined
    ) {
      updatedCart[cartItemIndex].qtdInCart! += change;
    } else {
      updatedCart.push(cartItem);
      updatedCart[updatedCart.length - 1].qtdInCart = change; // Allways 1!? tbt
    }

    setCart(updatedCart);

    storage.set('cart', JSON.stringify(cart));
  }

  useEffect(getProducts, []);

  return (
    <FlatList
      ListHeaderComponent={props.ListHeaderComponent(getProducts)}
      data={products}
      renderItem={({item}) => (
        <ShelfItem itemProps={item} changeCartCB={updateCartStorage} />
      )}
    />
  );
};

export default ItemShelf;
