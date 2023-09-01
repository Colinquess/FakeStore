import React from 'react';
import {Button, SafeAreaView, StyleSheet, View} from 'react-native';

import CheckoutList from '../../components/checkoutList';

interface Props {
  navigation: any;
}

const Checkout: React.FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.flexView}>
      <View style={styles.flexView}>
        <View style={styles.container}>
          <Button
            title="Back to Shopping"
            onPress={() => {
              navigation.navigate('Shopping');
            }}
          />
        </View>
        <CheckoutList />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    width: '100%',
    height: 100,
    backgroundColor: 'blue',
  },
  flexView: {
    flex: 1,
  },
});

export default Checkout;
