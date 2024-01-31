import React, { PureComponent } from "react";
import { BarChart, Bar, Tooltip, ResponsiveContainer } from "recharts";

// Data for the bar chart
const data = [
  { name: "Page A", uv: 4000 },
  { name: "Page B", uv: 3000 },
  { name: "Page C", uv: 2000 },
  { name: "Page D", uv: 2780 },
  { name: "Page E", uv: 1890 },
  { name: "Page F", uv: 2390 },
  { name: "Page G", uv: 3490 },
];

// Custom tooltip component for displaying additional information on hover
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const dataPoint = payload[0];
    return (
      <div className="barcustomTooltip">
        <p>{`${label}`}</p>
        <p>{`${dataPoint.name} : ${dataPoint.value}`}</p>
      </div>
    );
  }
  return null;
};

// BarGraph component using PureComponent for performance optimization
class Bargraph extends PureComponent {
  render() {
    return (
      // ResponsiveContainer for adaptive sizing
      <ResponsiveContainer className="barContainer" width="40%" height="70%">
        {/* BarChart component with specified width, height, and data */}
        <BarChart width={150} height={40} data={data}>
          {/* Bar component representing the dataKey "uv" */}
          <Bar
            dataKey="uv"
            fill="#ffffff"
            maxBarSize={8}
            // Styling for the active bar on hover
            activeBar={{ strokeWidth: 0.5, fill: "#9375fc" }}
            // Animation duration for the bars
            animationDuration={1500}
          />
          {/* Tooltip component with custom content and disabled cursor */}
          <Tooltip content={<CustomTooltip />} cursor={false}></Tooltip>
        </BarChart>
      </ResponsiveContainer>
    );
  }
}

export default Bargraph;