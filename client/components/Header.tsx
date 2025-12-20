import { Link } from "react-router-dom";
import { ShoppingCart, Search, Heart } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-fs-cyan sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="bg-white p-3 rounded">
            <h1 className="text-2xl font-bold text-black">F&S</h1>
            <p className="text-xs text-black font-semibold">CLOTHING</p>
          </div>
        </Link>

        {/* Search Bar */}
        <div className="flex-1 mx-8">
          <div className="bg-white border border-gray-300 rounded px-4 py-2 flex items-center">
            <Search size={20} className="text-black" />
            <input
              type="text"
              placeholder="Search..."
              className="ml-2 w-full border-0 outline-none bg-white text-black"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <Link
            to="/"
            className="text-black font-bold text-lg hover:opacity-80"
          >
            HOME
          </Link>
          <Link
            to="/shop"
            className="text-black font-bold text-lg hover:opacity-80"
          >
            SHOP
          </Link>
          <Link
            to="/promotion"
            className="text-black font-bold text-lg hover:opacity-80"
          >
            PROMOTION
          </Link>
          <Link
            to="/contact"
            className="text-black font-bold text-lg hover:opacity-80"
          >
            CONTACT
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4 ml-8">
          <button className="bg-white p-2 rounded hover:bg-gray-100">
            <Heart size={24} className="text-black" />
          </button>
          <Link to="/cart" className="bg-white p-2 rounded hover:bg-gray-100">
            <ShoppingCart size={24} className="text-black" />
          </Link>
          <Link
            to="/login"
            className="bg-fs-cyan text-black font-bold px-6 py-2 rounded border-2 border-black hover:bg-opacity-90"
          >
            LOGIN
          </Link>
        </div>
      </div>
    </header>
  );
}
