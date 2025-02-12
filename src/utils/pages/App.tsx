import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { supabase } from "../supabaseClient"; // Adjusted import path
import Home from "../Home"; // Correct import path

type Message = {
  id: number;
  content: string;
};

export default function App() {
  const [data, setData] = useState<Message[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase.from("messages").select("*");
        if (error) throw error;
        setData(data || []); // Handle `data` possibly being null
      } catch (error: any) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} /> 
      </Routes>
    </Router>
  );
}
