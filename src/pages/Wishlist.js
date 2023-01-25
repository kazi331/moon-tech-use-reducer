import React from "react";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductProvider";

const WishList = () => {

  const { state: { loading, wish, error } } = useProducts();

  return (
    <>
      {/* loading state and error  */}
      {
        (error || loading || wish.length < 1) && <div className="flex items-center justify-center min-h-[20vh]">
          {error && <h2 className="bg-red-500 max-w-lg text-white p-4 rounded-2xl text-center text-3xl">There's an error loading product</h2>}
          {loading && <h2 className="bg-indigo-500 max-w-lg text-white p-4 rounded-2xl text-center text-3xl">Getting products.... </h2>}
          {wish.length < 1 && <h2 className="bg-indigo-500 max-w-lg text-white p-4 rounded-2xl text-center text-3xl"> Nothing to show </h2>}
        </div>
      }

      {/* If no error found and have products  */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl gap-14 mx-auto my-10'>
        {wish?.map((product, i) => <ProductCard key={i} product={product} />)}
      </div>
    </>
  );
};

export default WishList;
