"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      data-aos="fade-down"
      data-aos-delay="100"
      data-aos-duration="1000"
      className="h-20 border-b border-light mx-6 md:mx-16"
    >
      <div className="wrapper w-full h-full flex justify-between items-center px-4 md:px-12">
        {/* NAV LEFT */}
        <nav>
          <Link
            href="/"
            className="text-2xl font-semibold link-item style-text"
          >
            FlowMartialArts
          </Link>
        </nav>
        {/* NAV RIGHT */}
        <nav className="hidden md:block">
          <ul className="flex gap-5 style-text text-xl">
            <li>
              <Link href="/gallery" className="link-item">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/instructors" className="link-item">
                Instructors
              </Link>
            </li>
            <li>
              <Link href="/faq" className="link-item">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="link-item">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="link-item">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        {/* MOBILE NAV */}
        <nav className="md:hidden">
          <button
            className="text-xl focus:outline-none text-text"
            onClick={handleMobileMenuToggle}
          >
            ☰
          </button>
        </nav>
        {/* MOBILE MENU */}
        {isMobileMenuOpen && (
          <nav className="md:hidden absolute top-20 left-0 w-full bg-blue-700 text-text shadow-lg z-[450569068]">
            <ul className="flex flex-col gap-3 py-4 px-8">
              <li>
                <Link href="/gallery" className="link-item">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/instructors" className="link-item">
                  Instructors
                </Link>
              </li>
              <li>
                <Link href="/faq" className="link-item">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="link-item">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="link-item">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
