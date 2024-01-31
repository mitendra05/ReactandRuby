import React, { Component } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Sample data for the line chart
const data = [
  { name: "Page A", Pending: 4000, Success: 2400, Failed: 2000 },
  { name: "Page B", Pending: 3000, Success: 1398, Failed: 2210 },
  { name: "Page C", Pending: 2000, Success: 9800, Failed: 3290 },
  { name: "Page D", Pending: 2780, Success: 3908, Failed: 2000 },
  { name: "Page E", Pending: 1890, Success: 4800, Failed: 1181 },
  { name: "Page F", Pending: 2390, Success: 3800, Failed: 2500 },
  { name: "Page G", Pending: 3490, Success: 4300, Failed: 2100 },
];

// Custom tooltip component for displaying information on hover
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="linecustomTooltip">
        <p style={{ color: "#3CB371" }}>{`Success: ${data.Success}`}</p>
        <p style={{ color: "#ffc125" }}>{`Pending: ${data.Pending}`}</p>
        <p style={{ color: "#F08080" }}>{`Failed: ${data.Failed}`}</p>
      </div>
    );
  }
  return null;
};

// Linechart component using class syntax
class Linechart extends Component {
  render() {
    return (
      <>
        {/* Container with dynamic height based on fullscreen prop */}
        <div
          className={`chartContainer ${
            this.props.isfullScreen === true ? "chartheight" : ""
          }`}
        >
          {/* ResponsiveContainer for adaptive sizing */}
          <ResponsiveContainer width="100%" height="100%">
            {/* LineChart component with XAxis, YAxis, Tooltip, and multiple Line components */}
            <LineChart data={data}>
              <XAxis dataKey="name" className="lineChartLabel" />
              <YAxis className="lineChartLabel" />
              {/* Tooltip component with custom content and disabled cursor */}
              <Tooltip content={<CustomTooltip />} cursor={false}></Tooltip>
              {/* Line components for each dataKey with specified stroke color and styling */}
              <Line type="monotone" dataKey="Success" stroke="#3CB371" dot={false} activeDot={false} />
              <Line type="monotone" dataKey="Pending" stroke="#ffc125" dot={false} activeDot={false} />
              <Line type="monotone" dataKey="Failed" stroke="#F08080" dot={false} activeDot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </>
    );
  }
}

export default Linechart;