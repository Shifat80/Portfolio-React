import React from "react";
import Nav from "./Component/Nav";
import Hero from "./Component/Hero";
import { Outlet } from "react-router";
import Work from "./Component/Work";
import Feature from "./Component/Feature";


const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white relative">

      <div className="relative z-10">
        <Nav />
        <main className="mt-16">
          <Hero />
          <Feature />
          <Outlet />
          <Work />
        </main>
      </div>
    </div>
  );
};

export default Home;