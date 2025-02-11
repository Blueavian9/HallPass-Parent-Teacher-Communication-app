import { Routes, Route, Navigate } from "react-router-dom";
import App from "./App";

export default function AppRoutes() {
  return (
    // <Routes>
    //   <Route path="/" element={<App />} />
    //   {/* Redirect any unknown paths to home */}
    //   <Route path="*" element={<Navigate to="/" replace />} />
    // </Routes>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
