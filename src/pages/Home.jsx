import React from "react";
import {
  Header,
  InitialSection,
  About,
  Portfolio,
  Courses,
  Advantages,
  FAQ,
  Footer
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
      <FAQ/>
      <Footer/>
    </div>
  );
};

export default Home;
