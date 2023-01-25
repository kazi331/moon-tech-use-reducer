import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { actionTypes } from '../state/productState/actionTypes';
import { initailState, productReducer } from '../state/productState/productState';

const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({ children }) => {
  // load data using useReducer
  const [state, dispatch] = useReducer(productReducer, initailState);
  console.log(state)

  useEffect(() => {
    dispatch({ type: actionTypes.FETCHING_START })
    fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => dispatch({ type: actionTypes.FETCHING_SUCCESS, payload: data }))
      .catch(err => dispatch({ type: actionTypes.FETCHING_ERROR, payload: err }))
  }, [])

  return (
    <PRODUCT_CONTEXT.Provider value={state}>
      {children}
    </PRODUCT_CONTEXT.Provider>
  )
}

// custom hook for loading data
export const useProducts = () => {
  const context = useContext(PRODUCT_CONTEXT);
  return context;
}

export default ProductProvider