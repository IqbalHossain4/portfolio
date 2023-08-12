import React from "react";
import { FaBars } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";

const Main = () => {
  //make nav Active
  const Active = ({ to, children }) => {
    return (
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? "text-white" : "text-[#bbb]")}
      >
        {children}
      </NavLink>
    );
  };

  //nav Options
  const navOptions = (
    <>
      <div className="ms-4">
        <h1 className="mb-8 font-[700] text-[30px] text-white ">
          <Link to="/">IQBAL</Link>
        </h1>
      </div>
      <li>
        <Active to="/">Home</Active>
      </li>
      <li>
        <Active to="/about">About</Active>
      </li>
      <li>
        <Active to="/service">Service</Active>
      </li>
      <li>
        <Active to="/projects">Projects</Active>
      </li>
      <li>
        <Active to="/news">News</Active>
      </li>
      <li>
        <Active to="/contact">Contact</Active>
      </li>
      <div className="text-[15px] text-[#bbb] ms-4" disabled>
        <p className="mt-8">&copy;2023 Iqbal</p>
        <p className="">Created by Iqbal</p>
      </div>
    </>
  );

  return (
    <div className="drawer md:drawer-open relative">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content w-full h-full bg-[#34353A]">
        <div className={`lg:h-full min-h-screen  lg:mt-0 mt-16`}>
          <Outlet></Outlet>
        </div>
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 flex items-start justify-center h-full bg-[#494B50] text-base-content text-[15px]">
          {navOptions}
        </ul>
      </div>
      <div className="w-full absolute top-4 text-white text-[25px] md:hidden">
        <div className="w-full flex items-center justify-between px-4">
          <h4>
            <Link to="/">Portfolio</Link>
          </h4>
          <label htmlFor="my-drawer-2" className="drawer-button md:hidden">
            <FaBars />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Main;
