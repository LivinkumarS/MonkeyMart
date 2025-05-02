import React, { useState } from "react";

export default function NewsLetter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="my-10 sm:my-14 flex flex-col items-center justify-center gap-5">
      <h2 className="text-2xl text-center font-bold">
        Subscribe now & get 10% off
      </h2>
      <p className="text-sm text-center font-semibold text-gray-600">
        Don't miss out on exclusive deals, fresh arrivals, and insider perks —
        subscribe today and enjoy instant savings on your order!
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex items-stretch justify-center gap-0 w-full max-w-[600px] border-gray-700 border-solid border-[.5px]"
      >
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="email"
          className="flex-1 w-full p-2 sm:p-4 placeholder:text-sm placeholder:text-gray-500 placeholder:font-semibold outline-none"
          placeholder="Enter Your Email"
        />
        <button type="submit" className="bg-black text-white text-xs sm:text-sm px-2 sm:px-4">
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
}
