import { Link } from "react-router-dom";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function Cart() {
  const [items, setItems] = useState<CartItem[]>([
    {
      id: "mens-2",
      name: "Men's Full Sleeve T-Shirt",
      price: 2500,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1595777712802-6cad2d1b8b27?w=100&h=100&fit=crop",
    },
    {
      id: "womens-2",
      name: "Striped Satin Blouse",
      price: 3200,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=100&h=100&fit=crop",
    },
    {
      id: "kids-1",
      name: "Skirt and Blouse",
      price: 5000,
      quantity: 2,
      image:
        "https://images.unsplash.com/photo-1527116ad2e582fe8429784e121a23eae97198acd?w=100&h=100&fit=crop",
    },
  ]);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity > 0) {
      setItems(
        items.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item,
        ),
      );
    }
  };

  const removeItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <div className="flex-1 max-w-7xl mx-auto w-full px-4 py-12">
        {/* Back Link */}
        <div className="mb-8 text-right">
          <Link
            to="/shop"
            className="text-black font-bold text-lg hover:opacity-80"
          >
            Back to Shopping
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-center mb-12">
          Your Shopping Cart
        </h1>

        {items.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 mb-6">Your cart is empty</p>
            <Link
              to="/shop"
              className="bg-fs-cyan text-black font-bold px-8 py-3 inline-block hover:opacity-90"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-6 pb-6 border-b border-gray-300"
                >
                  {/* Product Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-32 object-cover rounded"
                  />

                  {/* Product Info */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-black mb-4">
                      {item.name}
                    </h3>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="w-10 h-10 rounded-full bg-fs-cyan text-black font-bold hover:opacity-90"
                      >
                        <Minus className="w-5 h-5 mx-auto" />
                      </button>

                      <span className="text-lg font-bold text-black w-6 text-center">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="w-10 h-10 rounded-full bg-fs-cyan text-black font-bold hover:opacity-90"
                      >
                        <Plus className="w-5 h-5 mx-auto" />
                      </button>

                      <span className="text-xl font-bold text-black ml-4">
                        LKR {item.price * item.quantity}.00
                      </span>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-auto text-red-500 font-bold hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-black mb-8">
                  Order Summary
                </h2>

                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between mb-4 text-black"
                  >
                    <span>
                      {item.name} x{item.quantity}
                    </span>
                    <span>LKR {item.price * item.quantity}.00</span>
                  </div>
                ))}

                <div className="border-t border-gray-300 my-6 pt-6">
                  <div className="flex justify-between text-2xl font-bold text-black">
                    <span>Total :</span>
                    <span>LKR {total.toLocaleString("en-US")}.00</span>
                  </div>
                </div>

                <Link
                  to="/checkout"
                  className="block w-full bg-fs-cyan text-black font-bold py-3 text-center text-lg hover:opacity-90 rounded"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
