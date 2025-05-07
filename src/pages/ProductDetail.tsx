
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ProductType } from '@/types/product';
import { toast } from 'sonner';

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState<'english' | 'hindi' | 'telugu'>('english');
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product details:', error);
        toast.error('Failed to load product details');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const translations = {
    english: {
      addToCart: "Add to Cart",
      description: "Description",
      category: "Category",
      rating: "Rating",
      price: "Price",
      loading: "Loading product details..."
    },
    hindi: {
      addToCart: "कार्ट में जोड़ें",
      description: "विवरण",
      category: "श्रेणी",
      rating: "रेटिंग",
      price: "कीमत",
      loading: "उत्पाद विवरण लोड हो रहा है..."
    },
    telugu: {
      addToCart: "కార్ట్‌కి జోడించండి",
      description: "వివరణ",
      category: "వర్గం",
      rating: "రేటింగ్",
      price: "ధర",
      loading: "ఉత్పత్తి వివరాలు లోడ్ అవుతున్నాయి..."
    }
  };

  const t = translations[language];

  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Header 
        favoritesCount={favorites.length} 
        language={language} 
        onLanguageChange={setLanguage}
        onSearch={() => {}}
      />
      <main className="flex-grow container mx-auto px-4 py-8">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
            <span className="ml-4">{t.loading}</span>
          </div>
        ) : product ? (
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 flex justify-center items-center bg-white p-4">
              <img 
                src={product.image} 
                alt={product.title} 
                className="max-h-[400px] object-contain"
              />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-2xl font-bold uppercase text-[#252020] mb-4">{product.title}</h1>
              <div className="flex items-center gap-2 mb-4">
                <button 
                  onClick={() => product && toggleFavorite(product.id)}
                  className="text-gray-500 hover:text-red-500"
                  aria-label={favorites.includes(product.id) ? "Remove from favorites" : "Add to favorites"}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill={favorites.includes(product.id) ? "red" : "none"} 
                    stroke={favorites.includes(product.id) ? "red" : "currentColor"}
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                  </svg>
                </button>
                <p className="text-xl font-bold text-[#252020]">${product.price}</p>
              </div>
              
              <div className="mb-4">
                <h2 className="text-lg font-semibold mb-2">{t.category}</h2>
                <p className="text-gray-600 capitalize">{product.category}</p>
              </div>
              
              <div className="mb-4">
                <h2 className="text-lg font-semibold mb-2">{t.description}</h2>
                <p className="text-gray-600">{product.description}</p>
              </div>
              
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-2">{t.rating}</h2>
                <div className="flex items-center">
                  <div className="flex items-center mr-2">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        className={`w-5 h-5 ${i < Math.round(product.rating.rate) ? 'text-yellow-500' : 'text-gray-300'}`}
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-600">{product.rating.rate} ({product.rating.count} reviews)</span>
                </div>
              </div>
              
              <button className="w-full py-3 bg-black text-white uppercase font-bold hover:bg-gray-800 transition-colors">
                {t.addToCart}
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-lg text-gray-500">Product not found</p>
          </div>
        )}
      </main>
      <Footer language={language} />
    </div>
  );
}
