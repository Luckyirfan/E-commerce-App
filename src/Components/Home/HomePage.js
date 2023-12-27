import Header from "./Header";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import { CssBaseline, Container, Paper, Typography } from "@mui/material";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
function HomePage() {
  return (
    <div className="App">
      <CssBaseline />
      <main>
        <Header />
        <Paper>
          {/* <Router> */}
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          {/* </Router> */}
        </Paper>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default HomePage;
