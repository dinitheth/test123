import { Link } from 'react-router-dom';
import { Facebook, Instagram, MessageCircle, X } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-black py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Company Info */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">OUR COMPANY</h3>
          <p className="text-sm leading-relaxed">
            F&S is one of the emerging retail brand clothing store among the retail industries. 
            We provide wide range of clothing footwear and accessories to all customers at an 
            affordable price yet with a splendid quality. We have all kind of items for Men, 
            Women & Kids for a family shopping with recent fashion trend and also we are 
            introducing new designs for all seasons.
          </p>
        </div>

        {/* Info Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">INFO</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:underline">About Us</Link></li>
            <li><Link to="/" className="hover:underline">Store Locator</Link></li>
            <li><Link to="/" className="hover:underline">Be a supplier</Link></li>
            <li><Link to="/" className="hover:underline">Careers</Link></li>
          </ul>
        </div>

        {/* Follow & Payment */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold mb-3">FOLLOW US:</h3>
            <div className="flex gap-3">
              <a href="#" className="bg-blue-600 p-2 rounded text-white hover:bg-blue-700">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-pink-600 p-2 rounded text-white hover:bg-pink-700">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-green-600 p-2 rounded text-white hover:bg-green-700">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="bg-black p-2 rounded text-white hover:bg-gray-800">
                <X size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">WE ACCEPT:</h3>
            <div className="flex gap-2">
              <img src="/images/visa.png" alt="Visa" className="h-8" />
              <img src="/images/mastercard.png" alt="Mastercard" className="h-8" />
              <img src="/images/amex.png" alt="American Express" className="h-8" />
            </div>
          </div>

          <div>
            <p className="font-semibold text-lg">CASH ON DELIVERY</p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-300 mt-8 pt-6 text-center text-sm">
        <p>F&S Clothings 2025. All Rights Reserved.</p>
        <p>Design by Resilience Information Solutions (Pvt) Ltd.</p>
      </div>
    </footer>
  );
}
