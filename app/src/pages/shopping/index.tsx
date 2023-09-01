import React from 'react';
import {Button, SafeAreaView, StyleSheet, View} from 'react-native';

import CategoriesMenu from '../../components/categoriesMenu';
import ItemShelf from '../../components/itemShelf';

interface Props {
  navigation: any;
}

const Shopping: React.FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.flexView}>
      <View style={styles.flexView}>
        <View style={styles.container}>
          <Button
            title="Go to Checkout"
            onPress={() => {
              navigation.navigate('Checkout');
            }}
          />
        </View>
        <ItemShelf ListHeaderComponent={HeadComponent} />
      </View>
    </SafeAreaView>
  );
};

const HeadComponent = (selectionCallback: Function): React.JSX.Element => {
  return <CategoriesMenu selectionCallback={selectionCallback} />;
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

export default Shopping;
