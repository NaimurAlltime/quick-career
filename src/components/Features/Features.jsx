import React, { useEffect, useState } from "react";
import Feature from "./../Feature/Feature";

const Features = () => {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch("featuresJob.json")
      .then((res) => res.json())
      .then((data) => setFeatures(data));
  }, []);

  return (
    <div className="mt-24 md:ml-20">
      <h2 className="text-4xl font-semibold text-center">Featured Jobs</h2>
      <p className="text-center mt-5">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="md:grid grid-cols-2 gap-16">
        {features.map((feature) => (
          <Feature key={feature.id} feature={feature}></Feature>
        ))}
      </div>
    </div>
  );
};

export default Features;
