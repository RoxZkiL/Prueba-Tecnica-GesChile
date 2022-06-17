import React from "react";
import { Header } from "../Header/Header";
import Description from "../Description/Description";
import Materials from "../Materials/Materials";
import Testimony from "../Testimony/Testimony";
import Contract from "../Contract/Contract";

const Home = () => {
  return (
    <>
      <Header />
      <Description />
      <Materials />
      <Testimony />
      <Contract />
    </>
  );
};

export default Home;
