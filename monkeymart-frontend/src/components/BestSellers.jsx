import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Titile";
import ProductItem from "./ProductItem";

export default function BestSellers() {
  const { products } = useContext(ShopContext);
  const [bestSellerList, setBestSellerList] = useState([]);

  useEffect(() => {
    setBestSellerList(
      products
        .filter((ele, ind) => {
          return ele.bestseller;
        })
        .slice(0, 5)
    );
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"BEST "} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm text-gray-600">
          Discover our most popular picks loved by our customers! From stylish
          shirts to comfortable trousers, these best sellers combine top-notch
          quality with unbeatable style
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSellerList.map((product, ind) => (
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
