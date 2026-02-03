import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Footer from "./components/Footer";


import Dashboard from "./pages/Dashboard";
import Market from "./pages/Market";
import Analysis from "./pages/Analysis";
import Calendar from "./pages/Calendar";
import Liquidity from "./pages/Liquidity";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

import "./styles/dashboard.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* 🔓 PUBLIC ROUTES */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* 🔒 PROTECTED DASHBOARD LAYOUT */}
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <div className="app">
                <Sidebar />
                <div className="main">
                  <Topbar />

                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/market" element={<Market />} />
                    <Route path="/analysis" element={<Analysis />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/liquidity" element={<Liquidity />} />
                    <Route path="/profile" element={<Profile />} />
                  </Routes>
                 <Footer/>
                </div>
              </div>
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
