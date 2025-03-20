import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Home from "./pages/home/Home.jsx";
import Courses from "./pages/courses/Courses.jsx";
import CourseDetail from "./pages/courses/courseDetail.jsx";
// import Feedback from "./pages/Feedback/Feedback.jsx";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgetPassword.jsx";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course/:courseId" element={<CourseDetail />} />
          {/* <Route path="/feedback" element={<Feedback />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;
