import React from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import imageURL from "../../assets/images/tropica-glossostigma-elatinoides.jpg";
import Colors from "../../constants/Colors";
import { addToCard } from "../../store/actions/cart";

const ProductItem = props => {
  const viewDetail = () => {
    props.navigation.navigate("product-detail", {
      productId: props.id,
      name: props.title
    });
  };
  const dispatch = useDispatch();
  const seletorProduct = useSelector(state =>
    state.products.availableProducts.find(p => p.id === props.id)
  );
  return (
    <View style={styles.product}>
      <View style={styles.touchable}>
        <TouchableOpacity onPress={viewDetail} useForeground>
          <View style={styles.touchable}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={imageURL} />
            </View>
            <View style={styles.details}>
              <Text style={styles.title}>{props.title}</Text>
              <Text style={styles.price}>{props.price}</Text>
            </View>
            <View style={styles.actions}>
              <Button
                color={Colors.primary}
                title="View Detail"
                onPress={viewDetail}
              />
              <Button
                color={Colors.primary}
                title="To Cart"
                onPress={() => {
                  dispatch(addToCard(seletorProduct));
                }}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    shadowColor: "#888",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    backgroundColor: Colors.white,
    shadowRadius: 8,
    alignItems: "center",
    margin: 20,
    borderWidth: 1,
    borderRadius: 8,
    elevation: 5,
    height: 300
  },
  imageContainer: {
    width: "100%",
    height: "60%"
  },
  image: { width: "100%", height: 200 },
  price: {
    color: "#888",
    fontSize: 14
  },
  title: {
    fontSize: 14,
    marginTop: 12
  },
  details: {
    alignItems: "center",
    height: "15%"
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "25%",
    color: Colors.primary
  },
  touchable: {
    overflow: "hidden"
  }
});

export default ProductItem;
