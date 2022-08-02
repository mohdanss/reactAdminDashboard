import React from "react";
import "./home.css";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/Charts/Chart";
import { financeData, financeDataLines } from "../../Data/DummyData";
import Widgetsm from "../../components/widgets/small/Widgetsm";
import Widgetlg from "../../components/widgets/large/Widgetlg";

const Home = () => {
  return (
    <div className="homeSectionCont">
      <FeaturedInfo />
      <Chart
        title="Finance Data"
        data={financeData}
        xKey="month"
        lines={financeDataLines}
      />
      <div className="widgetsCont">
        <Widgetsm />
        <Widgetlg />
      </div>
    </div>
  );
};

export default Home;
