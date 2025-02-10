import React from "react";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import Login from "../Components/Login";

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
    </div>
  );
};

export default Home;
