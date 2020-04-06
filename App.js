import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

// import { Ionicons } from "@expo/vector-icons";

import productReducer from "./store/reducers/product";
import cardReducer from "./store/reducers/cart";
import ProductsNavigator from "./navigation/ShopNavigation";

const rootReducers = combineReducers({
  products: productReducer,
  cart: cardReducer
});

const store = createStore(rootReducers, composeWithDevTools());

const fetchFont = () =>
  Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
  });

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  // if (!dataLoaded) {
  //   return (
  //     <AppLoading
  //       startAsync={() => {
  //         fetchFont();
  //       }}
  //       onFinish={() => {
  //         setDataLoaded(true);
  //       }}
  //       onError={() => {
  //         console.log("err", dataLoaded);
  //       }}
  //     />
  //   );
  // } else {
  return (
    <Provider store={store} style={styles.container}>
      <ProductsNavigator />
    </Provider>
  );
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
