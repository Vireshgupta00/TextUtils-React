import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
// import About from "./Components/About";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {
  return (
    <>
    {/* <Router> */}
      <Navbar title="Textutils" />
      <div className="container my-3">
        {/* <Routes>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/" element={ */}
          <TextForm heading="Enter the text to analyze"/>
          {/* }></Route>
        </Routes> */}
      </div>
    {/* </Router> */}
    
    </>
  );
}

export default App;
