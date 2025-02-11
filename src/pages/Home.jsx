import React from "react";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import Login from "../Components/Login";
import Categories from "../Components/Categories";
import { Outlet } from "react-router-dom";
import SocialLogin from "../Components/SocialLogin";

const Home = () => {
  return (
    <div className="w-10/12 mx-auto">
      {/* header */}
      <header>
        <Header />
      {/* nav bar */}
      <nav className="flex justify-between items-center">
        <div></div>
        <NavBar/>
        <Login/>
      </nav>
      </header>
      {/* main */}
      <main className="grid md:grid-cols-12 gap-5 my-20">
        <div className="col-span-3 space-y-5">
        <h2 className="font-bold text-xl">All Caterogy</h2>
          <Categories/>
          </div>
        <div className="col-span-6 space-y-5">
        <h2 className="font-bold text-xl">Dragon News Home</h2>
          <Outlet/>
          </div>
        <div className="col-span-3 space-y-5">
          <h2 className="font-bold text-xl">Login With</h2>
          <SocialLogin/>
          </div>
      </main>
    </div>
  );
};

export default Home;
