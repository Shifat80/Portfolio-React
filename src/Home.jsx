import React from "react";
import Nav from "./Component/Nav";
import Hero from "./Component/Hero";
import { Outlet } from "react-router";

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Nav></Nav>
      <main className="mt-16">
        <Hero></Hero>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default Home;
