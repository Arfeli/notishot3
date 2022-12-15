import React from "react";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./components/admin/Users";
import Home from "./components/Home";
import Login  from "./components/logins/Login";
import { Navbar } from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <body>
      <div class="container-scroller">
        <Sidebar />
        <div class="container-fluid page-body-wrapper">
        <Navbar />
        <Home />
        </div>
      </div>
        <Login />
    </body>
  );
}

export default App;
