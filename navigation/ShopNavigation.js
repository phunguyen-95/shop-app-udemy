import React from "react";
import { View, Button, Text, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ProductOverViewScreen from "../screens/shop/ProductOverviewScreen";
import Colors from "../constants/Colors";
import ProductDetailScreen from "../screens/shop/ProductDetailScreen";
import CartScreen from "../screens/shop/CartScreen";

const defaultOptions = {
  title: "Home",
  headerStyle: {
    backgroundColor:
      Platform.OS === "Android" ? Colors.primary : Colors.lightGreen
  },
  headerTintColor: Colors.white,
  headerTitleStyle: {
    fontWeight: "bold"
  }
};

const ProductsNavigator = props => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home" screenOptions={defaultOptions}>
        <Stack.Screen
          name="home"
          options={{
            title: "Product Overview"
          }}
          component={ProductOverViewScreen}
        />
        <Stack.Screen
          name="product-detail"
          options={({ route }) => ({ title: route.params.name })}
          component={ProductDetailScreen}
        />
        <Stack.Screen
          name="cart"
          options={() => ({ title: "Cart" })}
          component={CartScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ProductsNavigator;
