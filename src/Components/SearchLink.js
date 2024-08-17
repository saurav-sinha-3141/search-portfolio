import React from "react";

const SearchLink = (props) => {
  const { imgLink, title, link, heading, description } = props;

  const trim = (str) => {
    if (str.length > 36) return str.substring(0, 36) + "...";
    return str;
  };
  return (
    <div className="mb-10">
      <div className="flex items-center">
        <div>
          <img src={imgLink} className="h-8 rounded-full" alt="Logo"></img>
        </div>
        <div className="px-2 text-[#B8C1C6]">
          <div className="text-sm text-[#DADCE0]">{title}</div>
          <div className="text-xs">{trim(link)}</div>
        </div>
      </div>
      <div className="my-2 text-xl text-[#99c3ff] cursor-pointer hover:underline inline-block">
        {heading}
      </div>
      <div className="text-[#B8C1C6] text-sm">{description}</div>
    </div>
  );
};

export default SearchLink;
