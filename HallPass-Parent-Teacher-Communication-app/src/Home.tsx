import React from "react";


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


