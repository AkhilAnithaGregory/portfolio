"use client";

import React from "react";
import Image from "next/image";
import { DM_Mono } from "next/font/google";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaSun, FaMoon, FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const dmMono500 = DM_Mono({ subsets: ["latin"], weight: "500" });

function Header() {
  const [darkMode, setDarkMode] = React.useState(false);
  const [isNavBarActive, setIsNavBarActive] = React.useState(false);
  return (
    <div className="mx-5 sm:mx-0 my-5 bg-primary rounded-xl flex justify-between items-center text-white p-4 xl:p-0 border border-darkSecondary">
      <button
        type="button"
        aria-label="sidebar menu toggle"
        onClick={() => setIsNavBarActive(!isNavBarActive)}
        className="hidden xl:flex p-6 bg-[#ffffff0d] w-fit rounded-l-xl"
      >
        <RxHamburgerMenu size="20px" color="white" />
      </button>
      <div className="flex items-center gap-2">
        <Image
          src="/images/dev.svg"
          alt="</>"
          width={30}
          height={100}
          layout="fixed"
        />
        Akhil.dev
      </div>
      <ul
        className={`${dmMono500.className} hidden xl:flex gap-x-5 items-center`}
      >
        <li>About me</li>
        <li>Resume</li>
        <li>Technologies</li>
        <li>Works</li>
        <li>Contact me</li>
      </ul>
      <ul className="hidden xl:flex gap-x-5 items-center">
        <li>
          <FaLinkedinIn />
        </li>
        <li>
          <FaGithub />
        </li>
      </ul>
      <button
        type="button"
        onClick={() => setDarkMode(!darkMode)}
        className="hidden xl:flex p-6 bg-[#ffffff0d] w-fit rounded-r-xl"
      >
        {darkMode ? (
          <FaMoon size="20px" color="#ffc107" />
        ) : (
          <FaSun size="20px" color="#ffc107" />
        )}
      </button>
      <div className="flex xl:hidden items-center gap-5">
        <div>
          {darkMode ? (
            <FaMoon size="20px" color="#ffc107" />
          ) : (
            <FaSun size="20px" color="#ffc107" />
          )}
        </div>
        <button
          type="button"
          aria-label="sidebar menu toggle"
          onClick={() => setIsNavBarActive(!isNavBarActive)}
        >
          <RxHamburgerMenu size="20px" color="white" />
        </button>
      </div>
      <div
        className={`bg-[#1f1f24] ${isNavBarActive ? "block" : "hidden"} fixed top-0 left-0 bottom-0 sm:w-1/2 lg:w-1/4 shadow-md overflow-auto scrollbar-hide`}
      >
        <button
          type="button"
          aria-label="close navbar"
          onClick={() => setIsNavBarActive(!isNavBarActive)}
          className="text-brightSecondary flex float-end m-3"
        >
          <IoClose size="20px" />
        </button>
        <div className="mt-5 p-10">
          <div className="block xl:hidden">
            <h3 className="text-center text-3xl">Go Through</h3>
            <hr className="border-t border-secondary w-full mx-auto my-4" />
            <div className="mb-5">
              <ul className="space-y-2 text-lightGray">
                <li>About me</li>
                <li>Resume</li>
                <li>Technologies</li>
                <li>Works</li>
                <li>Contact me</li>
              </ul>
            </div>
          </div>
          <h3 className="text-center text-3xl">Get in touch</h3>
          <hr className="border-t border-secondary w-full mx-auto my-4" />
          <p className="text-lightGraySecondary my-5">
            I&apos;m always excited to take on new projects and collaborate with
            innovative minds.
          </p>
          <div className="mb-5">
            <span className="text-lightGray">Email</span>
            <p className="text-lightGraySecondary">emaiil@email.com</p>
          </div>
          <div className="mb-5">
            <span className="text-lightGray">Phone</span>
            <p className="text-lightGraySecondary">9074685421</p>
          </div>
          <div className="mb-5">
            <span className="text-lightGray">Skype</span>
            <p className="text-lightGraySecondary">asdasd</p>
          </div>
          <div className="mb-5">
            <span className="text-lightGray">Social</span>
            <p>asdasd</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
