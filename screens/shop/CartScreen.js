import React from "react";
import { FlatList, View, Text, StyleSheet, Button } from "react-native";
import { useSelector } from "react-redux";
import Colors from "../../constants/Colors";
import CartItem from "../../components/shop/CartItem";

const CartScreen = props => {
  const totalAmount = useSelector(state => state.cart.totalAmount);
  const cartItem = useSelector(state =>
    Object.keys(state.cart.items).map(e => ({
      ...state.cart.items[e],
      key: `${e}${Math.random().toFixed(2)}`
    }))
  );
  console.log("cartItem", cartItem);
  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <Text>
          Total: <Text style={styles.amount}> {totalAmount.toFixed(2)}</Text>
        </Text>
        <Button title="Order Now" disabled={(cartItem || []).length < 1} />
      </View>
      <View>
        <FlatList
          data={cartItem}
          keyExtractor={item => item.key}
          renderItem={({ item }) => <CartItem {...item} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    margin: 20
  },
  summary: {
    shadowColor: "#888",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    backgroundColor: Colors.white,
    shadowRadius: 12,
    borderWidth: 1,
    borderRadius: 8,
    elevation: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    padding: 10
  },
  summaryText: {
    fontSize: 18
  },
  amount: {
    color: Colors.accent
  }
});

export default CartScreen;
