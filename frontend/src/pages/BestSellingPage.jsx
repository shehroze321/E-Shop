import React, { useEffect, useState } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import styles from "../styles/styles";
import { productData } from "../static/data";
import { useSelector } from "react-redux";

const BestSellingPage = () => {
  const {allProducts}=useSelector((state)=>state.products)

  const [data, setData] = useState([]);

  useEffect(() => {
    const sortedProducts = allProducts.slice().sort((a, b) => b.sold_out - a.sold_out);
    setData(sortedProducts);
  }, [allProducts]);
  

  return (
    <>
      <div>
        <Header activeHeading={2} />
        <br />
        <br />
        <div className={`${styles.section}`}>
          <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
            {data &&
              data.map((i, index) => <ProductCard data={i} key={index} />)}
          </div>
         
        </div>
        <Footer />
      </div>
    </>
  );
};

export default BestSellingPage;
