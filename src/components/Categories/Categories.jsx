import React, { useEffect, useState } from "react";
import Category from "../Category/Category";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("jobCategories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="mt-20 md:ml-20">
      <h2 className="text-4xl font-semibold text-center">Job Category List</h2>
      <p className="text-center mt-5">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="md:grid grid-cols-4 gap-8">
        {categories.map((category, idx) => (
          <Category key={idx} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
