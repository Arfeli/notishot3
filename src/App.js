import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditUser from "./components/admin/EditUser";
import Users from "./components/admin/Users";
import Home from "./components/Home";
import Login  from "./components/logins/Login";
import Register from "./components/logins/Register";
import { Navbar } from "./components/Navbar";
import Notices from "./components/Notices";
import CreateNotes from "./components/redactor/CreateNotes";
import Sidebar from "./components/Sidebar";
//<Route path="/create" element={<CreateNotes />} />

function App() {
  return (
    <body>
      <div class="container-scroller">
        <Navbar />
        <Sidebar />
        <Router>
          <Routes>
            <Route path="/admin" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/edituser" element={<EditUser />} />
            <Route path="/" element={<Notices />} />
            <Route path="/create" element={<CreateNotes />} />
          </Routes>
        </Router>
      </div>
        <Router>
          <Routes>
            <Route path="/loginn" element={<Login />} />
            <Route path="/newuser" element={<Register />} />
          </Routes>
        </Router>
    </body>
  );
}

export default App;
