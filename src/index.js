import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Beautymain from "./beauty/Beautymain";
import Kidsmain from "./kids/Kidsmain";
import Menmain from "./men/Menmain";
import Watchmain from "./watches/Watchesmain";
import Womenmain from "./women/Womenmain";
import Navbar from "./Navbar";
import Searchmain from "./search/Searchmain";
import Shop from "./women/Shop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Searchmain />
    <Navbar />
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/beauty" element={<Beautymain />}></Route>
      <Route path="/kids" element={<Kidsmain />}></Route>
      <Route path="/men" element={<Menmain />}></Route>
      <Route path="/watches" element={<Watchmain />}></Route>
      <Route path="/women" element={<Womenmain />}></Route>
      <Route path="/shop" element={<Shop />} />
    </Routes>
  </BrowserRouter>
);
