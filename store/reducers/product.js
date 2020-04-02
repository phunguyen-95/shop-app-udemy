import { PRODUCTS } from "../../data/dummy-product";

const initialState = {
  availableProducts: PRODUCTS.filter(prod => prod.ownerId === "u1"),
  userProducts: []
};

export default (state = initialState, action) => {
  return state;
};
