import React from "react";
import Nav from "./Component/Nav";
import Hero from "./Component/Hero";
import { Outlet, useLocation } from "react-router";
import Work from "./Component/Work";
import About from "./Component/About";
import Feature from "./Component/Feature";
import Particles from "../Reactbits/Particles/Particles";

const Home = () => {
  const location = useLocation();

  // Define routes where you only want to show navbar
  const navOnlyRoutes = ['/error', '/404'];

  // Check if current route should only show navbar
  const isNavOnlyRoute = navOnlyRoutes.includes(location.pathname) ||
                        location.pathname.startsWith('/error');

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Global Particles Background - Make sure it's visible */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={150}
          particleSpread={8}
          speed={0.08}
          particleBaseSize={80}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <div className="relative z-10">
        <Nav />
        <main className="mt-16">
          {!isNavOnlyRoute && location.pathname === '/' && (
            <>
              <Hero />
              <Feature />
            </>
          )}

          {/* Remove these conditional renders - let Outlet handle routing */}
          {/* {location.pathname === '/about' && <About />} */}
          {/* {location.pathname === '/work' && <Work />} */}

          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Home;