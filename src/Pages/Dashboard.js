import { DatePicker } from "antd";
import React, { useState } from "react";
import {
  BiChevronLeft,
  BiChevronRight,
  BiDotsVerticalRounded,
  BiSolidInfoSquare
} from "react-icons/bi";
import { PiPencilSimpleBold } from "react-icons/pi";
import DashboardCard from "../Components/Cards/DashboardCard";
import DashboardSalesChart from "../Components/Chart/DashboardSalesChart";
import Selector from "../Components/Selector/Selector";
import SalesPaymentDueTable from "../Components/Table/SalesPaymentDueTable";



function Dashboard() {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const [activeButton, setActiveButton] = useState("Last 30 Days");

  const handleButtonClick = (buttonText) => {
    setActiveButton(buttonText);
  };

  const months = [
    { value: "January", label: "January" },
    { value: "February", label: "February" },
    { value: "March", label: "March" },
    { value: "April", label: "April" },
    { value: "May", label: "May" },
    { value: "June", label: "June" },
    { value: "July", label: "July" },
    { value: "August", label: "August" },
    { value: "September", label: "September" },
    { value: "October", label: "October" },
    { value: "November", label: "November" },
    { value: "December", label: "December" },
  ];

  const years = [
    { value: "2023", label: "2023" },
    { value: "2024", label: "2024" },
    { value: "2025", label: "2025" },
  ];

  const [selectedMonths, setSelectedMonths] = useState(null);

  const handleChange = (selectedMonths) => {
    setSelectedMonths(selectedMonths);
    console.log(`Selected: ${selectedMonths.label}`);
  };

  const [selectedYears, setSelectedYears] = useState(null);

  const handleYearChange = (selectedYears) => {
    setSelectedYears(selectedYears);
    console.log(`Selected: ${selectedYears.label}`);
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
        <DashboardCard />
      </div>
      <div className="chart_box">
        <div className="chart_item">
          <div className="items left">
            <h3>Sales</h3>
            <div className="dash_sale_plan">
              <button
                className={`d_btn ${
                  activeButton === "Last 30 Days" ? "active" : ""
                }`}
                onClick={() => handleButtonClick("Last 30 Days")}
              >
                Last 30 Days
              </button>
              <button
                className={`d_btn ${
                  activeButton === "Current Financial Year" ? "active" : ""
                }`}
                onClick={() => handleButtonClick("Current Financial Year")}
              >
                Current Financial Year
              </button>
            </div>
          </div>
          <div className="items right">
            <Selector
              options={months}
              onChange={handleChange}
              placeholder="July"
              value={selectedMonths}
            />
            <Selector
              options={years}
              onChange={handleYearChange}
              placeholder="2023"
              value={selectedYears}
            />
            <button className="dot_toggle_btn">
              <BiDotsVerticalRounded className="icons" />
            </button>
          </div>
        </div>
        <div className="chart_title">
          <div className="text_area">
            <h1>1,509 orders</h1>
            <p className="status">
              <span>37.8%</span> vs. Sep, 2021
            </p>
          </div>
          <div className="chart_right_content">
            <button className="slide_btn">
              <BiChevronLeft className="icons" />
            </button>
            <button className="slide_btn">
              <BiChevronRight className="icons" />
            </button>
          </div>
        </div>
        <DashboardSalesChart />
      </div>

      <div className="row mt-4">
        <div className="col-lg-6 col-md-12">
          <div className="table_area">
            <div className="table_header">
              <h3><BiSolidInfoSquare className="icons" />Sales Payment Due</h3>
              <button className="dot_toggle_btn">
              <BiDotsVerticalRounded className="icons" />
            </button>
            </div>
          <SalesPaymentDueTable/>
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <div className="table_area">
            <div className="table_header">
              <h3><BiSolidInfoSquare className="icons" /> Purchase Payment Due</h3>
              <button className="dot_toggle_btn">
              <BiDotsVerticalRounded className="icons" />
            </button>
            </div>
          <SalesPaymentDueTable/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
