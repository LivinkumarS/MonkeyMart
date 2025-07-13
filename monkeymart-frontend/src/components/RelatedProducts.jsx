import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Titile from "./Titile.jsx";
import ProductItem from "./ProductItem.jsx"

export default function RelatedProducts({ category, subcategory }) {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      setRelated(
        products
          .filter((item) => {
            return item.category === category;
          })
          .filter((item) => {
            return item.subCategory === subcategory;
          })
          .slice(0, 5)
      );
    }
  }, [products]);

  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Titile text1={"Related"} text2={"Items"} />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 gap-y-6">
        {related.map((item,ind)=>(
            <ProductItem key={ind} id={item._id} name={item.name} price={item.price} image={item.image}/>
        ))}
      </div>
    </div>
  );
}
