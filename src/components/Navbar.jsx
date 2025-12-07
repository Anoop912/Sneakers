import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "ForMen", path: "/ForMen" },
    { name: "ForWomen", path: "/ForWomen" },
    { name: "ForKids", path: "/ForKids" },
    { name: "Categories", path: "/Categories" },
    { name: "NewArrivals", path: "/NewArrivals" },
    { name: "Lookbook", path: "/Lookbook" },
  ];

  return (
    <nav className="w-full shadow-md bg-white sticky top-0 z-50">
      {/* TOP BAR */}
      <div className="flex items-center justify-between px-6 py-3 border-b">
        <h1 className="text-2xl font-bold">
          Snea<span className="text-red-600">ker.</span>
        </h1>

        {/* Search */}
        <div className="hidden md:flex items-center gap-2 w-1/2">
          <select className="border p-2 rounded-lg text-sm">
            <option>All Categories</option>
            <option>Men</option>
            <option>Women</option>
            <option>Kids</option>
          </select>

          <input
            type="text"
            placeholder="Enter your search key..."
            className="border p-2 w-full rounded-lg text-sm"
          />

          <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm">
            Search
          </button>
        </div>

        {/* Cart */}
        <div className="hidden md:flex items-center gap-2 cursor-pointer">
          <ShoppingCart />
          <span className="text-sm">
            My Cart <span className="text-red-600">$0.00</span>
          </span>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* NAV LINKS */}
      <div className="bg-gray-700 text-white">
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 px-6 py-3 text-sm">
          {navItems.map((item) => (
            <li key={item.name} className="cursor-pointer">
              
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `transition ${
                    isActive
                      ? "text-red-500 font-semibold" // ACTIVE STYLE
                      : "hover:text-red-400"
                  }`
                }
              >
                {item.name}
              </NavLink>

            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="md:hidden flex flex-col gap-4 px-6 py-4 bg-gray-800 text-white text-sm">
            {navItems.map((item) => (
              <li key={item.name} onClick={() => setMenuOpen(false)}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `block ${
                      isActive
                        ? "text-red-400 font-semibold"
                        : "hover:text-red-300"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}

