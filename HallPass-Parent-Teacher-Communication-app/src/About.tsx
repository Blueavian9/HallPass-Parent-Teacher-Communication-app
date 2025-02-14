import React from "react";
import { Message } from "../database.types";

interface HomeProps {
  data: Message[];
}

const About: React.FC<HomeProps> = ({ data }) => {
  return (
    <div>
      <h1>About Us</h1>
    </div>
  );
};

export default About;
