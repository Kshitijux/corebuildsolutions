import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import React from 'react';
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LeadCapture from "./components/LeadCapture";
import { AuthProvider, useAuth } from "./context/AuthContext";

// Protecting Admin Routing Guards
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-slate-100 gap-4">
        <div className="w-10 h-10 rounded-full border-2 border-slate-800 border-t-blue-500 animate-spin" />
        <span className="text-xs uppercase font-bold tracking-widest text-slate-500">Securing Session...</span>
      </div>
    );
  }
  
  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }
  
  return <>{children}</>;
};

function AppRoutes() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin");

  // Reset scroll position to top on every route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {!isAdmin && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Admin Login Gate */}
        <Route path="/admin/login" element={<Login />} />
        
        {/* Protected Dashboard Route */}
        <Route path="/admin/*" element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        } />
      </Routes>
      {!isAdmin && <Footer />}
      {!isAdmin && <LeadCapture />}
    </>
  );
}

export default function App() {
  return <AppRoutes />;
}
