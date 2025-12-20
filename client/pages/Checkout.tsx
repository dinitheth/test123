import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Checkout() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    contact: '',
    paymentMethod: 'card'
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.firstName && formData.lastName && formData.address && formData.contact) {
      navigate('/order-confirmation');
    }
  };

  // Sample cart items (in a real app, you'd get this from state/props)
  const cartItems = [
    { name: "Men's Full Sleeve T-Shirt", price: 2500, quantity: 1 },
    { name: 'Striped Satin Blouse', price: 3200, quantity: 1 },
    { name: 'Skirt and Blouse', price: 5000, quantity: 2 }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <div className="flex-1 max-w-7xl mx-auto w-full px-4 py-12">
        {/* Back Link */}
        <div className="mb-8 text-right">
          <Link to="/cart" className="text-black font-bold text-lg hover:opacity-80">
            Back to Shopping
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-center mb-12">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Checkout Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name Row */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-2xl font-bold text-black mb-3">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full bg-gray-200 border-none rounded px-4 py-3 text-black"
                  />
                </div>
                <div>
                  <label className="block text-2xl font-bold text-black mb-3">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full bg-gray-200 border-none rounded px-4 py-3 text-black"
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="block text-2xl font-bold text-black mb-3">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full bg-gray-200 border-none rounded px-4 py-3 text-black"
                />
              </div>

              {/* Contact */}
              <div>
                <label className="block text-2xl font-bold text-black mb-3">Contact (Email/Phone Number)</label>
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  className="w-full bg-gray-200 border-none rounded px-4 py-3 text-black"
                />
              </div>

              {/* Payment Method */}
              <div>
                <label className="block text-2xl font-bold text-black mb-3">Payment Method</label>
                <select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleChange}
                  className="w-full bg-gray-200 border-none rounded px-4 py-3 text-black"
                >
                  <option value="card">Select payment option</option>
                  <option value="card">Credit/Debit Card</option>
                  <option value="bank">Bank Transfer</option>
                  <option value="cod">Cash on Delivery</option>
                </select>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-black mb-8">Order Summary</h2>

              {/* Items */}
              <div className="space-y-6 mb-8 pb-8 border-b border-gray-300">
                {cartItems.map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <div>
                      <p className="text-lg font-bold text-black">{item.name}</p>
                      <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                    </div>
                    <p className="text-lg font-bold text-black">LKR {(item.price * item.quantity).toLocaleString('en-US')}.00</p>
                  </div>
                ))}
              </div>

              {/* Subtotal */}
              <div className="flex justify-between mb-8">
                <p className="text-xl text-black">Sub Total :</p>
                <p className="text-2xl font-bold text-black">LKR {subtotal.toLocaleString('en-US')}.00</p>
              </div>

              {/* Place Order Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-fs-cyan text-black font-bold py-3 text-lg rounded hover:opacity-90 transition-all"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
