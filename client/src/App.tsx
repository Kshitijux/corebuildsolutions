import { Routes, Route, useLocation } from "react-router-dom";
import React from 'react';
import Home from "./pages/Home";

function AppRoutes() {
  const location = useLocation();

  // Reset scroll position to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default function App() {
  return <AppRoutes />;
}
