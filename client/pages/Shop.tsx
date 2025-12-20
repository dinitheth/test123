import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  category: string;
}

export default function Shop() {
  const { category = 'all' } = useParams<{ category?: string }>();

  const allProducts: Product[] = [
    // Men's Products
    {
      id: 'mens-1',
      name: "Men's Polo T Shirt",
      price: 'LKR 2,150.00',
      image: 'https://images.unsplash.com/photo-1618099747108-2e7e65f47f4c?w=400&h=500&fit=crop',
      category: 'mens'
    },
    {
      id: 'mens-2',
      name: 'Full Sleeve T-Shirt',
      price: 'LKR 2,500.00',
      image: 'https://images.unsplash.com/photo-1595777712802-6cad2d1b8b27?w=400&h=500&fit=crop',
      category: 'mens'
    },
    {
      id: 'mens-3',
      name: 'Casual Summer Shirt',
      price: 'LKR 3,600.00',
      image: 'https://images.unsplash.com/photo-1631521874148-fac80765f6b5?w=400&h=500&fit=crop',
      category: 'mens'
    },
    {
      id: 'mens-4',
      name: 'Slim Fit Black Trouser',
      price: 'LKR 3,850.00',
      image: 'https://images.unsplash.com/photo-1473180144351-add3effeed9f?w=400&h=500&fit=crop',
      category: 'mens'
    },
    // Women's Products
    {
      id: 'womens-1',
      name: 'Elegant Floral Dress',
      price: 'LKR 6,500.00',
      image: 'https://images.unsplash.com/photo-1595777712802-6cad2d1b8b27?w=400&h=500&fit=crop',
      category: 'womens'
    },
    {
      id: 'womens-2',
      name: 'Striped Satin Blouse',
      price: 'LKR 3,200.00',
      image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=500&fit=crop',
      category: 'womens'
    },
    {
      id: 'womens-3',
      name: 'High Waist Wide Leg Pant',
      price: 'LKR 4,800.00',
      image: 'https://images.unsplash.com/photo-1506629082632-421bfe45540f?w=400&h=500&fit=crop',
      category: 'womens'
    },
    {
      id: 'womens-4',
      name: 'Summer skirt outfits',
      price: 'LKR 2,100.00',
      image: 'https://images.unsplash.com/photo-1598808503296-7ee2b5e71d96?w=400&h=500&fit=crop',
      category: 'womens'
    },
    // Kids Products
    {
      id: 'kids-1',
      name: "Skirt and Blouse",
      price: 'LKR 2,500.00',
      image: 'https://images.unsplash.com/photo-1527116ad2e582fe8429784e121a23eae97198acd?w=400&h=500&fit=crop',
      category: 'kids'
    },
    {
      id: 'kids-2',
      name: "Kid's Hoodie",
      price: 'LKR 2,100.00',
      image: 'https://images.unsplash.com/photo-1569880153394-e4df00122b8d?w=400&h=500&fit=crop',
      category: 'kids'
    },
    {
      id: 'kids-3',
      name: 'Cotton Kurta & Sharara Set',
      price: 'LKR 4,500.00',
      image: 'https://images.unsplash.com/photo-1577209840635-08df4f6f9b12?w=400&h=500&fit=crop',
      category: 'kids'
    },
    {
      id: 'kids-4',
      name: 'Cargo Pant',
      price: 'LKR 2,800.00',
      image: 'https://images.unsplash.com/photo-1516762356938-aad932e63c3f?w=400&h=500&fit=crop',
      category: 'kids'
    },
    // Accessories
    {
      id: 'acc-1',
      name: 'Leather Handbag',
      price: 'LKR 3,500.00',
      image: 'https://images.unsplash.com/photo-1548036328-c5b1e9f80a1b?w=400&h=500&fit=crop',
      category: 'accessories'
    },
    {
      id: 'acc-2',
      name: 'Stylish Cap',
      price: 'LKR 2,100.00',
      image: 'https://images.unsplash.com/photo-1588795338326-c5b1e9f80a1b?w=400&h=500&fit=crop',
      category: 'accessories'
    },
    {
      id: 'acc-3',
      name: 'Sunglasses',
      price: 'LKR 3,200.00',
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=500&fit=crop',
      category: 'accessories'
    },
    {
      id: 'acc-4',
      name: "Men's or Women's Shoe's",
      price: 'LKR 4,500.00',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=500&fit=crop',
      category: 'accessories'
    }
  ];

  const filteredProducts = category === 'all' 
    ? allProducts 
    : allProducts.filter(p => p.category === category);

  const getCategoryTitle = () => {
    const titles: { [key: string]: string } = {
      mens: "MEN'S COLLECTION",
      womens: "WOMEN'S COLLECTION",
      kids: "KID'S COLLECTION",
      accessories: "ACCESSORIES",
      all: 'ALL PRODUCTS'
    };
    return titles[category] || 'ALL PRODUCTS';
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <div className="flex-1 max-w-7xl mx-auto w-full px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">{getCategoryTitle()}</h1>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 mb-6">No products found in this category.</p>
            <Link to="/" className="bg-fs-cyan text-black font-bold px-8 py-3 inline-block hover:opacity-90">
              Back to Home
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className="group">
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
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
