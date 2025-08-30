import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Redirect from "./components/Redirect";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen">
              <Header />
              <Hero />
              <About />
              <Experience />
              <Skills />
              <Portfolio />
              <Contact />
              <Footer />
            </div>
          }
        />
        <Route path="/redirect" element={<Redirect />} />
      </Routes>
    </Router>
  );
}

export default App;
