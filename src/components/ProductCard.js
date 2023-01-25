import React from "react";
import { BiListPlus } from "react-icons/bi";
import { useProducts } from "../context/ProductProvider";
import { actionTypes } from "../state/productState/actionTypes";

const ProductCard = ({ product }) => {
  const { dispatch, state: { cart, wish } } = useProducts();
  // check if the item is already exist on cart
  const exist_on_cart = cart.find(item => item._id === product._id)
  const exist_on_wish = wish.find(item => item._id === product._id)
  return (
    <div className='shadow-lg rounded-3xl border  p-3 flex flex-col text-indigo-900' key={product._id}>
      <div className='h-52 w-52 mx-auto'>
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className='font-bold text-center'>{product.model}</h1>
      <p className='text-center font-semibold mb-3'>Rating: {product.rating}</p>
      <div className=' flex-1'>
        <ul className='space-y-2'>
          {product.keyFeature.map((feature, i) => {
            return <li key={i} className='text-sm '>{feature}</li>;
          })}
        </ul>
      </div>
      <div className='flex gap-2 mt-5'>
        {exist_on_cart ?
          <button
            onClick={() => dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: product._id })}
            className='bg-red-500 rounded-full py-1 px-2 flex-1 text-white text-bold'>
            Remove from cart
          </button>
          : <button
            onClick={() => dispatch({ type: actionTypes.ADD_TO_CART, payload: product })}
            className='bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold'>
            Add to cart
          </button>}

        { exist_on_wish ?
          <button
          onClick={() => dispatch({ type: actionTypes.REMOVE_FROM_WISH, payload: product._id })}
          title='Remove from wishlist' className='bg-red-500  py-1 px-2 rounded-full'>
          <BiListPlus className='text-white' />
        </button>
          :
          <button
          onClick={() => dispatch({ type: actionTypes.ADD_TO_WISH, payload: product })}
          title='Add to wishlist' className='bg-indigo-500  py-1 px-2 rounded-full'>
          <BiListPlus className='text-white' />
        </button>
        }
      </div>
    </div>
  );
};

export default ProductCard;
