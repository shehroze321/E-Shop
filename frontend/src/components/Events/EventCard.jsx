import React from "react";
import styles from "../../styles/styles";
import CountDown from "./CountDown";

const EventCard = ({active}) => {
  return (
    <div className={`w-full block bg-white rounded-lg ${active ? "unset":"mb-12"} lg:flex p-2 `}>
      <div className="w-full lg:-w[50%] m-auto">
        <img src="https://m.media-amazon.com/images/I/31Vle5fVdaL.jpg" alt="" />
      </div>
      <div className="w-full lg:[w-50%] flex flex-col justify-center">
        <h2 className={`${styles.productTitle}`}>Iphone 14pro max 8/256</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          ipsam est iusto! Assumenda animi eaque obcaecati labore officia
          veritatis laboriosam, quas, possimus eius sapiente asperiores enim
          accusantium culpa facere et! Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Eveniet reiciendis adipisci, vero commodi non libero
          minima, impedit accusamus laboriosam explicabo aspernatur voluptatem
          cupiditate ratione accusantium culpa dignissimos totam. Vero, ab?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
          corrupti nemo quidem quo autem quaerat suscipit veniam, maiores quasi
          quisquam nihil sed ipsam quod culpa, recusandae tempora numquam
          consectetur eveniet.
        </p>
        <div className="flex py-2 justify-between">
          <div className="flex">
            <h5 className="font-[500] text-[18px] text-[#d55b45] pr-3 line-through">
              1099$
            </h5>
            <h5 className="font-bold text-[20px] text-[#333] font-Roboto">
              999$
            </h5>
          </div>
          <span className="pr-3 font-[400] text-[17px] text-[#44a55e]">
            120 sold
          </span>
        </div>
        <CountDown />
        <br />
        {/* <div className="flex items-center">
          <Link to={`/product/${data._id}?isEvent=true`}>
            <div className={`${styles.button} text-[#fff]`}>See Details</div>
          </Link>
          <div className={`${styles.button} text-[#fff] ml-5`} onClick={() => addToCartHandler(data)}>Add to cart</div>
        </div> */}
      </div>
    </div>
  );
};

export default EventCard;
