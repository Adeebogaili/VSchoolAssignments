import React, { useContext } from "react";
import './styles/index.css'
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Auth from "./components/Auth.js";
import Profile from "./pages/Profile.jsx";
import Public from "./pages/Public.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { UserContext } from "./context/UserProvider.jsx";


// components
import Footer from "./components/Footer.jsx";

// pages
import Home from "./pages/Home.jsx";

export default function App() {
  const { token, logout } = useContext(UserContext);

  return (
    <div className="app">
      <Navbar logout={logout} token={token}/>
      <Routes>

         {token && <Route path="/" element={<Home />} />}
         {!token && <Route path="/" element={<Navigate to="/public" />} />}

        { !token &&
          <Route path="/auth" element={<Auth />} />
        }
        { token &&
          <Route path="/auth" element={<Navigate to="/" />} />
        }
        <Route
          path="/profile"
          element={
            <ProtectedRoute token={token} redirectTo="/public">
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute token={token} redirectTo="/public">
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/public"
          element={<Public />}
        />
      </Routes>
      <Footer />
    </div>
  );
}
