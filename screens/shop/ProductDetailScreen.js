import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Button
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import imageURL from "../../assets/images/tropica-glossostigma-elatinoides.jpg";
import Colors from "../../constants/Colors";
const ProductDetailScreen = props => {
  const { productId } = props.route.params;
  const product = useSelector(state =>
    state.products.availableProducts.find(p => p.id === productId)
  );
  const dispatch = useDispatch();

  return (
    <ScrollView>
      <Image style={styles.image} source={imageURL} />
      <View style={styles.actions}>
        <Button
          style={styles.addToCard}
          color={Colors.primary}
          title="Add to cart"
          onPress={() => {
            dispatch(addToCard(product));
          }}
        />
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.price}>{product.price}</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300
  },
  addToCard: {
    paddingTop: 18
  },
  actions: {
    marginVertical: 12
  },
  infoBox: {
    alignItems: "center"
  },
  price: {
    fontSize: 20,
    color: "#888",
    marginVertical: 12
  },
  description: {
    fontSize: 14
  }
});

export default ProductDetailScreen;
