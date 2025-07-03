"use client"

import { Facebook, Twitter, Instagram } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-[#1e3a8a] text-white py-8 px-8 ">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1 - Filters */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Filters</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">
                  All Products
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Electronics
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Clothing
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Home & Garden
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 - About */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">About Us</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-200 hover:text-white transition-colors text-sm">
                  Contact
                </a>
              </li>
              
            </ul>
          </div>

          {/* Column 3 - Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-blue-200 hover:text-white transition-colors p-2 hover:bg-blue-700 rounded-full"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-blue-200 hover:text-white transition-colors p-2 hover:bg-blue-700 rounded-full"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-blue-200 hover:text-white transition-colors p-2 hover:bg-blue-700 rounded-full"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-blue-700 pt-6">
          <div className="text-center">
            <p className="text-blue-200 text-sm">© 2024 American. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
