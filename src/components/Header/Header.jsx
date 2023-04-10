import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="md:flex justify-around items-center mt-7">
      <h5 className="text-3xl font-semibold">
        <Link to="/">QuickCareer</Link>
      </h5>
      <ul className="flex flex-col md:flex-row">
        <Link className="pr-12" to="/">
          Home
        </Link>
        <Link className="pr-12" to="/statistics">
          Statistics
        </Link>
        <Link className="pr-12" to="/applied_jobs">
          Applied Jobs
        </Link>
        <Link className="pr-12" to="/blog">
          Blog
        </Link>
      </ul>
      <button className="bg-indigo-500 px-4 py-2 rounded-md text-lg text-white">
        Star Applying
      </button>
    </nav>
  );
};

export default Header;
