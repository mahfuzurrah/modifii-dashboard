import { Table } from "antd";
import React from "react";
import { PiPencilSimpleBold } from "react-icons/pi";
import { Link } from "react-router-dom";
const columns = [
  {
    title: "Customer",
    dataIndex: "customer",
  },
  {
    title: "#Invoice",
    dataIndex: "invoice",
  },
  {
    title: "Due Amount",
    dataIndex: "dAmount",
  },
  {
    title: "Action",
    render: () => (
      <Link to="">
        <PiPencilSimpleBold />
      </Link>
    ),
  },
];
const data = [
  {
    key: "1",
    customer: "Esther Howard",
    invoice: "#200257",
    dAmount: "$100,000",
  },
  {
    key: "2",
    customer: "Ralph Edwards",
    invoice: "#526587",
    dAmount: "$14,000",
  },
  {
    key: "3",
    customer: "Kristin Watson",
    invoice: "#105986",
    dAmount: "$110,000",
  },
  {
    key: "4",
    customer: "Albert Flores",
    invoice: "#526589",
    dAmount: "$200,000",
  },
  {
    key: "5",
    customer: "Arlene McCoy",
    invoice: "#526525",
    dAmount: "$16,000",
  },
];

const SalesPaymentDueTable = () => {
  const rowClassName = (record, index) => {
    return index % 2 === 0 ? "even-row" : "odd-row";
  };
  return (
    <div className="mt-4">
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        rowClassName={rowClassName}
        className="custom-table"
      />
    </div>
  );
};

export default SalesPaymentDueTable;
