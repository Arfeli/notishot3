import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Users from "./components/admin/Users";
import Home from "./components/Home";
import Login  from "./components/logins/Login";
import { Navbar } from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <body>
      <div class="container-scroller">
        <Navbar />
        <Sidebar />
        <Router>
          <Routes>
            <Route path="/s" element={<Home />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </Router>
      </div>
        <Router>
          <Routes>
            <Route path="/loginn" element={<Login />} />
          </Routes>
        </Router>
    </body>
  );
}

export default App;
