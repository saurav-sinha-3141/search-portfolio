import React, { useEffect } from "react";

const GoogleCustomSearch = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cse.google.com/cse.js?cx=d4f2347e0e2814435";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return <div className="h-24 bg-red-400 gcse-search"></div>;
};

export default GoogleCustomSearch;
