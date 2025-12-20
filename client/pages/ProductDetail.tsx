import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Heart, Search } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface ProductData {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  availability: string;
  sizes: string[];
  colors?: string[];
}

export default function ProductDetail() {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  // Sample product data - in a real app, you'd fetch this from a backend
  const products: { [key: string]: ProductData } = {
    'mens-1': {
      id: 'mens-1',
      name: "Men's Polo T Shirt Short Sleeve Casual Contrast Color Pocket T Shirts Stylish Golf Sports Tees Lightweight Summer Work Tops",
      price: 'LKR 2,150.00',
      description: 'A comfortable and stylish polo t-shirt perfect for casual wear and sports activities.',
      image: 'https://images.unsplash.com/photo-1618099747108-2e7e65f47f4c?w=600&h=800&fit=crop',
      availability: 'In Stock',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Black', 'Blue', 'White']
    },
    'womens-1': {
      id: 'womens-1',
      name: 'Fashion Print Dress Women 2025 New Casual Women\'S Dresses High-End Lantern Sleeve Elegant Long Floral Dress',
      price: 'LKR 6,500.00',
      description: 'An elegant and fashionable dress perfect for casual outings and special occasions.',
      image: 'https://images.unsplash.com/photo-1595777712802-6cad2d1b8b27?w=600&h=800&fit=crop',
      availability: 'In Stock',
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['Blue', 'Red', 'Pink']
    },
    'kids-1': {
      id: 'kids-1',
      name: 'Embrace effortless elegance with our Stylish Dress and Sets for Kids, designed to elevate your kids style with grace and comfort.',
      price: 'LKR 2,500.00',
      description: 'A beautiful and comfortable dress set for kids that combines style with comfort.',
      image: 'https://images.unsplash.com/photo-1527116ad2e582fe8429784e121a23eae97198acd?w=600&h=800&fit=crop',
      availability: 'In Stock',
      sizes: ['S', 'M', 'L', 'XL']
    },
    'acc-1': {
      id: 'acc-1',
      name: 'Premium Leather Handbag',
      price: 'LKR 3,500.00',
      description: 'A stylish and durable leather handbag perfect for everyday use or special occasions.',
      image: 'https://images.unsplash.com/photo-1548036328-c5b1e9f80a1b?w=600&h=800&fit=crop',
      availability: 'In Stock',
      sizes: [],
      colors: ['Pink', 'Dark Blue', 'Beige']
    }
  };

  const product = products[productId || ''] || products['mens-1'];

  const handleAddToCart = () => {
    alert(`Added ${quantity} item(s) to cart!`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <div className="flex-1 max-w-7xl mx-auto w-full px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="flex flex-col gap-4">
            <div className="relative h-96 md:h-[600px] bg-gray-100 rounded overflow-hidden">
              <img 
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Heart and Search Icons */}
            <div className="flex gap-4">
              <button className="border-2 border-black p-3 rounded hover:bg-gray-100">
                <Search size={24} className="text-black" />
              </button>
              <button className="border-2 border-black p-3 rounded hover:bg-gray-100">
                <Heart size={24} className="text-black" />
              </button>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-black mb-4">{product.name}</h1>
              <p className="text-gray-700 text-lg leading-relaxed">{product.description}</p>
            </div>

            {/* Size Selection */}
            {product.sizes.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-black mb-4">Size :</h3>
                <div className="flex gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded font-bold transition-all ${
                        selectedSize === size
                          ? 'bg-black text-white'
                          : 'bg-gray-300 text-black hover:bg-gray-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <div>
                <h3 className="text-xl font-bold text-black mb-4">Colour :</h3>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded font-bold transition-all ${
                        selectedColor === color
                          ? 'border-2 border-black'
                          : 'border-2 border-gray-300 hover:border-black'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Availability */}
            <div>
              <p className="text-lg text-black">
                Availability : <span className="text-fs-green font-bold">{product.availability}</span>
              </p>
            </div>

            {/* Price */}
            <div>
              <p className="text-3xl font-bold text-black">{product.price}</p>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-bold text-black mb-3">Quantity</h3>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="bg-gray-300 text-black font-bold w-10 h-10 rounded hover:bg-gray-400"
                >
                  -
                </button>
                <span className="text-2xl font-bold text-black w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="bg-gray-300 text-black font-bold w-10 h-10 rounded hover:bg-gray-400"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-fs-cyan text-black font-bold py-4 text-xl rounded hover:opacity-90 transition-all"
            >
              ADD TO CART
            </button>

            {/* Back Link */}
            <Link to="/shop" className="text-fs-cyan font-bold underline hover:opacity-80">
              Back to Shop
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
