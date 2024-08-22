import { createContext, useReducer } from 'react';

export const Store = createContext();

const initialState = {
  fullBox: false,
  userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null,
  paymentMethod: localStorage.getItem('paymentMethod')
    ? localStorage.getItem('paymentMethod')
    : '',
  cart: {
    shippingAddress: localStorage.getItem('shippingAddress')
      ? JSON.parse(localStorage.getItem('shippingAddress'))
      : { location: {} },
    itemsInCart: localStorage.getItem('itemsInCart')
      ? JSON.parse(localStorage.getItem('itemsInCart'))
      : [],
  },
};
function reducer(state, action) {
  switch (action.type) {
    case 'SET_FULLBOX_ON':
      return { ...state, fullBox: true };
    case 'SET_FULLBOX_OFF':
      return { ...state, fullBox: false };
    case 'CART_ADD_ITEM':
      //add tp cart
      const newItem = action.payload;
      const itemExists = state.cart.itemsInCart.find(
        (item) => item._id === newItem._id
      );
      const itemsInCart = itemExists
        ? state.cart.itemsInCart.map((item) =>
            item._id === itemExists._id ? newItem : item
          )
        : [...state.cart.itemsInCart, newItem];
      localStorage.setItem('itemsInCart', JSON.stringify(itemsInCart));
      return { ...state, cart: { ...state.cart, itemsInCart } };
    case 'CART_REMOVE_ITEM': {
      const itemsInCart = state.cart.itemsInCart.filter(
        (item) => item._id !== action.payload._id
      );
      localStorage.setItem('itemsInCart', JSON.stringify(itemsInCart));
      return { ...state, cart: { ...state.cart, itemsInCart } };
    }
    case 'CART_CLEAR':
      return { ...state, cart: { ...state.cart, itemsInCart: [] } };
    case 'USER_SIGNIN':
      return { ...state, userInfo: action.payload };
    case 'USER_SIGNOUT':
      return {
        ...state,
        userInfo: null,
        cart: {
          itemsInCart: [],
          shippingAddress: {},
          paymentMethod: '',
        },
      };
    case 'SAVE_SHIPPING_ADDRESS':
      return {
        ...state,
        cart: {
          ...state.cart,
          shippingAddress: action.payload,
        },
      };
    case 'SAVE_SHIPPING_ADDRESS_MAP_LOCATION':
      return {
        ...state,
        cart: {
          ...state.cart,
          shippingAddress: {
            ...state.cart.shippingAddress,
            location: action.payload,
          },
        },
      };

    case 'SAVE_PAYMENT_METHOD':
      return {
        ...state,
        cart: { ...state.cart, paymentMethod: action.payload },
      };
    default:
      return state;
  }
}
export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
