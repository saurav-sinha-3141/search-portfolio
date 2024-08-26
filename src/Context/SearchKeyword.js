import React, { createContext, useState } from "react";

export const SearchKeyword = createContext();

export const InputProvider = ({ children }) => {
  const [isNotSauravSinha, setIsNotSauravSinha] = useState(false);

  //   const setSearchKeyword = (inputValue) => {
  //     localStorage.setItem("searchKeyword", inputValue);
  //   };

  const checkSearchKeyword = (inputValue) => {
    if (inputValue !== "Saurav Sinha") {
      setIsNotSauravSinha(true);
      console.log("Saurav Sinha was searched? " + isNotSauravSinha);
    } else {
      setIsNotSauravSinha(false);
      console.log("Something other " + isNotSauravSinha);
    }
  };

  return (
    <SearchKeyword.Provider value={{ isNotSauravSinha, checkSearchKeyword }}>
      {children}
    </SearchKeyword.Provider>
  );
};
