import React from "react";
import { useSelector } from "react-redux";
import { Text, View, FlatList } from "react-native";

const ProductOverviewScreen = props => {
  const products = useSelector(state => state.products.availableProducts);
  return (
    <FlatList
      data={products}
      keyExtractor={(item, idx) => idx.toString()}
      renderItem={itemData => <Text>{itemData.item.title}</Text>}
    />
  );
};
export default ProductOverviewScreen;
