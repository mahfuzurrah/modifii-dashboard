import React from "react";
import { Link } from "react-router-dom";
import TLogo from "../assets/Icons/T-Mobile_logo.svg";
import { MdOutlineNavigateNext } from "react-icons/md";
import { FiBarChart2 } from "react-icons/fi";
import Download from "../assets/Icons/Download.svg"
import Calculator from "../assets/Icons/calculator.svg"
import Money from "../assets/Icons/moneyBlack.svg"
import AddC from "../assets/Icons/AddCategory.svg"
import AddSquare from "../assets/Icons/AddSquare.svg"

function Topbar() {
  const items = [
    {
      title: "Dashboard",
      isActive: true,
    },
  ];

  return (
    <div className="topbar_nav_item">
      <div className="breadcrumb_list">
        <FiBarChart2 className="icons" />
        <MdOutlineNavigateNext className="icons" />
        {items.map((item, index) => (
          <li key={index} className={item.isActive ? "active" : ""}>
            {item.title}
          </li>
        ))}
      </div>
      <div className="right_nav_item">
        <ul className="top_nav_icon_list">
          <li>
            <Link to="">
              <img src={Download} alt="Download" />
            </Link>
          </li>
          <li>
            <Link to="">
              <img src={AddSquare} alt="AddSquare" />
            </Link>
          </li>
          <li>
            <Link to="">
              <img src={Calculator} alt="Calculator" />
            </Link>
          </li>
          <li>
            <Link to="">
              <img src={Money} alt="Money"/>
            </Link>
          </li>
          <li>
            <Link to="" className="top_nav_sell_btn">
              <img src={AddC} alt="AddC" /> Sale Now
            </Link>
          </li>
        </ul>
        <div className="T_mobile">
          <img src={TLogo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
