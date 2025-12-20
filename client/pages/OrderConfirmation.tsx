import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function OrderConfirmation() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <div className="flex-1 max-w-4xl mx-auto w-full px-4 py-16">
        <div className="text-center space-y-8">
          {/* Success Icon */}
          <div className="flex justify-center">
            <div className="w-32 h-32 rounded-full bg-fs-cyan flex items-center justify-center">
              <CheckCircle size={80} className="text-black" />
            </div>
          </div>

          {/* Main Message */}
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-black">Thanks for shopping with us!</h1>
            <p className="text-2xl text-black">Your order has been confirmed. We'll take good care of it.</p>
            <p className="text-2xl text-black">We'll keep you updated.</p>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
            <button className="bg-green-700 text-white font-bold py-3 px-6 text-lg rounded hover:bg-green-800 transition-all">
              Track My Order
            </button>
            <button className="bg-red-700 text-white font-bold py-3 px-6 text-lg rounded hover:bg-red-800 transition-all">
              View Delivery Details
            </button>
            <button className="bg-gray-600 text-white font-bold py-3 px-6 text-lg rounded hover:bg-gray-700 transition-all">
              Need Help
            </button>
          </div>

          {/* Continue Shopping */}
          <div className="mt-16">
            <Link 
              to="/" 
              className="bg-fs-cyan text-black font-bold py-4 px-8 text-lg rounded inline-block hover:opacity-90 transition-all"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
