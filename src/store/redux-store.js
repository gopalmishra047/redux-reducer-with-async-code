import { createStore } from 'redux';
import { TOGGGLE_CART } from '../actions/cart-actions';

const initialState = { items: 0, showCart: true };

const cartReducer = (state = initialState, action) => {
  if (action.type === TOGGGLE_CART) {
    return {
      items: state.items,
      showCart: !state.showCart
    };
  } else {
    return state;
  }
};

const store = createStore(cartReducer);

export default store;
