import React from "react";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default function ChartComponent({data , type}) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={400}
        height={400}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#404042" />
        <YAxis dataKey={type} domain={["auto", "auto"]} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey={type} stroke="#3874ff" strokeWidth="2px" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}
