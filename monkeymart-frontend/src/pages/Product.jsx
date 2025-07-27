import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { FaStar } from "react-icons/fa";
import RelatedProducts from "../components/RelatedProducts";
import { toast } from "sonner";

export default function Product() {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState(null);
  const [size, setSize] = useState("");

  const fetchProductData = () => {
    setProductData(
      products.find((ele) => {
        return ele._id === productId;
      })
    );
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  useEffect(() => {
    if (productData) {
      setImage(productData.image[0]);
    }
  }, [productData]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((img, ind) => (
              <img
                src={img}
                key={ind}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt={`Product Image${ind}`}
                onClick={() => {
                  setImage(productData.image[ind]);
                }}
              />
            ))}
          </div>

          <div className="w-full sm:w-[80%]">
            <img src={image} alt="Product Image" className="w-full h-auto" />
          </div>
        </div>

        {/* Product info */}

        <div className="flex-1">
          <h1 className="font-medium text-2xl sm:text-3xl mt-2">
            {productData.name}
          </h1>
          <div className="flex items-center gap-2">
            <FaStar className="text-[gold] text-xl" />
            <FaStar className="text-[gold] text-xl" />
            <FaStar className="text-[gold] text-xl" />
            <FaStar className="text-[gold] text-xl" />
            <FaStar className="text-[grey] text-xl" />
            <p>(2234)</p>
          </div>
          <p className="mt-5 text-3xl font-semibold">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>

          <div className="flex flex-col gap-4 my-8">
            <p>Select size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, ind) => (
                <button
                  onClick={() => {
                    setSize(item);
                  }}
                  className={`border py-1 px-3 sm:py-2 sm:px-4 bg-gray-200 ${
                    size === item ? "border-black" : ""
                  }`}
                  key={ind}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              onClick={() => {
                if (size) {
                  addToCart(productData._id, size);
                  toast.success(`${productData.name} ${size} is added to cart!`);
                } else {
                  toast.warning("Please Select The SIZE");
                }
              }}
              className="bg-black text-white text-md font-thin px-8 py-2 mt-5 cursor-pointer w-fit"
            >
              Add to cart
            </button>

            <hr className="mt-2" />

            <div className="text-sm text-gray-500 mt-2 flex flex-col gap-1">
              <p>100% Original Product.</p>
              <p>Cash On Delivery available!</p>
              <p>Easy return and exchange poliicy within 7 working days.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Details and Review Section */}

      <div className="mt-20">
        <div className="flex">
          <div className="border bg-gray-200 px-5 py-3 text-sm cursor-pointer">
            Description
          </div>
          <div className="border px-5 py-3 text-sm cursor-pointer">
            Reviews (2234)
          </div>
        </div>

        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, rem
            consequatur rerum quis natus soluta magni quasi dolore, fugit totam
            pariatur perspiciatis eum delectus quae consequuntur ex commodi esse
            repudiandae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero
            labore et numquam dolorem accusamus voluptatem, atque distinctio
            quam molestias, asperiores enim! Voluptas blanditiis ullam repellat!
            Quasi nemo in veniam voluptate repellendus ratione sapiente officia
            necessitatibus culpa repellat. Quibusdam unde perferendis hic beatae
            dolore odio quod asperiores blanditiis nulla illum! Est tempora
            error autem nemo quod iste animi, libero quas aliquid, distinctio
            fugiat aut voluptates? Non adipisci provident quos deserunt repellat
            accusamus doloremque, fugit iusto eveniet et ex voluptate modi
            possimus minima ullam repellendus reprehenderit corrupti, ad saepe
            quo. Quidem eum expedita perspiciatis magni rem fugiat laborum esse
            ratione. Modi, voluptates?
          </p>
        </div>
      </div>

      {/* Related Products */}

      <RelatedProducts
        category={productData.category}
        subcategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
}
