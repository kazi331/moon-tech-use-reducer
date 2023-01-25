import { actionTypes } from "./actionTypes";
export const initailState = {
  loading: false,
  products: [],
  error: null
}
export const productReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.FETCHING_START:
      return { ...state, loading: true, error: null }
    case actionTypes.FETCHING_SUCCESS:
      return { ...state, loading: false, error: null, products: action.payload }
    case actionTypes.FETCHING_ERROR:
      return { ...state, loading: false, error: action.payload }
    default:
      return state;
  }
}