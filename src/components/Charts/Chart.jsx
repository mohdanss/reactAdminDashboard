import React from "react";
import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Chart = (props) => {
    const title = props.title;
    const data = props.data;
    const xKey = props.xKey;
    const lines = props.lines;
    console.log(props);
 
  return (
    <div className="chartCont">
      <div className="chartTitle">
        <h3>{title}</h3>
      </div>
      <div className="chartBody">
        <ResponsiveContainer width="100%" aspect={4 / 1} className="chart">
          <LineChart data={data}>
            <XAxis dataKey={xKey} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            {lines.map((line, index) => <Line key={index} type="monotone" dataKey={line.datakey} stroke={line.stroke} activeDot={{ r: 8 }} />)}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
