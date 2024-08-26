import React from "react";
import calculatorImg from "../Assets/Calculator.png";
import textUtilsImg from "../Assets/Text_Utils.png";
import rpsImg from "../Assets/RPS.png";

const Project = () => {
  return (
    <div className="relative bg-transparent">
      <div className="text-2xl text-[#DADCE0] m-5 ml-0">Projects</div>
      <hr className="thin-border mb-5" />
      <div className="mb-10 md:w-[50vw] flex overflow-x-auto hide-scrollbar">
        <div className="flex overflow-visible pt-4">
          <Card
            image={calculatorImg}
            altText={"Calculator App"}
            description={"Calculator Made using HTML, CSS, JS"}
            link={"http://calculator.sauravsinha.tech"}
          />
          <Card
            image={textUtilsImg}
            altText={"Text Utils"}
            description={"Text formatter using react"}
            link={"https://saurav-sinha-3141.github.io/text_utils"}
          />
          <Card
            image={rpsImg}
            altText={"Rock Paper Scissors Game"}
            description={"Rock Paper Scissors Game"}
            link={"http://rock-paper-scissor.sauravsinha.tech"}
          />
          <Card
            image={calculatorImg}
            altText={"Calculator App"}
            description={"Calculator Made using HTML, CSS, JS"}
            link={"http://calculator.sauravsinha.tech"}
          />
          <Card
            image={calculatorImg}
            altText={"Calculator App"}
            description={"Calculator Made using HTML, CSS, JS"}
            link={"http://calculator.sauravsinha.tech"}
          />
        </div>
      </div>
      <hr className="thin-border mb-5" />
    </div>
  );
};

const Card = (props) => {
  const { image, altText, description, link } = props;
  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="h-60 w-60 rounded-lg border border-[#595858] mr-10 flex-shrink-0 relative hover:h-72 hover:w-72 hover:-translate-y-3 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-black"
      >
        <div className="h-[75%]">
          <img
            src={image}
            alt={altText}
            className="w-full h-full object-cover"
          />
        </div>
        <hr className="thin-border" />
        <div className="pl-2 pt-1 text-[#DADCE0]">{description}</div>
      </a>
    </>
  );
};

export default Project;
