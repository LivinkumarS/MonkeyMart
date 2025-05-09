import React, { useContext, useEffect, useRef, useState } from "react";
import Titile from "../components/Titile";
import { ShopContext } from "../context/ShopContext";
import { FaChevronUp, FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

import ProductItem from "../components/ProductItem";

export default function Collection() {
  const { products, search, setSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [collectionList, setCollectionList] = useState([]);

  const [category, setCategory] = useState([]);
  const [type, setType] = useState([]);
  const [sortOption, setSortOption] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

  const searchInpRef = useRef(null);

  useEffect(() => {
    if (search) {
      searchInpRef.current.focus();
    }
  }, [search]);

  useEffect(() => {
    let filtered = products.filter((pro) => {
      const cat = category.length ? category.includes(pro.category) : true;
      const sub = type.length ? type.includes(pro.subCategory) : true;
      return cat && sub;
    });

    if (searchTerm) {
      const regex = new RegExp(searchTerm, "i");
      filtered = filtered.filter(
        (pro) =>
          regex.test(pro.name) ||
          regex.test(pro.category) ||
          regex.test(pro.subCategory)
      );
    }

    if (sortOption === "LowtoHigh") {
      filtered = filtered.sort((a, b) => a.price - b.price);
    }

    if (sortOption === "HightoLow") {
      filtered = filtered.sort((a, b) => b.price - a.price);
    }

    setCollectionList(filtered);
  }, [products, category, type, sortOption, searchTerm]);

  const handleCategoryChange = (e) => {
    setCategory((prev) => {
      return prev.includes(e.target.value)
        ? prev.filter((ele, ind) => {
            return ele !== e.target.value;
          })
        : [...prev, e.target.value];
    });
  };

  const handleTypeChange = (e) => {
    setType((prev) => {
      return prev.includes(e.target.value)
        ? prev.filter((ele, ind) => {
            return ele !== e.target.value;
          })
        : [...prev, e.target.value];
    });
  };

  return (
    <section>
      {search && (
        <div className="flex my-3 sm:my-5 mx-auto items-center justify-center gap-2">
          <div className="flex gap-0 items-center w-full max-w-[500px] justify-center rounded-lg overflow-hidden border border-gray-700 px-4">
            <input
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
              ref={searchInpRef}
              type="text"
              className="flex-1 border-none p-2 outline-none w-full"
              placeholder="Search term"
            />
            <FaSearch className="text-md text-gray-600" />
          </div>

          <IoMdClose
            onClick={() => {
              setSearch(false);
              setSearchTerm("");
            }}
            className="text-lg sm:text-xl text-gray-700 cursor-pointer font-bold"
          />
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-start justify-center">
        <div className=" p-2 sm:p-4 w-full sm:w-fit md:min-w-[250px]">
          <h2 className="text-xl font-semibold mb-4 flex items-center justify-start gap-1">
            FILTERS
            <span
              onClick={() => setShowFilter((prev) => !prev)}
              className={`sm:hidden ${
                showFilter && "rotate-180"
              } transition-all cursor-pointer text-sm`}
            >
              <FaChevronUp />
            </span>
          </h2>

          <div
            className={`${
              showFilter ? "scale-y-100 h-auto" : "scale-y-0 h-0"
            } sm:scale-y-100 sm:h-auto origin-top overflow-hidden transition-all`}
          >
            <div className="p-4 sm:p-4 flex flex-col items-start justify-start gap-2 border border-solid border-gray-500 mb-3 sm:mb-5">
              <h2 className="text-md font-semibold">CATEGORIES</h2>

              <div className="flex items-center justify-start gap-1">
                <input
                  type="checkbox"
                  value="Men"
                  checked={category.includes("Men")}
                  onChange={handleCategoryChange}
                  id="men"
                />
                <label htmlFor="men" className="text-gray-600 text-sm">
                  Men
                </label>
              </div>
              <div className="flex items-center justify-start gap-1">
                <input
                  type="checkbox"
                  value="Women"
                  checked={category.includes("Women")}
                  onChange={handleCategoryChange}
                  id="women"
                />
                <label htmlFor="women" className="text-gray-600 text-sm">
                  Women
                </label>
              </div>
              <div className="flex items-center justify-start gap-1">
                <input
                  type="checkbox"
                  value="Kids"
                  checked={category.includes("Kids")}
                  onChange={handleCategoryChange}
                  id="kids"
                />
                <label htmlFor="kids" className="text-gray-600 text-sm">
                  Kids
                </label>
              </div>
            </div>
            <div className="p-4 sm:p-4 flex flex-col  items-start justify-start gap-2 border border-solid border-gray-500">
              <h2 className="text-md font-semibold">TYPE</h2>

              <div className="flex items-center justify-start gap-1">
                <input
                  type="checkbox"
                  value="Topwear"
                  checked={type.includes("Topwear")}
                  onChange={handleTypeChange}
                  id="topwear"
                />
                <label htmlFor="topwear" className="text-gray-600 text-sm">
                  TopWear
                </label>
              </div>
              <div className="flex items-center justify-start gap-1">
                <input
                  type="checkbox"
                  value="Bottomwear"
                  checked={type.includes("Bottomwear")}
                  onChange={handleTypeChange}
                  id="bottomwear"
                />
                <label htmlFor="bottomwear" className="text-gray-600 text-sm">
                  BottomWear
                </label>
              </div>
              <div className="flex items-center justify-start gap-1">
                <input
                  type="checkbox"
                  value="Winterwear"
                  checked={type.includes("Winterwear")}
                  onChange={handleTypeChange}
                  id="winterwear"
                />
                <label htmlFor="winterwear" className="text-gray-600 text-sm">
                  WinterWear
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 p-2 sm:p-4 w-full">
          <div className="flex items-center justify-between w-full flex-col sm:flex-row">
            <Titile text1={"ALL"} text2={"COLLECTIONS"} />

            <select
              id="sortby"
              className="p-[5px] text-sm border border-solid border-gray-700"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="">Sort By: Relevent</option>
              <option value="LowtoHigh">Sort By: Low To High</option>
              <option value="HightoLow">Sort By: High To Low</option>
            </select>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 gap-y-4 p-2 py-5 sm:p-4">
            {collectionList.map((product, ind) => (
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
      </div>
    </section>
  );
}
