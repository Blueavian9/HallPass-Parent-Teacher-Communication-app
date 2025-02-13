import React,{ useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { supabase } from "./src/utils/supabaseClient.js"; // Adjusted import path
import Home from "./src/Home.tsx"; // Correct import path
import { Message } from "./src/database.types.ts";


export default function App() {
  const [data, setData] = useState<Message[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase
          .from<Message, null>("messages")
          .select("*");
        if (error) throw error;
        setData(data || []); // Ensures data is not null
      } catch (error: any) {
        console.error("Error fetching data:", error.message);
      }
    };
  
    fetchData();
  }, []);
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}
