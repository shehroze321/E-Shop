import React from "react";
import DashboardHeader from "../../components/Shop/Layout/DashboardHeader";
import DashboardSideBar from "../../components/Shop/Layout/DashboardSideBar";
import AllRefundOrders from "../../components/Shop/AllRefundsOrders";

const ShopAllRefundsPage = () => {
  return (
    <div>
      <div>
        <DashboardHeader />
        <div className="flex items-start justify-between w-full">
          <div className="w-[80px] 800px:w-[330px]">
            <DashboardSideBar active={10} />
          </div>
          <div className="w-full justify-center flex">
                <AllRefundOrders />
            </div>
        </div>
      </div>
    </div>
  );
};

export default ShopAllRefundsPage;
