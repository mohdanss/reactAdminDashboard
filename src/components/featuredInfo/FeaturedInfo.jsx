import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import React from "react";
import "./featuredInfo.css";

const InfoCard = (props) => {
  const [title, revenue, compToLastMonth] = props.info;

  return (
    <div className="infoCard">
      <span className="infoCardTitle">{title}</span>
      <div className="revCont">
        <span className="infoCardRevenue">{revenue}</span>
        <div className="infoCardCompToLastMonth">
          {compToLastMonth[0] === "+" ? (
            <ArrowUpward className="arrow down" />
          ) : (
            <ArrowDownward className="arrow up" />
          )}
          <span className="pct">
            {compToLastMonth.slice(1, compToLastMonth.length)}
          </span>
        </div>
      </div>
      <p className="subTitle">Compared to last month</p>
    </div>
  );
};

const FeaturedInfo = () => {
  const cardInfo = [
    ["Sales", "$1,000", "+10.29%"],
    ["Revenue", "$1,234", "-12.3%"],
    ["Profit", "$2,340", "+3.4%"],
  ];

  return (
    <div className="featuredInfoCont">
      <p className="fITitle">Overall Statistics</p>
      <div className="featuredInfoContSub">
        {cardInfo.map((card, index) => {
          return <InfoCard key={index} info={card} />;
        })}
      </div>
    </div>
  );
};

export default FeaturedInfo;
