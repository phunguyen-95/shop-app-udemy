import { ADD_TO_CARD } from "../actions/cart";
import CartItem from "../../models/CartItem";
const initialState = {
  items: {},
  totalAmount: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CARD:
      const {
        payload: { id, price, title }
      } = action;
      let updatedItems;
      if (state.items[id]) {
        updatedItems = new CartItem(
          state.items[id].quantity + 1,
          price,
          title,
          state.items[id].sum + price
        );
      } else {
        updatedItems = new CartItem(1, price, title, price);
      }
      console.log("--", updatedItems, action);
      return {
        ...state,
        items: {
          ...state.items,
          [id]: updatedItems
        },
        totalAmount: state.totalAmount + price
      };
    default:
      return state;
  }
};
