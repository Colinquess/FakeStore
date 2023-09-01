import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

import ShelfItem, {
  ItemProps,
  updateCartStorage,
  cartItem,
} from '../../common/shelfItem';
import {restoreStorage} from '../../common/storageDealers';

type ItemShelfPropsType = {
  ListHeaderComponent: Function;
};

const ItemShelf: React.FC<ItemShelfPropsType> = (props: ItemShelfPropsType) => {
  const [products, setProducts] = useState<ItemProps[]>([]);
  const [cart, setCart] = useState<cartItem[]>([]);

  function getProducts(category?: String) {
    return new Promise<void>((Resolve, Reject) => {
      fetch(
        `https://fakestoreapi.com/products${
          category ? `/category/${category}` : ''
        }`,
      )
        .then(resp => resp.json())
        .then(respJson => {
          setProducts(respJson);
          Resolve();
        })
        .catch(Reject);
    });
  }

  function cartUpdater(item: cartItem, change: number) {
    updateCartStorage(item, change, cart, setCart);
  }

  useEffect(() => {
    getProducts();
    restoreStorage('cart', setCart);
  }, []);

  return (
    <FlatList
      ListHeaderComponent={props.ListHeaderComponent(getProducts)}
      data={products}
      renderItem={({item}) => (
        <ShelfItem
          itemProps={item}
          changeCartCB={cartUpdater}
          cartItem={cart.find(value => value.id === item.id)!}
        />
      )}
    />
  );
};

export default ItemShelf;
