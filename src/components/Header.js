'use client';

import Link from 'next/link';
import { ShoppingCart, Search, User } from 'lucide-react';
import { useSelector } from 'react-redux';

const Header = () => {
    const cartItems = useSelector(state => state.cart.items);
    const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <header className="bg-[#0052cc] w-full py-4 px-6 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left: Logo */}
        <div className="text-white text-3xl font-bold tracking-wide">
          Logo
        </div>

        {/* Center: Search Bar */}
        <div className="w-full md:w-1/2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full pl-10 pr-4 py-2 rounded-md bg-transparent placeholder:text-[#f2f4f7] text-sm text-gray-800 border border-white "
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#e0e3e8]" />
          </div>
        </div>

        {/* Right: Cart Button */}
        <div className="flex items-center space-x-4">
          <Link href="/cart">
          <div className="relative">
              <button className="flex items-center gap-2 bg-[#003087] text-white font-medium px-4 py-2 rounded-md hover:bg-blue-900 transition">
                <ShoppingCart className="w-5 h-5" />
                Cart
              </button>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
                  {cartCount}
                </span>
              )}
            </div>
          </Link>
            <div className="hidden md:block">
                <User className="w-6 h-6 text-white" />
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
