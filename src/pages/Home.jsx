import React from "react";
import { Header, InitialSection, About, Portfolio } from "../components";

const Home = () => {
  return (
    <div>
      <Header />
      <InitialSection
        title={"Академия дополнительного профессионального образования"}
      />
      <About />
      <Portfolio />
    </div>
  );
};

export default Home;
