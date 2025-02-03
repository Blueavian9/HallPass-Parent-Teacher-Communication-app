import { useEffect, useState } from "react";
import { supabase } from "./utils/supabaseClient";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("messages").select("*");
      if (error) console.error(error);
      else setData(data);
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

export default App;
