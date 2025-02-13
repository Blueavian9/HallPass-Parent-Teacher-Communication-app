import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { supabase } from "./src/utils/supabaseClient.js"; // Adjusted import path
import Home from "./src/Home.tsx"; // Correct import path
import { Database } from "./src/database.types"; // Import the Database interface

// Use the Row type for the messages table
type Message = Database["public"]["Tables"]["messages"]["Row"];

export default function App() {
  const [data, setData] = useState<Message[]>([]); // Use the Message type here

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase
          .from("messages") // Table name is a string
          .select("*"); // Select only specific fields
        if (error) throw error;
        setData(data || []); // Handle potential null values
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
