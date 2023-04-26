import { Routes, Route, Link } from "react-router-dom";
import Car from "./Car";
import About from "./About";
const Menu = () => {
  return (
    <>
      <div className="menu">
        <Link to="/about">About</Link>
        <Link to="/cars">Cars</Link>
      </div>
      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/cars" element={<Car/>}/>
      </Routes>
    </>
  );
};

export default Menu;
