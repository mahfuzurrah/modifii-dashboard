import React from "react";
import {
  BsArrowDown,
  BsArrowUp,
  BsCart3,
  BsInfoCircleFill,
} from "react-icons/bs";
import Card from "./Card";

const DashboardCard = () => {
  const cardData = [
    {
      icon: <BsCart3 />,
      title: (
        <div className="card_sm_title">
          <p>Total Sales</p>
          <BsInfoCircleFill />
        </div>
      ),
      valu: "$128k",
      status: (
        <div className="card_status_text">
          <p>
            <span className="up">
              <BsArrowUp />
              35.00%
            </span>
            This week
          </p>
        </div>
      ),
      cName: "d_card_1",
    },
    {
      icon: <BsCart3 />,
      title: (
        <div className="card_sm_title">
          <p>Net</p>
          <BsInfoCircleFill />
        </div>
      ),
      valu: "$321k",
      status: (
        <div className="card_status_text">
          <p>
            <span className="down">
              <BsArrowDown />
              35.00%
            </span>
            This week
          </p>
        </div>
      ),
      cName: "d_card_2",
    },
    {
      icon: <BsCart3 />,
      title: (
        <div className="card_sm_title">
          <p>Total Sales</p>
          <BsInfoCircleFill />
        </div>
      ),
      valu: "$128k",
      status: (
        <div className="card_status_text">
          <p>
            <span className="up">
              <BsArrowUp />
              35.00%
            </span>
            This week
          </p>
        </div>
      ),
      cName: "d_card_3",
    },
    {
      icon: <BsCart3 />,
      title: (
        <div className="card_sm_title">
          <p>Total Sales</p>
          <BsInfoCircleFill />
        </div>
      ),
      valu: "$128k",
      status: (
        <div className="card_status_text">
          <p>
            <span className="up">
              <BsArrowUp />
              35.00%
            </span>
            This week
          </p>
        </div>
      ),
      cName: "d_card_4",
    },
    {
      icon: <BsCart3 />,
      title: (
        <div className="card_sm_title">
          <p>Total Sales</p>
          <BsInfoCircleFill />
        </div>
      ),
      valu: "$128k",
      status: (
        <div className="card_status_text">
          <p>
            <span className="up">
              <BsArrowUp />
              35.00%
            </span>
            This week
          </p>
        </div>
      ),
      cName: "d_card_5",
    },
    {
      icon: <BsCart3 />,
      title: (
        <div className="card_sm_title">
          <p>Total Sales</p>
          <BsInfoCircleFill />
        </div>
      ),
      valu: "$128k",
      status: (
        <div className="card_status_text">
          <p>
            <span className="up">
              <BsArrowUp />
              35.00%
            </span>
            This week
          </p>
        </div>
      ),
      cName: "d_card_6",
    },
    {
      icon: <BsCart3 />,
      title: (
        <div className="card_sm_title">
          <p>Total Sales</p>
          <BsInfoCircleFill />
        </div>
      ),
      valu: "$128k",
      status: (
        <div className="card_status_text">
          <p>
            <span className="up">
              <BsArrowUp />
              35.00%
            </span>
            This week
          </p>
        </div>
      ),
      cName: "d_card_7",
    },
    {
      icon: <BsCart3 />,
      title: (
        <div className="card_sm_title">
          <p>Total Sales</p>
          <BsInfoCircleFill />
        </div>
      ),
      valu: "$128k",
      status: (
        <div className="card_status_text">
          <p>
            <span className="up">
              <BsArrowUp />
              35.00%
            </span>
            This week
          </p>
        </div>
      ),
      cName: "d_card_8",
    },
  ];

  return (
    <div className="row">
      {cardData.map((card, index) => (
        <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
          <Card
            icon={card.icon}
            title={card.title}
            valu={card.valu}
            status={card.status}
            cName={card.cName}
          />
        </div>
      ))}
    </div>
  );
};

export default DashboardCard;
