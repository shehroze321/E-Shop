import React, { useState } from "react";

import {  useNavigate } from "react-router-dom";
import styles from "../../styles/styles";

const ProductDetails = ({ data }) => {
  console.log("data of product is", data);
//   const [count, setCount] = useState(1);
//   const [click, setClick] = useState(false);
  const [select, setSelect] = useState(1);
  const navigate = useNavigate();

  return (
    <div className="bg-white">
      {data ? (
        <>
        <div className={`${styles.section} w-[90%] 800px:w-[80%] h-screen`}>
          <div className="w-full py-5">
            <div className="block w-full 800px:flex">
              
              <div className="w-full 800px:w-[50%]">
              <img
                src={data.image_url[select].url}
                alt=""
                className="w-[80%]"
              />
                <div className="w-full flex">
                    
                  <div
                    className={`${select === 0 ? "border" : "null"} cursor-pointer`}
                    onClick={() => setSelect(0)}
                  >
                    <img
                      src={data?.image_url[0].url}
                      alt=""
                      className="h-[200px] overflow-hidden mr-3 mt-3"
                    />
                  </div>
                  <div
                    className={`${select === 1 ? "border" : "null"} cursor-pointer`}
                    onClick={() => setSelect(1)}
                  >
                    <img
                      src={data.image_url[1].url}
                      alt=""
                      className="h-[200px] overflow-hidden mr-3 mt-3"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full 800px:w-[50%] pt-5">
                {/* Add product details here */}
              </div>
            </div>
          </div>
        </div>
        </>
      ) : (
        null
      )}
    </div>
  );
};

export default ProductDetails;
