import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import History from "./components/History";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import SidebarCV from "./components/SidebarCV";
import SidebarMenu from "./components/SidebarMenu";
import { useState } from "react";

const App = () => {

  const [isOpen, setIsOpen] = useState(false)


  return (
    <div className="App py-lg-2 px-lg-3">
      <BrowserRouter>
        <div className="Header_Container container-fluid w-100">
          <Header />
        </div>
        <div className="SidebarCV_Container">
          <SidebarCV />
        </div>

        <div className="Layout_Container d-flex">
          <main className="Content_Container d-flex flex-column px-4 pt-4 pb-lg-2">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/history" element={<History />} />
              <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
            <Footer />
          </main>
          <div className={`SidebarMenu_Container ${isOpen ? "Open" : ""}`} >
            <SidebarMenu setIsOpen={setIsOpen} />
          </div>
        </div>

      </BrowserRouter >
    </div >
  );
};

export default App;
