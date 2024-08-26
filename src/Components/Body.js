import React from "react";
import { useContext } from "react";
import SearchLink from "./SearchLink";
import sauravImg from "../Assets/Saurav-new-m.jpg";
import useScreenSize from "../Hooks/useScreenSize";
import Projects from "./Projects";
import { SearchKeyword } from "../Context/SearchKeyword";

const Body = () => {
  const images = {
    altImgLink:
      "https://img.icons8.com/?size=100&id=2g1Bd0nZyodu&format=png&color=ffffff",
    linkedInImg:
      "https://img.icons8.com/?size=100&id=13930&format=png&color=000000",
    githubImg:
      "https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=ffffff",
    xImg: "https://img.icons8.com/?size=100&id=fJp7hepMryiw&format=png&color=ffffff",
    chessComImg:
      "https://img.icons8.com/?size=100&id=C5LTcmsc3cr0&format=png&color=000000",
  };

  const screenSize = useScreenSize();

  const { isNotSauravSinha } = useContext(SearchKeyword);

  return (
    <>
      <div className="flex justify-center">
        <div className="bg-transparent mx-2 lg:ml-28 w-full my-5 p-3">
          {isNotSauravSinha && (
            <div className="text-[#ff7769] text-lg flex mb-3">
              Did you mean:
              <p className="text-[#99c3ff] ml-2 italic font-semibold cursor-pointer hover:underline">
                Saurav Sinha
              </p>
            </div>
          )}
          <SearchLink
            imgLink={sauravImg}
            title="Saurav Sinha"
            link="http://sauravsinha.tech"
            heading="Saurav Sinha - Technology explorer, Fullstack developer"
            description="Wants to learn and use different technologies, experienced in MERN stack, Git"
          />
          <SearchLink
            imgLink={images.linkedInImg}
            title="LinkedIn - Saurav Sinha"
            link="https://linkedin.com/in/sinhasaurav"
            heading="Saurav Sinha - Senior year BIT Mesra"
            description="Software developer skilled in full-stack development. B.Tech student in Chemical Engineering, with experience in designing impactful web solutions. Always eager to explore new technologies."
          />
          <SearchLink
            imgLink={images.githubImg}
            title="GitHub - Saurav Sinha"
            link="https://github.com/saurav-sinha-3141"
            heading="Saurav Sinha - Senior year BIT Mesra"
            description="Explore my repositories and feel free to contribute or suggest improvements. I'm always open to new projects and collaborations. Let's connect and create something impactful together!"
          />
          <SearchLink
            imgLink={images.altImgLink}
            title="Resume"
            link="https://drive.google.com/file/d/1tpmrsPWiNzSHstosYoa5KSOx4fSOZJKs/preview"
            heading="Saurav Sinha - Senior year BIT Mesra"
            description="Explore my repositories and feel free to contribute or suggest improvements. I'm always open to new projects and collaborations. Let's connect and create something impactful together!"
          />
          <SearchLink
            imgLink={images.xImg}
            title="X"
            link="https://x.com/SSinha3141"
            heading="Saurav Sinha - Senior year BIT Mesra"
            description="Explore my repositories and feel free to contribute or suggest improvements. I'm always open to new projects and collaborations. Let's connect and create something impactful together!"
          />
          <Projects />
          {/* <iframe
            src="https://drive.google.com/file/d/1tpmrsPWiNzSHstosYoa5KSOx4fSOZJKs/preview"
            width="320"
            height="390"
          ></iframe> */}
          <SearchLink
            imgLink={images.chessComImg}
            title="Chess.com"
            link="https://www.chess.com/member/saurav_2802"
            heading="Chess.com Saurav_2802"
            description="Explore my repositories and feel free to contribute or suggest improvements. I'm always open to new projects and collaborations. Let's connect and create something impactful together!"
          />
        </div>

        <div className="w-px h-screen bg-[#595858] my-4"></div>

        {screenSize.width > 770 && (
          <div className="text-white bg-transparent w-[60vw] h-max my-5 p-3 mx-5">
            <div className="flex justify-start space-x-2 text-3xl mb-3">
              <div>
                <img
                  src={sauravImg}
                  className="max-h-[150px] h-auto rounded-l-2xl"
                  alt="My personal logo"
                ></img>
              </div>
              <div className="font-semibold">
                <div>Saurav Sinha</div>
                {/* <div className="text-sm">Fullstack Developer</div> */}
              </div>
            </div>
            <div className="text-[#B8C1C6]">
              Saurav Sinha is a proficient software developer with expertise in
              full-stack development. Currently pursuing a Bachelor of
              Technology in Chemical Engineering, he has honed his skills in
              programming languages and frameworks like JavaScript, Python,
              ReactJS, and MongoDB
            </div>
            <div className="font-semibold my-2 flex">
              Languages:
              <p className="text-[#B8C1C6] font-normal ml-2">
                Java, Python, JavaScript
              </p>
            </div>
            <div className="font-semibold my-2 flex">
              Frameworks:
              <p className="text-[#B8C1C6] font-normal ml-2">React, Tailwind</p>
            </div>
            <div className="font-semibold my-2 flex">
              Tech Stack:
              <p className="text-[#B8C1C6] font-normal ml-2">MERN, NextJS</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Body;
