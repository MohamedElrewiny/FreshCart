import Logo from "../../../assets/Images/Navbar/Logo.svg";
import { TiShoppingCart } from "react-icons/ti";
import { MdOutlineFavorite } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/Products" },
    { name: "Categories", path: "/Categories" },
    { name: "Brands", path: "/Brands" },
  ];

  
  return (
    <nav className="flex items-center border-b border-gray-200 shadow-md gap-5 p-5 ">
      {/* Logo for Website */}
      <Link href="/" >
        <img src={Logo} alt="Logo" className="w-50" />
      </Link>

      {/* Navigation Links */}
      <ul className="flex items-center gap-3 flex-1">
        {links.map((link) => (
          <li key={link.name}>
            <Link
              to={link.path}
              className="text-xl font-medium hover:text-green-600 transition-colors duration-200"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Authentication && Cart && Favorite */}
      <ul className="flex items-center gap-3 ">
        <li>
          <Link to="/Cart" className="relative">
            <div className="bg-gray-50 absolute -top-4 border border-green-600 start-3  text-[13px] w-6 h-6 flex justify-center items-center rounded-full">15</div>
            <TiShoppingCart className="text-2xl  text-green-600"/>
          </Link>
        </li>
        <li>
          <Link  to={'/Favourite'}>
            <MdOutlineFavorite className="text-2xl  text-green-600"/>
          </Link> 
        </li>
        <li>
          <Link  to={'/Login'} className="text-xl font-medium hover:text-green-600 transition-colors duration-200" >Login</Link> 
        </li>
        <li>
          <Link  to={'/Register'} className="text-xl font-medium hover:text-green-600 transition-colors duration-200" >Register</Link> 
        </li>
        <li>
          <Link  href={'/Logout'} className="text-xl font-medium hover:text-green-600 transition-colors duration-200" >Logout</Link> 
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
