import Logo from "../../../assets/Images/Navbar/Logo.svg";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaArrowUp,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <footer
        className="bg-gray-50 text-gray-900 px-6  py-10 flex flex-col-reverse md:flex-row gap-10"
        style={{ boxShadow: "inset 0 1px 3px 5px rgba(0,0,0,0.1)" }}
      >
        <div>
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-50" />
          </Link>
          <p className="mt-3 max-w-[400px] text-sm text-gray-900">
            FreshCart is your trusted multi-vendor marketplace where you can
            find everything you need — from fresh food and groceries to fashion,
            accessories, and more. Shop from multiple sellers in one place with
            ease and confidence.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Logo & Description */}

          {/* Links */}
          <div>
            <h3 className="text-green-600 text-md font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-md font-medium">
              <li>
                <Link to="/Products" className="hover:text-green-600">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/Categories" className="hover:text-green-600">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/Brands" className="hover:text-green-600">
                  Brands
                </Link>
              </li>
              <li>
                <Link to="/Cart" className="hover:text-green-600">
                  Cart
                </Link>
              </li>
              <li>
                <Link to={"/Favourite"} className="hover:text-green-600">
                  Favorite List
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-green-600 text-md font-semibold mb-4">
              Support
            </h3>
            <ul className="space-y-2 text-md font-medium">
              <li>
                <Link to="/About" className="hover:text-green-600">
                  About
                </Link>
              </li>
              <li>
                <Link to="/Contact" className="hover:text-green-600">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex flex-col justify-between">
            <h3 className="text-green-600 text-md font-semibold mb-4">
              Follow Us
            </h3>
            <div className="flex flex-1 space-x-4">
              <Link to="#" className="hover:text-green-600">
                <FaFacebook className="text-2xl" />
              </Link>
              <Link to="#" className="hover:text-green-600">
                <FaTwitter className="text-2xl" />
              </Link>
              <Link to="#" className="hover:text-green-600">
                <FaInstagram className="text-2xl" />
              </Link>
              <Link to="#" className="hover:text-green-600">
                <FaGithub className="text-2xl" />
              </Link>
            </div>
            {/* Bottom Bar */}
            <div className="text-start text-md text-gray-500 mt-6">
              © {new Date().getFullYear()}{" "}
              <span className="text-green-600 font-semibold">FreshCart</span>.
              All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition duration-300"
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
}
