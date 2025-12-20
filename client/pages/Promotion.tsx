import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface PromotionBanner {
  id: string;
  title: string;
  discount: string;
  category: string;
  image: string;
  link: string;
}

export default function Promotion() {
  const promotions: PromotionBanner[] = [
    {
      id: "promo-1",
      title: "25% OFF ON MEN'S NEW COLLECTIONS",
      discount: "25%",
      category: "MENS",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=400&fit=crop",
      link: "/shop/mens",
    },
    {
      id: "promo-2",
      title: "15% OFF ON WOMEN'S NEW COLLECTION",
      discount: "15%",
      category: "WOMENS",
      image:
        "https://images.unsplash.com/photo-1508231143fbf11b36f20c69b6d30ab5d2c3db8cb?w=600&h=400&fit=crop",
      link: "/shop/womens",
    },
    {
      id: "promo-3",
      title: "30% OFF ON KID'S NEW COLLECTION",
      discount: "30%",
      category: "KIDS",
      image:
        "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&h=400&fit=crop",
      link: "/shop/kids",
    },
    {
      id: "promo-4",
      title: "10% OFF ON ACCESSORIES",
      discount: "10%",
      category: "ACCESSORIES",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=400&fit=crop",
      link: "/shop/accessories",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-fs-cyan">
      <Header />

      <div className="flex-1 max-w-7xl mx-auto w-full px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-black">
          SEASONAL PROMOTIONS
        </h1>

        {/* Promotions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {promotions.map((promo) => (
            <Link key={promo.id} to={promo.link} className="group">
              <div className="bg-white rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow relative">
                <div className="h-64 bg-gray-300 overflow-hidden relative">
                  <img
                    src={promo.image}
                    alt={promo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  {/* Discount Badge */}
                  <div className="absolute top-4 right-4 bg-fs-cyan text-black font-bold px-4 py-2 rounded text-lg">
                    {promo.discount} OFF
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">
                    {promo.title}
                  </h3>
                  <Link
                    to={promo.link}
                    className="bg-fs-cyan text-black font-bold px-6 py-2 inline-block hover:opacity-90"
                  >
                    SHOP NOW
                  </Link>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Featured Promotions */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-black text-center">
            FEATURED DEALS
          </h2>

          {/* Large Featured Promo */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="h-96 bg-gray-300 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1595777712802-6cad2d1b8b27?w=600&h=400&fit=crop"
                  alt="Featured Deal"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-black mb-4">
                  EXCLUSIVE COLLECTION
                </h3>
                <p className="text-lg text-gray-700 mb-6">
                  Discover our new seasonal collection with incredible discounts
                  on premium quality clothing for the entire family.
                </p>
                <div className="flex gap-4">
                  <Link
                    to="/shop"
                    className="bg-fs-cyan text-black font-bold px-8 py-3 hover:opacity-90"
                  >
                    SHOP NOW
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
