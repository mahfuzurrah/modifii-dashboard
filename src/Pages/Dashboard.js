import { DatePicker } from "antd";
import React from "react";
import { PiPencilSimpleBold } from "react-icons/pi";
import DashboardCard from "../Components/Cards/DashboardCard";

function Dashboard() {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div className="dashboard_page">
      <div className="section_title">
        <div className="text_area">
          <h1>Welcome back, Daniel</h1>
          <p>Track, manage and forecast your customers and orders.</p>
        </div>
        <div className="btn_area">
          <DatePicker
            onChange={onChange}
            placeholder="Filter Date"
            className="date_picker"
          />
          <button className="btn_b">
            <PiPencilSimpleBold className="icons" />
            Edit Widgets
          </button>
        </div>
      </div>

      <div className="all_card_group">
        <DashboardCard/>
      </div>
    </div>
  );
}

export default Dashboard;
