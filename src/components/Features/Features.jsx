import React, { useEffect, useState } from "react";
import Feature from "./../Feature/Feature";

const Features = () => {
  const [features, setFeatures] = useState([]);
  const [showAll, setShowAll] = useState(false);
  useEffect(() => {
    fetch("featuresJob.json")
      .then((res) => res.json())
      .then((data) => setFeatures(data));
  }, []);

  const handleClick = () => {
    setShowAll(true);
  };

  return (
    <div className="mt-24 md:mx-20">
      <h2 className="text-4xl font-semibold text-center">Featured Jobs</h2>
      <p className="text-center mt-5">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>

      <div className="md:grid grid-cols-2 gap-8 mt-7">
        {showAll
          ? features.map((feature) => (
              <Feature key={feature.id} feature={feature} />
            ))
          : features
              .slice(0, 4)
              .map((feature) => <Feature key={feature.id} feature={feature} />)}
      </div>
      <div className="text-center">
        <button
          onClick={handleClick}
          className="bg-indigo-500 mt-4 px-5 py-3 rounded-md text-lg text-white"
        >
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default Features;
