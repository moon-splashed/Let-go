import React from "react";
import {
  Header,
  InitialSection,
  About,
  Portfolio,
  Courses,
  Advantages
} from "../components";

const Home = () => {
  return (
    <div>
      <Header />
      <InitialSection
        title={"Академия дополнительного профессионального образования"}
      />
      <About />
      <Portfolio />
      <Courses />
      <Advantages />
    </div>
  );
};

export default Home;
