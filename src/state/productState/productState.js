import { actionTypes } from "./actionTypes";
export const initailState = {
  loading: false,
  products: [],
  error: null,
  cart: [],
  wish: [],
  msg: "",
}
export const productReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.FETCHING_START:
      return { ...state, loading: true, error: null }
    case actionTypes.FETCHING_SUCCESS:
      return { ...state, loading: false, error: null, products: action.payload }
    case actionTypes.FETCHING_ERROR:
      return { ...state, loading: false, error: action.payload }
    case actionTypes.ADD_TO_CART:
      const exist_on_cart = state.cart.find(item => item._id === action.payload._id);
      if (exist_on_cart) {
        return { ...state, msg: "Item already exist on cart" }
      } else {
        return { ...state, msg: "", cart: [...state.cart, action.payload] }
      }
    case actionTypes.ADD_TO_WISH:
      const exist_on_wish = state.wish.find(item => item._id === action.payload._id)
      if (exist_on_wish) {
        return { ...state, msg: "Item already exist on wishlist" }
      } else {
        return { ...state, msg: "", wish: [...state.wish, action.payload] }
      }
    case actionTypes.REMOVE_FROM_CART:
      return { ...state, cart: state.cart.filter(item => item._id !== action.payload) }
    case actionTypes.REMOVE_FROM_WISH:
      return { ...state, wish: state.wish.filter(item => item._id !== action.payload) }
    default:
      return state;
  }
}