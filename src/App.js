import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";
import { InputProvider } from "./Context/SearchKeyword";

function App() {
  const sectionList = [
    "All",
    "Resume",
    "Experience",
    "Projects",
    "Certifications",
    "Links",
  ];
  return (
    <>
      <InputProvider>
        <div className="bg-[#1f1f1f] min-h-screen">
          <Header sectionList={sectionList} />
          <hr className="thin-border" />
          <Body />
        </div>
      </InputProvider>
    </>
  );
}

export default App;
