import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

export type ItemProps = {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
};

export type cartItem = {
  id: number;
  qtdInCart: number;
};

/**
 * Updates the cart storage with the added item and change value.
 *
 * @param {cartItem} addedItem - The item to be added to the cart.
 * @param {number} change - The change in quantity of the item.
 * @param {cartItem[]} cart - The current cart items.
 * @param {Function} setCart - The function to update the cart state.
 * @return {Promise<void>} A promise that resolves when the cart storage is updated.
 */
export function updateCartStorage(
  addedItem: cartItem,
  change: number,
  cart: cartItem[],
  setCart: Function,
): Promise<void> {
  const updatedCart = [...cart];
  const cartItemIndex = updatedCart.findIndex(item => item.id === addedItem.id);

  if (
    cartItemIndex > -1 &&
    updatedCart[cartItemIndex].qtdInCart !== undefined
  ) {
    updatedCart[cartItemIndex].qtdInCart += change;
  } else {
    addedItem.qtdInCart = change;
    updatedCart.push(addedItem);
  }

  return AsyncStorage.setItem('cart', JSON.stringify(updatedCart)).then(() => {
    setCart(updatedCart);
  });
}

type ShelfItemPropType = {
  itemProps: ItemProps;
  cartItem: cartItem | undefined;
  changeCartCB: Function;
};

const ShelfItem: React.FC<ShelfItemPropType> = ({
  itemProps,
  changeCartCB,
  cartItem,
}) => {
  const {image, title, description, price} = itemProps;

  function updateCart(value: number) {
    changeCartCB(itemProps, value);
  }

  const addToCartButton = (
    <Pressable onPress={() => updateCart(+1)} style={styles.button}>
      <Text style={styles.addCart}>
        Add to cart{' '}
        {cartItem && cartItem.qtdInCart > 0 ? `(${cartItem.qtdInCart})` : ''}
      </Text>
    </Pressable>
  );

  const editCartButtons = (
    <View style={styles.editContainer}>
      <Pressable onPress={() => updateCart(+1)} style={styles.editButton}>
        <Text style={styles.editCart}>+</Text>
      </Pressable>
      <Text style={styles.editCart}>{cartItem ? cartItem.qtdInCart : ''}</Text>
      <Pressable onPress={() => updateCart(-1)} style={styles.editButton}>
        <Text style={styles.editCart}>-</Text>
      </Pressable>
      <Pressable
        onPress={() => updateCart(-cartItem!.qtdInCart)}
        style={styles.removeButton}>
        <Text style={styles.removeFromCart}>Remove All</Text>
      </Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <View style={styles.bodyContent}>
        <Image
          source={{uri: image}}
          resizeMode="contain"
          style={styles.cardItemImagePlace}
        />
        <View style={styles.cardBody}>
          <View style={styles.group2}>
            <Text style={styles.subtitleStyle}>{description}</Text>
          </View>
          <View style={styles.group}>
            <Text style={styles.price}>Price: $ {price.toFixed(2)}</Text>
            {!cartItem || (cartItem && cartItem.qtdInCart === 0)
              ? addToCartButton
              : editCartButtons}
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
    textAlignVertical: 'center',
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
  editButton: {
    borderRadius: 30,
    height: 15,
    width: 15,
    backgroundColor: 'lightblue',
  },
  addCart: {
    height: 15,
    width: 70,
    fontFamily: 'roboto-regular',
    fontSize: 12,
    color: '#000',
    lineHeight: 15,
    letterSpacing: 0,
    textAlign: 'center',
    flex: 1,
    alignSelf: 'center',
  },
  editCart: {
    height: 15,
    width: 15,
    fontFamily: 'roboto-regular',
    fontSize: 12,
    color: '#000',
    lineHeight: 15,
    letterSpacing: 0,
    textAlign: 'center',
    flex: 1,
    alignSelf: 'center',
  },
  editContainer: {
    width: 155,
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  removeFromCart: {
    height: 15,
    width: 120,
    fontFamily: 'roboto-regular',
    fontSize: 12,
    color: '#000',
    lineHeight: 15,
    letterSpacing: 0,
    textAlign: 'center',
    flex: 1,
    alignSelf: 'center',
  },
  removeButton: {
    borderRadius: 30,
    height: 15,
    width: 80,
    backgroundColor: '#ed736b',
    marginLeft: 15,
  },
});

export default ShelfItem;
