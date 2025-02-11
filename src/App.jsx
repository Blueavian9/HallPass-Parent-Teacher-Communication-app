import { useEffect, useState } from "react";
import { supabase } from "./utils/supabaseClient.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./utils/pages/Home.tsx";
import axios from "axios";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase.from("messages").select("*");
        if (error) throw error;
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />

        {/* Fallback 404 Page */}
        <Route
          path="*"
          element={
            <div>
              <h1>404 - Page Not Found</h1>
            </div>
          }
        />
      </Routes>

      <h1>HallPass Parent-Teacher Communication App</h1>
      <ul>
        {data.map((message) => (
          <li key={message.id}>{message.content}</li>
        ))}
      </ul>
    </Router>
  );
}
