import Link from "next/link";

// components/Footer.js
const Footer = () => {
  return (
    <footer className="text-text p-12 border-t border-light mx-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="col-span-1 md:col-span-2">
          <p className="text-xl">FlowMartialArts</p>
          <p className="mt-2 text-xs">
            © {new Date().getFullYear()} Caring Solutions You Can Trust
          </p>
        </div>
        <div className="col-span-1 md:col-span-1">
          <p className="">Contact Information:</p>
          <ul className="mt-2 text-sm">
            <li>Email: sumaiyarimu@gmail.com</li>
            <li>Phone: +8801754316172</li>
            <li>Address: Dhaka, Bangladesh</li>
          </ul>
        </div>
        <div className="col-span-1 md:col-span-3 mt-4">
          <div>
            <ul className="flex gap-5">
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
