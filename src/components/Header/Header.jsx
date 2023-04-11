import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="md:flex justify-around items-center mt-7">
      <h5 className="text-3xl font-semibold">
        <Link to="/">
          <span className="text-indigo-500">Quick</span>Career
        </Link>
      </h5>
      <ul className="flex flex-col md:flex-row">
        <Link className="pr-12 hover:text-indigo-400" to="/">
          Home
        </Link>
        <Link className="pr-12 hover:text-indigo-400" to="/statistics">
          Statistics
        </Link>
        <Link className="pr-12 hover:text-indigo-400" to="/applied_jobs">
          Applied Jobs
        </Link>
        <Link className="pr-12 hover:text-indigo-400" to="/blog">
          Blog
        </Link>
      </ul>
      <button className="bg-indigo-500 px-4 py-2 rounded-md text-lg text-white hover:text-indigo-100">
        Star Applying
      </button>
    </nav>
  );
};

export default Header;
