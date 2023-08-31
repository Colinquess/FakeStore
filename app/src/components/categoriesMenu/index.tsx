import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

import CategorieItem, {onCategorySelect} from './categorieItem';

const CategoriesMenu: React.FC<onCategorySelect> = (
  param: onCategorySelect,
) => {
  const [data, setData] = useState<String[]>([]);

  function getCategories(): void {
    fetch('https://fakestoreapi.com/products/categories')
      .then(resp => resp.json())
      .then(setData);
  }

  useEffect(getCategories, []);

  return (
    <FlatList
      horizontal={true}
      data={data}
      renderItem={({item}) => (
        <CategorieItem
          itemTitle={item}
          selectionCallback={param.selectionCallback}
        />
      )}
    />
  );
};

export default CategoriesMenu;
