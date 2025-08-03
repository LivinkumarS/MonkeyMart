import React, { useContext, useState } from "react";
import Titile from "../components/Titile";
import CartTotal from "../components/CartTotal";
import razorpayImg from "../assets/PlaceOrder/razorpay.png";
import stripeImg from "../assets/PlaceOrder/stripe.png";
import { ShopContext } from "../context/ShopContext";

export default function PlaceOrder() {
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const { navigate } = useContext(ShopContext);

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* Left Side */}

      <div className="flex flex-col gap-4 w-full max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Titile text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>

        <div className="flex gap-3">
          <input
            type="text"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="First name"
          />
          <input
            type="text"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="Last name"
          />
        </div>
        <input
          type="email"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          placeholder="Email Address"
        />
        <input
          type="text"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          placeholder="Street"
        />
        <div className="flex gap-3">
          <input
            type="text"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="City"
          />
          <input
            type="text"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="District"
          />
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="State"
          />
          <input
            type="number"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            placeholder="Pincode"
          />
        </div>
        <input
          type="text"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          placeholder="Country"
        />
        <input
          type="number"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          placeholder="Phone"
        />
      </div>

      {/* Right side */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Titile text1={"PAYMENT"} text2={"METHOD"} />
          <div className="flex flex-col gap-3 lg:flex-row">
            <div
              onClick={() => {
                setPaymentMethod("razorpay");
              }}
              className={`flex items-center gap-3 border p-2 px-3 cursor-pointer ${
                paymentMethod === "razorpay" ? "shadow-md shadow-green-400" : ""
              }`}
            >
              <p
                className={`h-3.5 min-w-3.5 border rounded-full ${
                  paymentMethod === "razorpay" ? "bg-green-500" : ""
                }`}
              ></p>
              <img src={razorpayImg} className="h-5 mx-4" />
            </div>
            <div
              onClick={() => {
                setPaymentMethod("stripe");
              }}
              className={`flex items-center gap-3 border p-2 px-3 cursor-pointer ${
                paymentMethod === "stripe" ? "shadow-md shadow-green-400" : ""
              }`}
            >
              <p
                className={`h-3.5 min-w-3.5 border rounded-full ${
                  paymentMethod === "stripe" ? "bg-green-500" : ""
                }`}
              ></p>
              <img src={stripeImg} className="h-5 mx-4" />
            </div>
            <div
              onClick={() => {
                setPaymentMethod("cod");
              }}
              className={`flex items-center gap-3 border p-2 px-3 cursor-pointer ${
                paymentMethod === "cod" ? "shadow-md shadow-green-400" : ""
              }`}
            >
              <p
                className={`h-3.5 min-w-3.5 border rounded-full ${
                  paymentMethod === "cod" ? "bg-green-500" : ""
                }`}
              ></p>
              <p className="text-sm text-gray-500 font-semibold mx-4">
                CASH ON DELIVERY
              </p>
            </div>
          </div>

          <div className="w-full text-end mt-8">
            <button
              onClick={() => {
                navigate("/orders");
              }}
              className="bg-black text-white px-16 py-3 text-sm"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
