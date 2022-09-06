import {FlatList} from 'react-native';
import React from 'react';
import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTile from '../components/navigation/CategoryGridTile';

const CategoriesScreen = ({navigation}: any) => {
  const renderCategoryItem = (itemData: any) => {
    const pressHandler = (title: string) => {
      navigation.navigate(title);
    };

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={() => pressHandler(itemData.item.title)}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={item => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
