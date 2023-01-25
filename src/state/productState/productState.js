import { actionTypes } from "./actionTypes";
export const initailState = {
  loading: false,
  products: [],
  error: null,
  cart: [],
  wish: [],
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
      return { ...state, cart: [...state.cart, action.payload] }
      case actionTypes.ADD_TO_WISH:
        return { ...state, wish: [...state.wish, action.payload] }
    case actionTypes.REMOVE_FROM_CART:
      return { ...state, cart: state.cart.filter(item => item._id !== action.payload) }
    default:
      return state;
  }
}