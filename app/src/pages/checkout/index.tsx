import React from 'react';
import {SafeAreaView, View} from 'react-native';

import CategoriesMenu from '../../components/categoriesMenu';
import ItemShelf from '../../components/itemShelf';

const Checkout: React.FC = () => {
  return (
    <SafeAreaView>
      <View>
        <ItemShelf ListHeaderComponent={HeadComponent} />
      </View>
    </SafeAreaView>
  );
};

const HeadComponent = (selectionCallback: Function): React.JSX.Element => {
  return <CategoriesMenu selectionCallback={selectionCallback} />;
};

export default Checkout;
