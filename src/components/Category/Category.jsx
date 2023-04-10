import React from "react";

const Category = ({ category }) => {
  const { categoryName, logo, jobsAvailable } = category;
  // console.log(category);
  return (
    <div className="mt-10">
      <div className="">
        <img
          className="w-20 h-20 p-4 rounded-md border border-indigo-300"
          src={logo}
          alt=""
        />
      </div>
      <h2 className="mt-6 text-xl font-medium">{categoryName}</h2>
      <p className="mt-2">{jobsAvailable} Jobs Available</p>
    </div>
  );
};

export default Category;
