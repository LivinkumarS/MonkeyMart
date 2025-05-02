import React from "react";
import policy1 from "../assets/Home/OurPolicies/fastshipping.png";
import policy2 from "../assets/Home/OurPolicies/returnpolicy.png";
import policy3 from "../assets/Home/OurPolicies/customersupport.png";

export default function OurPolicies() {
  return (
    <div className="my-14 flex-col sm:flex-row flex gap-10 sm:gap-5 flex-wrap items-center justify-between">
      <div className="flex-1 flex items-center justify-center flex-col gap-1">
        <img src={policy1} className="w-[50px]" alt="" />
        <p className="text-black font-semibold text-sm text-center">
          Fast Shipping
        </p>
        <p className="text-gray-700 max-w-[250px] font-semibold text-xs text-center">
          We deliver your orders quickly with reliable shipping partners.
        </p>
      </div>
      <div className="flex-1 flex items-center justify-center flex-col gap-3">
        <img src={policy2} className="w-[50px]" alt="" />
        <p className="text-black font-semibold text-sm text-center">
          7 Days Return Policy
        </p>
        <p className="text-gray-700 max-w-[250px] font-semibold text-xs text-center">
          Return your purchase within 7 days, no questions asked.
        </p>
      </div>
      <div className="flex-1 flex items-center justify-center flex-col gap-3">
        <img src={policy3} className="w-[50px]" alt="" />
        <p className="text-black font-semibold text-sm text-center">
          24/7 Customer Support
        </p>
        <p className="text-gray-700 max-w-[250px] font-semibold text-xs text-center">
          Get instant help anytime through chat, call, or email.
        </p>
      </div>
    </div>
  );
}
