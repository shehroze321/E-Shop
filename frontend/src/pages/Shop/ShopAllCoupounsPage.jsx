import React from "react";
import DashboardHeader from "../../components/Shop/Layout/DashboardHeader";
import DashboardSideBar from "../../components/Shop/Layout/DashboardSideBar";
import AllEvents from "../../components/Shop/AllEvents";
import AllCoupouns from "../../components/Shop/AllCoupouns";

const ShopAllEventsPage = () => {
  return (
    <div>
      <div>
        <DashboardHeader />
        <div className="flex items-start justify-between w-full">
          <div className="w-[80px] 800px:w-[330px]">
            <DashboardSideBar active={9} />
          </div>
          <div className="w-full justify-center flex">
                <AllCoupouns />
            </div>
        </div>
      </div>
    </div>
  );
};

export default ShopAllEventsPage;
