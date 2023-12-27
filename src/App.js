import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Services from "./Components/Home/Services";
import React from "react";
import Home from "./Components/Home/Home";
import About from "./Components/Home/About";
import Contact from "./Components/Home/Contact";
import HomePage from "./Components/Home/HomePage";
import Carousel from "./Components/Carousel/Carousel";
import SignUp from "./Components/Registration/SignUp";
import SignIn from "./Components/Registration/SignIn";
import Dashboard from "./Components/Dashboard/Dashboard";
import ResetPassword from "./Components/Registration/ResetPassword";

function App() {
  return (
    <div className="App">
      {/* <Dashboard/> */}
      <Router>
        <HomePage />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/resetpassword" element={<ResetPassword />} />

          {/* <Route path="/about" element={<SignIn />} /> */}
        </Routes>
      </Router>
      <Carousel />
      {/* <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
