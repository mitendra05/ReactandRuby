import React, { PureComponent } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

// Sample data for the pie chart
const data = [
  { name: "Succeed", value: 358 },
  { name: "Pending", value: 124 },
  { name: "Failed", value: 98 },
];

// Colors for each segment of the pie chart
const COLORS = ["#3CB371", "#ffc125", "#F08080"];

// Custom tooltip component for displaying value on hover
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const dataPoint = payload[0];
    return (
      <div className="piecustomTooltip">
        <p>{`${dataPoint.value}`}</p>
      </div>
    );
  }
  return null;
};

// Piechart component using PureComponent for performance optimization
export default class Piechart extends PureComponent {
  render() {
    return (
      // ResponsiveContainer for adaptive sizing
      <ResponsiveContainer width="80%" height={250}>
        {/* PieChart component with specified width and height */}
        <PieChart width={800} height={500}>
          {/* Pie component with data, positioning, styling, and animation */}
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={50}
            fill="#8884d8"
            dataKey="value"
            animationDuration={1200}
          >
            {/* Cell components for defining colors based on the index */}
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          {/* Tooltip component with custom content and disabled cursor */}
          <Tooltip content={<CustomTooltip />} cursor={false}></Tooltip>
        </PieChart>
      </ResponsiveContainer>
    );
  }
}