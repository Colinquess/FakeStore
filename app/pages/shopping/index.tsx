import React from 'react';
import {SafeAreaView, View} from 'react-native';

import CategoriesMenu from '../../components/categoriesMenu';
import ItemShelf from '../../components/itemShelf';

const Shopping = () => {
  return (
    <SafeAreaView>
      <View>
        <ItemShelf ListHeaderComponent={HeadComponent} />
      </View>
    </SafeAreaView>
  );
};

const HeadComponent = (selectionCallback: Function) => {
  return <CategoriesMenu selectionCallback={selectionCallback} />;
};

export default Shopping;
