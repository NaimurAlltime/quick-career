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
        once you know how to use the best job search engines, you'll skate
        through to the finish line of interviews and land your dream job fast.
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
