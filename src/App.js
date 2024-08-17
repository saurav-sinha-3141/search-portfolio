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
      <div className="bg-[#1f1f1f] min-h-screen">
        <Header sectionList={sectionList} />
        <hr className="thin-border" />
        <Body />
      </div>
    </>
  );
}

export default App;
