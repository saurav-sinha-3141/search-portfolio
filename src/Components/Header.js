import React, { useState } from "react";
import { useContext } from "react";
import { SearchKeyword } from "../Context/SearchKeyword";

const Header = (props) => {
  const { sectionList } = props;

  const [activeButton, setActiveButton] = useState("All");
  const [inputValue, setInputValue] = useState("Saurav Sinha");

  const { checkSearchKeyword } = useContext(SearchKeyword);

  const handleActiveState = (buttonName) => {
    setActiveButton(buttonName);
  };

  const buttonClass = (buttonName) =>
    `px-4 m-1 text-sm ${
      activeButton === buttonName
        ? "border-b-[3px] text-white mb-0 font-normal pb-0.5"
        : ""
    }`;

  const handleSearch = () => {
    checkSearchKeyword(inputValue);
    setInputValue("Saurav Sinha");
  };

  return (
    <>
      <div className="bg-transparent h-36">
        <div className="h-24 flex items-center">
          <div className="bg-[#303134] ml-5 mr-5 lg:ml-60 rounded-full p-3 pl-0 md:w-[550px] w-full h-[42px] mt-3 flex items-center cursor-text hover:bg-[#373a40]">
            <input
              className="bg-transparent focus:outline-none text-[16px] md:w-[470px] w-full h-[40px] rounded-full rounded-r-none pl-6 text-[#E8EAED] hover:bg-[#373a40]"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              maxLength={46}
            ></input>
            {/* Should hold 46 characters at max */}
            <svg
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="25"
              height="25"
              className="cursor-pointer"
              onClick={() => setInputValue("")}
            >
              <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                fill="#E8EAED"
              ></path>
            </svg>
            <div className="w-px h-6 bg-[#878787] mx-2"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="22"
              height="22"
              viewBox="0 0 50 50"
              className="cursor-pointer"
              onClick={handleSearch}
            >
              <path
                d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"
                fill="#E8EAED"
              ></path>
            </svg>
          </div>
        </div>
        <div className="flex overflow-x-auto h-12 bg-transparent text-[#cac5c5] ml-5 lg:ml-28">
          {sectionList.map((buttonName) => (
            <button
              key={buttonName}
              className={buttonClass(buttonName)}
              onClick={() => handleActiveState(buttonName)}
            >
              {buttonName}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
