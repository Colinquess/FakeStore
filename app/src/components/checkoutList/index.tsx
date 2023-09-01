import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';

import ShelfItem, {
  ItemProps,
  updateCartStorage,
  cartItem,
} from '../../common/shelfItem';
import {restoreStorage} from '../../common/storageDealers';

const CheckoutList: React.FC = () => {
  const [products, setProducts] = useState<ItemProps[]>([]);
  const [cart, setCart] = useState<cartItem[]>([]);

  function cartUpdater(item: cartItem, change: number) {
    updateCartStorage(item, change, cart, setCart);
  }

  useEffect(() => {
    let updatedProducts: ItemProps[] = [];
    let fetchPromises: any[] = [];

    cart
      .filter(item => item.qtdInCart > 0)
      .forEach(item => {
        if (products.findIndex(product => product.id === item.id) === -1) {
          fetchPromises.push(
            fetch(`https://fakestoreapi.com/products/${item.id}`).then(resp =>
              resp.json(),
            ),
          );
        }
      });

    if (fetchPromises.length) {
      Promise.all<ItemProps[]>(fetchPromises).then(fetches => {
        fetches.forEach(fetchedProducts => {
          updatedProducts.push(fetchedProducts);
        });
        setProducts(updatedProducts);
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  useEffect(() => {
    restoreStorage('cart', setCart);
  }, []);

  return cart.filter(item => item.qtdInCart > 0).length ? (
    products.length > 0 ? (
      <FlatList
        data={products}
        renderItem={({item}) => {
          return (
            <ShelfItem
              itemProps={item}
              changeCartCB={cartUpdater}
              cartItem={cart.find(value => value.id === item.id)!}
            />
          );
        }}
      />
    ) : (
      <Text style={styles.emptyList}>
        We are loding your cart, please wait.
      </Text>
    )
  ) : (
    <Text style={styles.emptyList}>
      It seems there is nothing to checkout. Yet!
    </Text>
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
