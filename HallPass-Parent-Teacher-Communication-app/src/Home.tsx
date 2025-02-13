import React from "react";
import { Message } from "./database.types.ts";

interface HomeProps {
  data: Message[];
}

const Home: React.FC<HomeProps> = ({ data }) => {
  return (<div>
    <h1>Welcome to HallPass Homepage App</h1>
    <ul>
      {data.map((message) => (
        <li key={message.id}>{message.content}</li>
      ))}
    </ul>
  </div>); 
};

export default Home;
