import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Titile from "../components/Titile";
import { CiTrash } from "react-icons/ci";

export default function Cart() {
  const { products, currency, cartItems } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (let items in cartItems) {
      for (let item in cartItems[items]) {
        tempData.push({
          _id: items,
          size: item,
          quantity: cartItems[items][item],
        });
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Titile text1={"YOUR"} text2={"CART"} />
      </div>
      <div>
        {cartData.map((item, ind) => {
          console.log(products);

          const productData = products.find((product) => {
            return product._id === item._id;
          });

          return (
            <div
              key={ind}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_2fr] items-center gap-4"
            >
              <div className="flex items-start gap-6">
                <img src={productData.image[0]} className="w-16 sm:w-20" />
                <div>
                  <p className="text-xs sm:text-sm font-medium">
                    {productData.name}
                  </p>
                  <div className="flex gap-5 items-center mt-2">
                    <p>
                      {currency}
                      {productData.price}
                    </p>
                    <p className="px-2 sm:px-3 sm:py-1 border bg-gray-200">{item.size}</p>
                  </div>
                </div>

              </div>
                <input className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1" type="number" min={1} defaultValue={1} />

                <CiTrash className=" cursor-pointer text-2xl"/>
            </div>
          );
        })}
      </div>
    </div>
  );
}
