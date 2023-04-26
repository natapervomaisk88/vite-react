import { Routes, Route, Link } from "react-router-dom";
import Car from "./Car";
import About from "./About";
import TeamLead from "./TeamLead";
const Menu = () => {
  return (
    <>
      <div className="menu">
        <Link to="/about">About</Link>
        <Link to="/cars">Cars</Link>
        <Link to="/teams">UseContext</Link>
      </div>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/cars" element={<Car />} />
        <Route path="/teams" element={<TeamLead />} />
      </Routes>
    </>
  );
};

export default Menu;
