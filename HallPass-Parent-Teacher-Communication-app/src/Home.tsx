import React from "react";
import { Message } from "./database.types.ts";

type HomeProps = {
  data: Message[];
};

export default function Home({ data }: HomeProps) {
  return (<div>
    <h1>Welcome to HallPass Homepage App</h1>
    <ul>
      {data.map((message) => (
        <li key={message.id}>{message.content}</li>
      ))}
    </ul>
  </div>);
}


