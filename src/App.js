import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter basename="/Persik_project">
      <ScrollToTop>
        <Navbar />
        <AppRouter />
        <Footer/>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
