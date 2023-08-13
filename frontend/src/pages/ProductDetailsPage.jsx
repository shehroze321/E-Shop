import React, { useEffect, useState } from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import ProductDetails from "../components/Products/ProductDetails";
import SuggestedProduct from "../components/Products/SuggestedProduct";
import { useParams } from "react-router-dom";
// import { productData } from "../static/data";
import { useSelector } from "react-redux";

const ProductDetailsPage = () => {
  const {allProducts}= useSelector((state)=>state.products);
  const { id } = useParams();
  const [data, setData] = useState(null);
  // const productName = name.replace(/-/g, " ");
  // console.log(name);

  useEffect(() => {
    const data = allProducts && allProducts.find((i) => i._id === id);
    setData(data);
    //  console.log("data of product is ",data);
  }, [data,allProducts]);

  return (
    <div>
      <Header />
      <ProductDetails data={data} />
      {
        data && <SuggestedProduct data={data}/>
      }
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
