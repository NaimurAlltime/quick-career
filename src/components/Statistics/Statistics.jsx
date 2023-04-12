// import React from "react";
// // import React, { PureComponent } from 'react';
// // import {
// //   ComposedChart,
// //   Line,
// //   Area,
// //   Bar,
// //   XAxis,
// //   YAxis,
// //   CartesianGrid,
// //   Tooltip,
// //   Legend,
// //   ResponsiveContainer,
// // } from 'recharts';
// import {
//   Area,
//   Bar,
//   CartesianGrid,
//   ComposedChart,
//   Legend,
//   Line,
//   Tooltip,
//   XAxis,
//   YAxis,
// } from "recharts";

// const Statistics = () => {
//   // const data = [
//   //   { id: 1, name: "A-1", phy: 75, chem: 80, math: 85 },
//   //   { id: 2, name: "A-2", phy: 90, chem: 85, math: 95 },
//   //   { id: 3, name: "A-3", phy: 80, chem: 75, math: 90 },
//   //   { id: 4, name: "A-3", phy: 85, chem: 90, math: 80 },
//   //   { id: 5, name: "A-4", phy: 70, chem: 65, math: 75 },
//   //   { id: 6, name: "A-5", phy: 95, chem: 85, math: 90 },
//   //   { id: 7, name: "A-6", phy: 80, chem: 90, math: 95 },
//   //   { id: 8, name: "A-7", phy: 75, chem: 80, math: 85 },
//   // ];

//   const data = [
//     {
//       name: "Page A",
//       uv: 590,
//       pv: 800,
//       amt: 1400,
//     },
//     {
//       name: "Page B",
//       uv: 868,
//       pv: 967,
//       amt: 1506,
//     },
//     {
//       name: "Page C",
//       uv: 1397,
//       pv: 1098,
//       amt: 989,
//     },
//     {
//       name: "Page D",
//       uv: 1480,
//       pv: 1200,
//       amt: 1228,
//     },
//     {
//       name: "Page E",
//       uv: 1520,
//       pv: 1108,
//       amt: 1100,
//     },
//     {
//       name: "Page F",
//       uv: 1400,
//       pv: 680,
//       amt: 1700,
//     },
//   ];

//   return (
//     <div>
//       <h2>this is Statistics page</h2>
//       <div>
//         {/* <ComposedChart width={1000} height={450} data={marksArray}>
//           <Tooltip />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Line type="monotone" stroke="#8884d8" dataKey="phy"></Line>
//           <Line type="monotone" stroke="#82ca9d" dataKey="chem"></Line>
//         </ComposedChart> */}

//         <ComposedChart
//           width={500}
//           height={400}
//           data={data}
//           margin={{
//             top: 20,
//             right: 80,
//             bottom: 20,
//             left: 20,
//           }}
//         >
//           <CartesianGrid stroke="#f5f5f5" />
//           <XAxis
//             dataKey="name"
//             label={{ mark: "Pages", position: "insideBottomRight", offset: 0 }}
//             scale="band"
//           />
//           <YAxis
//             label={{ mark: "Index", angle: -90, position: "insideLeft" }}
//           />
//           <Tooltip />
//           <Legend />
//           <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
//           <Bar dataKey="pv" barSize={20} fill="#413ea0" />
//           <Line type="monotone" dataKey="uv" stroke="#ff7300" />
//         </ComposedChart>
//       </div>
//     </div>
//   );
// };

// export default Statistics;

import React from "react";
import { Pie, PieChart, Tooltip } from "recharts";

const Statistics = () => {
  const data01 = [
    { name: "Assignment-1", mark: 57 },
    { name: "Assignment-2", mark: 60 },
    { name: "Assignment-3", mark: 58 },
    { name: "Assignment-4", mark: 59 },
    { name: "Assignment-5", mark: 60 },
    { name: "Assignment-6", mark: 29 },
    { name: "Assignment-7", mark: 57 },
    { name: "Assignment-8", mark: 60 },
  ];

  return (
    <div className="text-center mt-8">
      <h2 className="text-3xl font-bold text-indigo-400 underline">
        Assignment Analytics
      </h2>
      <PieChart width={1200} height={500}>
        <Pie
          dataKey="mark"
          isAnimationActive={false}
          data={data01}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default Statistics;
