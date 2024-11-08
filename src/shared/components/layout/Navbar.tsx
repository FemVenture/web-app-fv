"use client";
import { useState, useEffect } from "react";
import { SearchBar } from "../ui/Searchbar";
import { Button } from "../ui/Button";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const handleResize = () => {
    if (window.innerWidth >= 1280) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="navbar-wrapper fixed top-0 w-full z-50 "
      style={{
        backgroundColor: showMenu || scrolling ? "white" : "transparent",
      }}
    >
      <nav
        className="px-6 md:px-10 py-6 backdrop-blur-sm"
        style={{
          backgroundColor: showMenu || scrolling ? "white" : "transparent",
          color: showMenu || scrolling ? "black" : "white",
        }}
      >
        <div className="mx-auto flex justify-between items-center">
          {/* Logo */}
          <a
            className="flex items-center text-2xl gap-x-4 hover:no-underline"
            href="/"
          >
            {/*
            <img
              width={40}
              height={49.27}
              src="/icons/FemVentureLogo.svg"
              alt="FemVenture Logo"
              loading="lazy"
            />
            */}
            FemVenture
          </a>

          {/* Navigation links */}
          <div className="hidden xl:flex space-x-16 items-center">
            <a href="#explore" className="underline-offset-4 font-light">
              Explorar
            </a>
            <a href="#social" className="underline-offset-4 font-light">
              Comunidad
            </a>
          </div>

          <div className="hidden xl:flex space-x-16 items-center">
            <SearchBar
              value=""
              placeholder="Buscar un emprendimiento"
              onChange={() => {}}
            />
          </div>

          <div className="hidden xl:flex space-x-16 items-center">
            <a href="/login" className="underline-offset-4 font-light">
              Iniciar sesión
            </a>
            <Button label="Regístrate" size="medium" />
          </div>

          {/* Hamburger menu for mobile devices */}
          <button className="xl:hidden" onClick={toggleMenu}>
            {showMenu ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`absolute px-8 pt-2 pb-8 w-full xl:hidden  overflow-hidden shadow-lg bg-white ${
          showMenu ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="text-right ml-auto">
          <li className="pb-4">
            <a href="#explore" className="font-light">
              Explorar
            </a>
          </li>
          <li className="py-4">
            <a href="#social" className="font-light">
              Comunidad
            </a>
          </li>
          <li className="py-4">
            <a href="/login" className="font-light">
              Iniciar sesión
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
