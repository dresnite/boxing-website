"use client";

import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import Footer from "./components/Footer";
import NumberItem from "./components/NumberItem";
import NavLink from "./components/NavLink";
import DesktopNavLinks from "./components/DesktopNavLinks";

export default function Home() {
  const [isOpen, setOpen] = useState(false);

  function handleClick() {
    setOpen(!isOpen);
    console.log("clicked");
    console.log(isOpen);
  }

  return (
    <div>
      <section className="hero min-h-screen relative">
        <nav className="mx-10 py-6 flex items-center justify-between z-0">
          <div
            className={clsx(
              "fixed top-0 left-0 bg-black w-full h-screen duration-500 flex flex-col items-center justify-center font-semibold text-2xl uppercase space-y-5",
              {
                hidden: !isOpen,
              }
            )}
          >
            <a href="" className="hover:text-red-500 duration-200">
              Home
            </a>
            <a href="" className="hover:text-red-500 duration-200">
              Our classes
            </a>
            <a href="" className="hover:text-red-500 duration-200">
              Prices
            </a>
            <a href="" className="hover:text-red-500 duration-200">
              Contact us
            </a>
            <a href="" className="hover:text-red-500 duration-200">
              Try a free class
            </a>
          </div>

          <h1 className="font-black uppercase text-red-600 hover:text-red-400 text-xl">
            Toa Gym
          </h1>

          <button
            type="button"
            className={clsx("w-[24px] h-[20px] relative group", {
              open: isOpen,
              "md:hidden": !isOpen,
            })}
            onClick={handleClick}
          >
            <span className="hamburger-top bg-white group-hover:bg-red-500"></span>
            <span className="hamburger-middle bg-white group-hover:bg-red-500"></span>
            <span className="hamburger-bottom bg-white group-hover:bg-red-500"></span>
          </button>

          <DesktopNavLinks isOpen={isOpen}/>
        </nav>

        <div className="pb-10 flex text-center lg:text-left justify-center md:justify-start">
          <div className="flex flex-col items-start justify-start lg:w-2/5 space-y-16 lg:space-y-10 mx-10 mt-20 md:mt-40 object-scale-down">
            <h1 className="text-5xl uppercase font-black">
              The perfect boxing gym for athletes of all levels
            </h1>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              architecto, saepe soluta iusto animi iste. Numquam animi porro ab
              in eligendi asperiores perferendis commodi.
            </p>

            <button className="mx-auto lg:mx-0 bg-red-700 hover:bg-red-500 duration-200 uppercase font-semibold px-20 py-4">
              Book a class
            </button>
          </div>
        </div>

        <img
          src="/boxer.png"
          width={600 * 1.4}
          height={469 * 1.4}
          alt="Boxer"
          className={clsx(
            "hidden lg:block absolute bottom-0 right-10",
            {
              "lg:hidden": isOpen,
            }
          )}
        />
      </section>

      {/* Numbers section */}
      <section className="bg-gray-900 text-white px-10 py-16 flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
        <div className="flex w-100 md:w-1/2 justify-around mb-6 md:mb-0 z-1">
          <NumberItem number="16" text="Gold medals in our team" />
          <NumberItem number="4" text="Different martial art classes" />
        </div>

        <div className="flex w-100 md:w-1/2 justify-around mb-6 md:mb-0">
          <NumberItem number="120" text="Students from all the world" />
          <NumberItem number="24" text="Hours of classes evert week" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
