import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

const TopYear = ({ id }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="hidden md:flex gap-5">
        <h1 className="me-2 text-white text-xl">Top Years:</h1>
        {Array.from({ length: 8 }, (_, i) => (
          <NavLink
            className="me-2 hover:text-error pt-1"
            key={i}
            to={`/search/${id ? id : "naruto"}/year/${1950 + i * 10}`}
          >
            {1950 + i * 10}
          </NavLink>
        ))}
      </div>
      <div className="sm:flex justify-between md:hidden">
        {isOpen && <div className="flex gap-2 flex-col">
        <h1 className="me-2 text-white text-xl">Top Years:</h1>
        <div className="flex flex-col gap-2">
        {Array.from({ length: 8 }, (_, i) => (
          <NavLink
            className="me-2 hover:text-error pt-1"
            key={i}
            to={`/search/${id ? id : "naruto"}/year/${1950 + i * 10}`}
          >
            {1950 + i * 10}
          </NavLink>
        ))}
        </div>
      </div>}
      <button onClick={()=>setIsOpen(!isOpen)} className="btn">
          <AiOutlineMenu />
        </button>
      </div>
    </div>
  );
};

export default TopYear;
