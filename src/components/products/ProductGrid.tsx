
import React, { useState } from 'react';
import { ProductCard } from './ProductCard';
import { FilterSection } from '../filters/FilterSection';
import { ProductType } from '@/types/product';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { ChevronDown } from "lucide-react";

interface ProductGridProps {
  products: ProductType[];
  loading: boolean;
  favorites: number[];
  toggleFavorite: (productId: number) => void;
  filterVisible: boolean;
  toggleFilterVisibility: () => void;
  searchQuery: string;
  sortOption: string;
  setSortOption: (option: string) => void;
  language: 'english' | 'hindi' | 'telugu';
}

const translations = {
  english: {
    discoverProducts: "DISCOVER OUR PRODUCTS",
    description: "Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.",
    items: "Items",
    hideFilter: "HIDE FILTER",
    showFilter: "SHOW FILTER",
    recommended: "RECOMMENDED",
    filters: "FILTERS",
    newestFirst: "Newest First",
    popular: "Popular",
    priceHighToLow: "Price: High to Low",
    priceLowToHigh: "Price: Low to High",
    noProductsFound: "No products found",
  },
  hindi: {
    discoverProducts: "हमारे उत्पाद खोजें",
    description: "लोरेम इप्सम डोलर सिट अमेट कंसेक्टेटुर। अमेट एस्ट पोसुएरे रोनचस स्केलेरिस्क्यू। डोलर इंटेगर स्केलेरिस्क्यू निब अमेट मी उत एलीमेंटम डोलर।",
    items: "आइटम्स",
    hideFilter: "फ़िल्टर छिपाएँ",
    showFilter: "फ़िल्टर दिखाएँ",
    recommended: "अनुशंसित",
    filters: "फ़िल्टर",
    newestFirst: "नवीनतम पहले",
    popular: "लोकप्रिय",
    priceHighToLow: "मूल्य: उच्च से निम्न",
    priceLowToHigh: "मूल्य: निम्न से उच्च",
    noProductsFound: "कोई उत्पाद नहीं मिला",
  },
  telugu: {
    discoverProducts: "మా ఉత్పత్తులను కనుగొనండి",
    description: "లోరెం ఇప్సం డోలర్ సిట్ అమెట్ కన్సెక్టెటుర్. అమేట్ ఎస్ట్ పోసుయెర్ రోన్కస్ స్కెలెరిస్క్. డోలర్ ఇంటెగర్ స్కెలెరిస్క్యూ నిబ్ అమెట్ మి ఉట్ ఎలిమెంటమ్ డోలర్.",
    items: "వస్తువులు",
    hideFilter: "ఫిల్టర్ దాచండి",
    showFilter: "ఫిల్టర్ చూపించండి",
    recommended: "సిఫార్సు చేయబడింది",
    filters: "ఫిల్టర్లు",
    newestFirst: "క్రొత్తవి మొదట",
    popular: "జనాదరణ పొందినవి",
    priceHighToLow: "ధర: ఎక్కువ నుండి తక్కువకు",
    priceLowToHigh: "ధర: తక్కువ నుండి ఎక్కువకు",
    noProductsFound: "ఉత్పత్తులు కనుగొనబడలేదు",
  },
};

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  loading,
  favorites,
  toggleFavorite,
  filterVisible,
  toggleFilterVisibility,
  searchQuery,
  sortOption,
  setSortOption,
  language
}) => {
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({
    idealFor: [],
    occasion: [],
    work: [],
    fabric: [],
    segment: [],
    suitableFor: [],
    rawMaterials: [],
    pattern: [],
  });
  
  const t = translations[language];
  
  // Filter products based on searchQuery and selected filters
  const filteredProducts = React.useMemo(() => {
    let filtered = [...products];
    
    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(product => 
        product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Apply filters based on product title/description for demo purposes
    // In a real app, products would have proper attributes for these filters
    Object.entries(selectedFilters).forEach(([filterType, values]) => {
      if (values.length > 0) {
        filtered = filtered.filter(product => {
          // Check if any selected filter value is in the product title or description
          return values.some(value => 
            product.title.toLowerCase().includes(value.toLowerCase()) || 
            product.description.toLowerCase().includes(value.toLowerCase()) ||
            (filterType === 'idealFor' && value === 'men' && product.category.toLowerCase().includes("men's")) ||
            (filterType === 'idealFor' && value === 'women' && product.category.toLowerCase().includes("women's"))
          );
        });
      }
    });
    
    // Sort products
    switch(sortOption) {
      case 'newest':
        filtered.sort((a, b) => b.id - a.id);
        break;
      case 'popular':
        filtered.sort((a, b) => b.rating.count - a.rating.count);
        break;
      case 'priceHighToLow':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'priceLowToHigh':
        filtered.sort((a, b) => a.price - b.price);
        break;
    }
    
    return filtered;
  }, [products, searchQuery, sortOption, selectedFilters]);
  
  // Handle filter change
  const handleFilterChange = (filterType: string, values: string[]) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: values
    }));
  };

  return (
    <div className="flex w-full flex-col px-6 md:px-20 py-10 max-md:px-4">
      <div className="max-w-[1248px] mx-auto w-full">
        <h1 className="text-[#252020] text-center text-4xl md:text-6xl font-normal tracking-[1px] uppercase mx-auto md:max-w-[800px]">
          {t.discoverProducts}
        </h1>
        <p className="text-[#252020] text-center text-lg md:text-[22px] font-normal leading-relaxed md:leading-10 mx-auto max-w-full md:max-w-[721px] mt-4 px-4">
          {t.description}
        </p>
        
        <hr className="border-neutral-200 border w-full max-w-[1248px] h-px mt-12 md:mt-[71px] border-solid" />
        
        <div className="bg-white w-full max-w-[1248px] pt-6">
          <div className="flex flex-col md:flex-row w-full items-start md:items-center gap-4 justify-between mb-6">
            {/* Item count + filter toggle for desktop */}
            <div className="flex items-center flex-wrap gap-4 md:gap-[40px]">
              <div className="text-[#252020] text-lg font-bold uppercase">
                {filteredProducts.length} {t.items}
              </div>
              <button 
                onClick={toggleFilterVisibility}
                className="items-center flex gap-2 text-base text-[#888792] font-normal underline bg-white"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/8b82f75be9f94884997a493107b7bf6b/ab44b220031ffb5036c75897d12f9a83eb2afbc3?placeholderIfAbsent=true"
                  alt="Filter icon"
                  className="aspect-[1] object-contain w-4 shrink-0"
                />
                <span className="text-[#888792] underline">
                  {filterVisible ? t.hideFilter : t.showFilter}
                </span>
              </button>
            </div>
            
            {/* Sort dropdown for desktop */}
            <div className="hidden md:block">
              <Select
                value={sortOption}
                onValueChange={setSortOption}
              >
                <SelectTrigger className="w-[180px] flex items-center gap-2 text-lg font-bold uppercase">
                  <SelectValue placeholder={t.recommended} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">{t.newestFirst}</SelectItem>
                  <SelectItem value="popular">{t.popular}</SelectItem>
                  <SelectItem value="priceHighToLow">{t.priceHighToLow}</SelectItem>
                  <SelectItem value="priceLowToHigh">{t.priceLowToHigh}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {/* Mobile filter and sort buttons */}
            <div className="flex w-full md:hidden gap-2">
              <button 
                className="flex-1 py-2 px-3 border rounded-md flex items-center justify-center gap-2 bg-gray-50"
                onClick={toggleFilterVisibility}
              >
                <span>{t.filters}</span>
                <ChevronDown size={16} />
              </button>
              
              <Select
                value={sortOption}
                onValueChange={setSortOption}
              >
                <SelectTrigger className="flex-1 h-full">
                  <SelectValue placeholder={t.recommended} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">{t.newestFirst}</SelectItem>
                  <SelectItem value="popular">{t.popular}</SelectItem>
                  <SelectItem value="priceHighToLow">{t.priceHighToLow}</SelectItem>
                  <SelectItem value="priceLowToHigh">{t.priceLowToHigh}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <hr className="border-neutral-200 border h-px border-solid" />
        </div>

        <div className="w-full max-w-[1248px] mt-8">
          <div className="gap-5 flex flex-col md:flex-row">
            {/* Filter section - hidden on mobile initially */}
            {filterVisible && (
              <aside className="w-full md:w-[24%]">
                <FilterSection 
                  onFilterChange={handleFilterChange}
                  language={language}
                />
              </aside>
            )}
            
            <main className={`w-full ${filterVisible ? 'md:w-[76%]' : 'md:w-full'}`}>
              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
                </div>
              ) : filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
                  {filteredProducts.map(product => (
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      imageUrl={product.image}
                      title={product.title}
                      price={product.price}
                      isFavorite={favorites.includes(product.id)}
                      onFavoriteToggle={() => toggleFavorite(product.id)}
                      language={language}
                    />
                  ))}
                </div>
              ) : (
                <div className="flex justify-center items-center h-64">
                  <p className="text-lg text-gray-500">{t.noProductsFound}</p>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};
