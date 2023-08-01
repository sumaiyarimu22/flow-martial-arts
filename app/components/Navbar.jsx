"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <header
      data-aos="fade-down"
      data-aos-delay="100"
      data-aos-duration="1000"
      className="h-20 border-b border-light mx-16"
    >
      <div className="wrapper w-full h-full flex justify-between items-center md:px-12">
        {/* NAV LEFT */}
        <nav>
          <Link href="/" className="text-xl font-semibold link-item">
            FlowMartialArts
          </Link>
        </nav>
        {/* NAV RIGHT */}
        <nav>
          <ul className="flex gap-5">
            <li>
              <Link href="/gallery" className="link-item">
                Gallery
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
      </div>
    </header>
  );
};

export default Navbar;
