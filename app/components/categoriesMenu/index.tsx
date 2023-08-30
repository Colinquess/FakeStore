import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

import MenuItem, {onCategorySelect} from './categorieItem';

const CategoriesMenu: React.FC<onCategorySelect> = (
  param: onCategorySelect,
) => {
  const [data, setData] = useState([]);

  function getCategories() {
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
        <MenuItem
          itemTitle={item}
          selectionCallback={param.selectionCallback}
        />
      )}
    />
  );
};

export default CategoriesMenu;
