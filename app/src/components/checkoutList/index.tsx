import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';

import ShelfItem, {
  ItemProps,
  updateCartStorage,
  cartItem,
} from '../../common/shelfItem';
import {restoreStorage} from '../../common/storageDealers';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CheckoutList: React.FC = () => {
  const [products, setProducts] = useState<ItemProps[]>([]);
  const [cart, setCart] = useState<cartItem[]>([]);

  const updateCart = (item: cartItem, change: number) => {
    updateCartStorage(item, change, cart ? cart : [], setCart);
  };

  const memoizedProductFetch = (id: number) => {
    return AsyncStorage.getItem(`product_${id}`).then(cachedProduct => {
      if (cachedProduct) {
        return JSON.parse(cachedProduct);
      } else {
        return fetch(`https://fakestoreapi.com/products/${id}`)
          .then(response => response.json())
          .then(product => {
            AsyncStorage.setItem(`product_${id}`, JSON.stringify(product));
            return product;
          });
      }
    });
  };

  useEffect(() => {
    const fetchProducts = () => {
      const fetchPromises = cart
        .filter(item => item.qtdInCart > 0)
        .map(item => memoizedProductFetch(item.id));

      Promise.all(fetchPromises).then(fetchedProducts => {
        const newProducts = fetchedProducts.flat();
        setProducts(newProducts);
      });
    };

    fetchProducts();
  }, [cart]);

  useEffect(() => {
    restoreStorage('cart', setCart);
  }, []);

  const renderCartItem = ({item}: {item: ItemProps}) => (
    <ShelfItem
      itemProps={item}
      changeCartCB={updateCart}
      cartItem={cart ? cart.find(value => value.id === item.id) : undefined}
    />
  );

  const renderEmptyList = () => (
    <Text style={styles.emptyList}>
      {cart && cart.filter(item => item.qtdInCart > 0).length
        ? 'We are loading your cart, please wait.'
        : 'It seems there is nothing to checkout. Yet!'}
    </Text>
  );

  return (
    <FlatList
      data={products}
      renderItem={renderCartItem}
      ListEmptyComponent={renderEmptyList}
    />
  );
};

const styles = StyleSheet.create({
  emptyList: {
    fontSize: 24,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    width: '100%',
    height: 100,
    backgroundColor: 'lightyellow',
  },
});

export default CheckoutList;
