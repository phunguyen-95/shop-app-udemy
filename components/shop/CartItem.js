import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import Colors from "../../constants/Colors";

const CartItem = props => {
  return (
    <View style={styles.cartItem}>
      <View style={styles.itemData}>
        <Text style={styles.quantity}>{props.quantity}</Text>
        <Text style={styles.title}> {props.productTitle}</Text>
      </View>
      <View style={styles.itemData}>
        <Text style={styles.amount}>{props.sum}</Text>
        <TouchableOpacity>
          <Text onPress={() => {}} style={styles.action}>
            Delete
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  itemData: { flexDirection: "row", alignItems: "center" },
  quantity: { color: Colors.primary },
  title: { fontWeight: "bold" },
  amount: { fontWeight: "bold", marginRight: 5 },
  action: {
    color: Colors.primary
  }
});

export default CartItem;
