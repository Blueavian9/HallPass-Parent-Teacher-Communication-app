import { Routes, Route, Navigate } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./pages/App";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
