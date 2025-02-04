import { useEffect, useState } from "react";
import { supabase } from "./utils/supabaseClient";
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
    <div>
      <h1>HallPass Parent-Teacher Communication App</h1>
      <ul>
        {data.map((message) => (
          <li key={message.id}>{message.content}</li>
        ))}
      </ul>
    </div>
  );
}
