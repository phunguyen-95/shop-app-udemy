import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import productReducer from "./store/reducers/product";
import ProductOverviewScreen from "./screens/shop/ProductOverviewScreen";

const rootReducers = combineReducers({
  products: productReducer
});

const store = createStore(rootReducers);
export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <ProductOverviewScreen />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
