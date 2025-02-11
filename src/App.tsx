import { useEffect, useState } from "react";
import { supabase } from "./utils/supabaseClient.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./utils/Home.tsx";

import axios from "axios";

type Message = {
  id: number; 
  content: string; 
}

export default function App() {
  const [data, setData] = useState<Message []>([]);

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
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
