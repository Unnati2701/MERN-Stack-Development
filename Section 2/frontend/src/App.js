import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login2";
import Signup from "./components/Signup";
import Notfound from "./components/Notfound";
import Navbar from "./components/Navbar";
import EventHandling from "./components/EventHandling";
import { Toaster } from "react-hot-toast";
import StateManagement from "./components/StateManagement";
import ToDo from "./components/ToDo2";
import { AnimatePresence } from "framer-motion";
import ManageUser from "./components/ManageUser";

function App() {
  return (
    <div>
      <Toaster position="top-center" />
      <AnimatePresence>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route element={<Navigate to="/home" />} path="/" />
            <Route element={<Home />} path="home" />
            <Route element={<Login />} path="login" />
            <Route element={<Signup />} path="signup" />
            <Route element={<EventHandling />} path="event" />
            <Route element={<StateManagement />} path="state" />
            <Route element={<ManageUser />} path="manageuser" />
            <Route element={<ToDo />} path="todo" />
            <Route element={<Notfound />} path="*" />
          </Routes>
        </BrowserRouter>
      </AnimatePresence>
    </div>
  );
}

export default App;