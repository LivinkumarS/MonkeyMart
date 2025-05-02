import React from "react";
import Hero from "../components/Hero";
import LatestCollections from "../components/LatestCollections";
import BestSellers from "../components/BestSellers";
import OurPolicies from "../components/OurPolicies";
import NewsLetter from "../components/NewsLetter";

export default function Home() {
  return (
    <div>
      <Hero />
      <LatestCollections />
      <BestSellers />
      <OurPolicies />
      <NewsLetter/>
    </div>
  );
}
