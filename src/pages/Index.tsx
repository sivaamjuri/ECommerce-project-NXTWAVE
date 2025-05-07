
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ProductGrid } from '@/components/products/ProductGrid';
import { ProductType } from '@/types/product';
import { toast } from 'sonner';

export default function Index() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);
  const [language, setLanguage] = useState<'english' | 'hindi' | 'telugu'>('english');
  const [favorites, setFavorites] = useState<number[]>([]);
  const [filterVisible, setFilterVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState<string>('newest');
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
      toast.error('Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
    
    // Show toast notification
    const product = products.find(p => p.id === productId);
    if (product) {
      if (favorites.includes(productId)) {
        toast.success(`Removed ${product.title.substring(0, 20)}... from favorites`);
      } else {
        toast.success(`Added ${product.title.substring(0, 20)}... to favorites`);
      }
    }
  };

  const toggleFilterVisibility = () => {
    setFilterVisible(prev => !prev);
  };

  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Header 
        favoritesCount={favorites.length} 
        language={language}
        onLanguageChange={setLanguage}
        onSearch={setSearchQuery}
      />
      <main className="flex-grow">
        <ProductGrid 
          products={products}
          loading={loading}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          filterVisible={filterVisible}
          toggleFilterVisibility={toggleFilterVisibility}
          searchQuery={searchQuery}
          sortOption={sortOption}
          setSortOption={setSortOption}
          language={language}
        />
      </main>
      <Footer language={language} />
    </div>
  );
}
