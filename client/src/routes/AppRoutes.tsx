import About from "@/pages/About";
import Dashboard from "@/pages/Dashboard";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/about" element={<About />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRoutes;
