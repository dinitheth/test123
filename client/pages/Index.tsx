import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero Section with Categories */}
      <section className="bg-fs-cyan py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Category Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Mens Card */}
            <Link to="/shop/mens" className="group">
              <div className="bg-white rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-96 bg-gray-300 relative flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop" 
                    alt="Men's Fashion" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-3xl font-bold text-black">MENS</h3>
                </div>
              </div>
            </Link>

            {/* Womens Card */}
            <Link to="/shop/womens" className="group">
              <div className="bg-white rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-96 bg-gray-300 relative flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1508231143fbf11b36f20c69b6d30ab5d2c3db8cb?w=400&h=500&fit=crop" 
                    alt="Women's Fashion" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-3xl font-bold text-black">WOMENS</h3>
                </div>
              </div>
            </Link>

            {/* Kids Card */}
            <Link to="/shop/kids" className="group">
              <div className="bg-white rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-96 bg-gray-300 relative flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=400&h=500&fit=crop" 
                    alt="Kids Fashion" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-3xl font-bold text-black">KIDS</h3>
                </div>
              </div>
            </Link>

            {/* Accessories Card */}
            <Link to="/shop/accessories" className="group">
              <div className="bg-white rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-96 bg-gray-300 relative flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop" 
                    alt="Accessories" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-3xl font-bold text-black">ACCESSORIES</h3>
                </div>
              </div>
            </Link>
          </div>

          {/* Shop Now Button */}
          <div className="flex justify-center">
            <Link to="/shop" className="bg-fs-cyan text-black font-bold px-8 py-3 text-xl border-4 border-black hover:bg-opacity-90">
              SHOP NOW
            </Link>
          </div>
        </div>
      </section>

      {/* Men's Best Selling Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">MEN'S BEST SELLING</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {menProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Women's Best Selling Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">WOMEN'S BEST SELLING</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {womenProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Kids Best Selling Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">KID'S BEST SELLING</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {kidsProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Accessories Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">ACCESSORIES BEST SELLING</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {accessoriesProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-white rounded overflow-hidden shadow-md hover:shadow-lg transition-shadow">
        <div className="h-72 bg-gray-300 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
          />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-bold text-black mb-2">{product.name}</h3>
          <p className="text-xl font-bold text-black">{product.price}</p>
        </div>
      </div>
    </Link>
  );
}

const menProducts: Product[] = [
  {
    id: 'mens-1',
    name: "Men's Polo T Shirt",
    price: 'LKR 2,150.00',
    image: 'https://images.unsplash.com/photo-1618099747108-2e7e65f47f4c?w=400&h=500&fit=crop'
  },
  {
    id: 'mens-2',
    name: 'Full Sleeve T-Shirt',
    price: 'LKR 2,500.00',
    image: 'https://images.unsplash.com/photo-1595777712802-6cad2d1b8b27?w=400&h=500&fit=crop'
  },
  {
    id: 'mens-3',
    name: 'Casual Summer Shirt',
    price: 'LKR 3,600.00',
    image: 'https://images.unsplash.com/photo-1631521874148-fac80765f6b5?w=400&h=500&fit=crop'
  },
  {
    id: 'mens-4',
    name: 'Slim Fit Black Trouser',
    price: 'LKR 3,850.00',
    image: 'https://images.unsplash.com/photo-1473180144351-add3effeed9f?w=400&h=500&fit=crop'
  }
];

const womenProducts: Product[] = [
  {
    id: 'womens-1',
    name: 'Elegant Floral Dress',
    price: 'LKR 6,500.00',
    image: 'https://images.unsplash.com/photo-1595777712802-6cad2d1b8b27?w=400&h=500&fit=crop'
  },
  {
    id: 'womens-2',
    name: 'Striped Satin Blouse',
    price: 'LKR 3,200.00',
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=500&fit=crop'
  },
  {
    id: 'womens-3',
    name: 'High Waist Wide Leg Pant',
    price: 'LKR 4,800.00',
    image: 'https://images.unsplash.com/photo-1506629082632-421bfe45540f?w=400&h=500&fit=crop'
  },
  {
    id: 'womens-4',
    name: 'Summer skirt outfits',
    price: 'LKR 2,100.00',
    image: 'https://images.unsplash.com/photo-1598808503296-7ee2b5e71d96?w=400&h=500&fit=crop'
  }
];

const kidsProducts: Product[] = [
  {
    id: 'kids-1',
    name: "Skirt and Blouse",
    price: 'LKR 2,500.00',
    image: 'https://images.unsplash.com/photo-1527116ad2e582fe8429784e121a23eae97198acd?w=400&h=500&fit=crop'
  },
  {
    id: 'kids-2',
    name: "Kid's Hoodie",
    price: 'LKR 2,100.00',
    image: 'https://images.unsplash.com/photo-1569880153394-e4df00122b8d?w=400&h=500&fit=crop'
  },
  {
    id: 'kids-3',
    name: 'Cotton Kurta & Sharara Set',
    price: 'LKR 4,500.00',
    image: 'https://images.unsplash.com/photo-1577209840635-08df4f6f9b12?w=400&h=500&fit=crop'
  },
  {
    id: 'kids-4',
    name: 'Cargo Pant',
    price: 'LKR 2,800.00',
    image: 'https://images.unsplash.com/photo-1516762356938-aad932e63c3f?w=400&h=500&fit=crop'
  }
];

const accessoriesProducts: Product[] = [
  {
    id: 'acc-1',
    name: 'Leather Handbag',
    price: 'LKR 3,500.00',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=500&fit=crop'
  },
  {
    id: 'acc-2',
    name: 'Stylish Cap',
    price: 'LKR 2,100.00',
    image: 'https://images.unsplash.com/photo-1588795538326-c5b1e9f80a1b?w=400&h=500&fit=crop'
  },
  {
    id: 'acc-3',
    name: 'Sunglasses',
    price: 'LKR 3,200.00',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=500&fit=crop'
  },
  {
    id: 'acc-4',
    name: "Men's or Women's Shoe's",
    price: 'LKR 4,500.00',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=500&fit=crop'
  }
];
