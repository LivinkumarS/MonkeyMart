import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Titile from "./Titile";
import ProductItem from "./ProductItem";

export default function LatestCollections() {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      setLatestProducts(products.slice(0, 10));
    }
  }, []);

  return (
    <div className="my-5 md:my-10">
      <div className="text-center py-8 text-xl md:text-3xl">
        <Titile text1={"LATEST "} text2={"COLLECTIONS"} />
        <p className="text-gray-700 text-sm text-center">
          Outfit your ambition with our latest arrivals — styles made to move,
          made to impress.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((product, ind) => (
          <ProductItem
            id={product._id}
            key={ind}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}
