import React from "react";
import { transactionData } from "../../../Data/DummyData";
import "./widgetlg.css";

const TransactionCard = (props) => {
  return (
    <tr className="trow transactionCard">
      <td className="col-1 nameCol">
        <div className="profileCont">
          <img
            src={props.trans.imgUrl}
            alt="avatar"
            className="avatar"
          />
          {props.trans.name}
        </div>
      </td>
      <td className="col-2">{props.trans.date}</td>
      <td className="col-3">{props.trans.amount}</td>
      <td className="col-4 tStatusCont">
        {props.trans.status === "Declined" && (
          <span className="tStatus tStatusDeclined">
            {" "}
            {props.trans.status}{" "}
          </span>
        )}
        {props.trans.status === "Pending" && (
          <span className="tStatus tStatusPending"> {props.trans.status} </span>
        )}
        {props.trans.status === "Approved" && (
          <span className="tStatus tStatusApproved">
            {" "}
            {props.trans.status}{" "}
          </span>
        )}
      </td>
    </tr>
  );
};

const Widgetlg = () => {
  const transData = transactionData;
  return (
    <div className="widgetlgCont">
      <div className="widgetlgSub">
        <div className="titleCont">
          <p>Latest Transactions</p>
        </div>

        <table className="transTable">
          <thead className="theadd trow">
            <tr className="theadd trow">
              <th className="col-1">Customers</th>
              <th className="col-2">Date</th>
              <th className="col-3">Amount</th>
              <th className="col-4">Status</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {transData.map((transaction, index) => (
              <TransactionCard key={index} trans={transaction} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Widgetlg;
