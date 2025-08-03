import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Titile from "../components/Titile";
import { CiTrash } from "react-icons/ci";
import CartTotal from "../components/CartTotal";
import { toast } from "sonner";

export default function Cart() {
  const { products, currency, cartItems, updateQuantity, navigate } =
    useContext(ShopContext);

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
        {cartData.length > 0 ? (
          cartData.map((item, ind) => {
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
                      <p className="px-2 sm:px-3 sm:py-1 border bg-gray-200">
                        {item.size}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col-reverse sm:flex-row items-center gap-2">
                  <button
                    className="px-3 sm:py-1 bg-gray-200 rounded"
                    onClick={() => {
                      if (item.quantity > 1) {
                        updateQuantity(item._id, item.size, item.quantity - 1);
                      }
                    }}
                  >
                    −
                  </button>

                  <input
                    className="w-10 text-center border px-0 py-0"
                    type="number"
                    value={item.quantity}
                    readOnly
                  />

                  <button
                    className="px-3 sm:py-1 bg-gray-200 rounded"
                    onClick={() => {
                      updateQuantity(item._id, item.size, item.quantity + 1);
                    }}
                  >
                    +
                  </button>
                </div>

                <CiTrash
                  onClick={() => {
                    toast.warning(`${productData.name} is removed!`);
                    updateQuantity(item._id, item.size, 0);
                  }}
                  className=" cursor-pointer text-2xl"
                />
              </div>
            );
          })
        ) : (
          <p className="text-2xl">Cart is Empty😔</p>
        )}
      </div>

      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
        </div>
      </div>

      <div className="w-full text-end mt-8">
        <button
          onClick={() => navigate("/place-order")}
          className="bg-black text-white px-16 py-3 text-sm"
        >
          PLACE ORDER
        </button>
      </div>
    </div>
  );
}
