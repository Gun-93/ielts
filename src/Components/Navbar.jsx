import { useState } from "react";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuItems = ["Home", "Courses", "About", "Contact"];
  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">IELTS<span className="text-red-500">Pro</span></h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {menuItems.map((item) => (
            <li key={item} className="hover:text-blue-600 cursor-pointer">{item}</li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4">
          {menuItems.map((item) => (
            <li
              key={item}
              className="border-b pb-2 hover:text-blue-600 cursor-pointer">{item}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};
export default Navbar;
