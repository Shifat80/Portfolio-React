import React from "react";
import Nav from "./Component/Nav";
import Hero from "./Component/Hero";
import { Outlet } from "react-router";
import Work from "./Component/Work";
import Feature from "./Component/Feature";


const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Nav></Nav>
      <main className="mt-16">
        <Hero></Hero>
        <Feature></Feature>
        <Outlet></Outlet>
        <Work></Work>
      </main>
    </div>
  );
};

export default Home;
