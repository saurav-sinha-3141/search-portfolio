import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";

function App() {
  const sectionList = [
    "All",
    "About",
    "Experience",
    "Projects",
    "Certifications",
    "Links",
  ];
  return (
    <>
      <div className="bg-gradient-to-r from-[#1f1f1f] to-[#080808] min-h-screen">
        <Header sectionList={sectionList} />
        <hr className="thin-border" />
        <Body />
      </div>
    </>
  );
}

export default App;
