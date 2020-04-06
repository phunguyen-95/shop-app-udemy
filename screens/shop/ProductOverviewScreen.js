import React from "react";
import { useSelector } from "react-redux";
import { FlatList, StyleSheet, Button } from "react-native";
import ProductItem from "./ProductItem";

const ProductOverviewScreen = props => {
  const products = useSelector(state => state.products.availableProducts);

  props.navigation.setOptions({
    headerTitle: "All products",
    headerRight: () => (
      <Button title="cart" onPress={() => props.navigation.navigate("cart")} />
    )
  });

  return (
    <FlatList
      data={products}
      keyExtractor={(item, idx) => idx.toString()}
      renderItem={({ item }) => (
        <ProductItem
          navigation={props.navigation}
          title={item.title}
          price={item.price}
          imageUrl={item.imageUrl}
          id={item.id}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({});
export default ProductOverviewScreen;
