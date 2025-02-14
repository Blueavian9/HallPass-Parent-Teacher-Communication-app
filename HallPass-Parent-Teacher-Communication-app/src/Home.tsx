import React from "react";
import { Message } from "../database.types";

interface HomeProps {
  data: Message[];
}

const Home: React.FC<HomeProps> = ({ data }) => {
  return (
    <div>
      <h1>Welcome to HallPass Homepage App</h1>
      {data.length > 0 ? (
        <ul>
          {data.map((message) => (
            <li key={message.id}>
              <strong>Message:</strong> {message.content} <br />
              <small>
                Created At:{" "}
                {message.created_at
                  ? new Date(message.created_at).toLocaleString()
                  : "Unknown"}
              </small>
            </li>
          ))}
        </ul>
      ) : (
        <p>No messages available.</p>
      )}
    </div>
  );
};

export default Home;
