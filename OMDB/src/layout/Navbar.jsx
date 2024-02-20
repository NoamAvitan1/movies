import React from "react";
import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import LogoAndSearch from "../components/LogoAndSearch";
import Select from "../components/Select";
import TopYear from "../components/TopYear";

const Navbar = () => {
  const { id, idYear } = useParams();

  return (
    <div>
      <div className="upNav">
        <LogoAndSearch />
        <Carousel idYear={idYear} id={id} />
        {/* <div className="absolute top-[552px]"> */}
          <div className="alert max-sm:w-[100px] w-[140px] rounded-md shadow-lg absolute max-sm:top-[520px] top-[544px]">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="stroke-info flex-shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>more info</span>
            </div>
          </div>
        </div>
      {/* </div> */}
      <div className="downNav flex items-center justify-center sm:justify-between sm:items-start mx-auto gap-3 container mt-5">
        <Select id={id} />
        <TopYear id={id} />
      </div>
    </div>
  );
};

export default Navbar;
