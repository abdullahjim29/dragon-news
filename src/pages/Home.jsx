import React from "react";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import Login from "../Components/Login";
import Categories from "../Components/Categories";

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
        <div className="col-span-3"><Categories/></div>
        <div className="col-span-6">Dragon News Home</div>
        <div className="col-span-3">Login With</div>
      </main>
    </div>
  );
};

export default Home;
