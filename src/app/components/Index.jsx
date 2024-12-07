"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = usePathname();
  const router = useRouter();
  return (
    <nav className="bg-stone-300 relative">
      <div className="flex items-center justify-around md:justify-between w-[90%] mx-auto py-4">
        {/* Logo and Mobile Menu Toggle */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <h1 className="text-2xl font-semibold">Logo</h1>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
            className="text-2xl md:hidden z-50 transition-all duration-500 ease-in-out"
          >
            <div
              className={`transform ${
                open ? "rotate-180 opacity-100" : "rotate-0 opacity-60"
              } transition-all duration-500 ease-in-out`}
            >
              {open ? <FaTimes /> : <FaBars />}
            </div>
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6 text-lg">
          <Link
            href="/"
            className={`hover:text-orange-500 cursor-pointer ${
              location == "/" && "text-orange-500"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`hover:text-orange-500 cursor-pointer ${
              location == "/about" && "text-orange-500"
            }`}
          >
            About
          </Link>
          <Link href="/earn" className="hover:text-orange-500 cursor-pointer">
            Earn
          </Link>
          <Link href="contact" className="hover:text-orange-500 cursor-pointer">
            Contact
          </Link>
          <Link
            href="/service"
            className="hover:text-orange-500 cursor-pointer"
          >
            Service
          </Link>
          <Link href="/learn" className="hover:text-orange-500 cursor-pointer">
            Learn
          </Link>
        </ul>
        <button
          onClick={() => router.push("/about")}
          className="hidden md:block bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
        >
          Submit
        </button>

        {/* Mobile Navigation */}
        <div
          className={`absolute top-full w-full bg-blue-400 transition-transform duration-500 transform ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="md:hidden w-[90%] mx-auto py-4 space-y-4 text-lg text-right">
            <Link href="/" className="hover:text-orange-500 cursor-pointer">
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-orange-500 cursor-pointer"
            >
              About
            </Link>
            <Link href="earn" className="hover:text-orange-500 cursor-pointer">
              Earn
            </Link>
            <Link
              href="/contact"
              className="hover:text-orange-500 cursor-pointer"
            >
              Contact
            </Link>
            <Link
              href="/service"
              className="hover:text-orange-500 cursor-pointer"
            >
              service
            </Link>
            <Link href="learn" className="hover:text-orange-500 cursor-pointer">
              Learn
            </Link>
            <div>
              {/* <button
                onClick={() => navigate.push("/userList")}
                className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
              >
                Submit
              </button> */}
              <button type="button">Click me</button>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
