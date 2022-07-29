import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "../src/Pages/Home/Home.js";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Coding from "./Pages/Coding/Coding";
import Homework from "./Pages/HomeworkPage/Homework";
import EssayWrite from "./Pages/Essay Writing/EssayWrite";
import Quote from "./Pages/Quote/Quote";
import Faq1 from "./Pages/Faq/Faq";
import DissertationPage from "./Pages/DissertationPage/DissertationPage";
import CaseService from "./Pages/CaseStudy/CaseService";
import ResearchPaper from "./Pages/ResearchPaper/ResearchPaper";
import Landing from "./Pages/Landing Page/Landing";

const App = () => {
  return (
    <>
      {/* <div className="d-flex justify-content-center pt-3 pb-0" >
        <p>
          Our website is currently under maintenance, but we are still open for
          orders. Please <a href="https://wa.me/+61272020993">WhatsApp</a> us to
          place an order. Apologies for the inconvenience caused.
        </p>
      </div> */}
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/code" element={<Coding />} />
          <Route path="/homework" element={<Homework />} />
          <Route path="`/essaywrite ` `" element={<EssayWrite />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/faq" element={<Faq1 />} />
          <Route path="/dissertation" element={<DissertationPage />} />
          <Route path="/casestudy" element={<CaseService />} />
          <Route path="/research" element={<ResearchPaper />} />
          <Route path="*" element={<Navigate to="/"/> } />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
