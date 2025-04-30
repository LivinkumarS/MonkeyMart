import React from "react";
import Hero from "../components/Hero";
import LatestCollections from "../components/LatestCollections";
import BestSellers from "../components/BestSellers";

export default function Home() {
  return (
    <div>
      <Hero/>
      <LatestCollections/>
      <BestSellers/>
    </div>
  );
}
