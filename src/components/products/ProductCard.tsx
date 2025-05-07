
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

interface ProductCardProps {
  id: number;
  imageUrl: string;
  title: string;
  price: number;
  isFavorite?: boolean;
  isNew?: boolean;
  isOutOfStock?: boolean;
  onFavoriteToggle?: () => void;
  language: 'english' | 'hindi' | 'telugu';
}

const translations = {
  english: {
    newProduct: "new product",
    outOfStock: "out of stock",
    signIn: "Sign in",
    createAccount: "or Create an account to see pricing"
  },
  hindi: {
    newProduct: "नया उत्पाद",
    outOfStock: "स्टॉक में नहीं है",
    signIn: "साइन इन करें",
    createAccount: "या कीमत देखने के लिए खाता बनाएं"
  },
  telugu: {
    newProduct: "కొత్త ఉత్పత్తి",
    outOfStock: "స్టాక్ లేదు",
    signIn: "సైన్ ఇన్ చేయండి",
    createAccount: "లేదా ధరను చూడటానికి ఖాతాను సృష్టించండి"
  }
};

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  imageUrl,
  title,
  price,
  isFavorite = false,
  isNew = false,
  isOutOfStock = false,
  onFavoriteToggle,
  language
}) => {
  const t = translations[language];

  return (
    <article className="flex flex-col w-full h-full shadow-sm hover:shadow-md transition-shadow border border-gray-100 overflow-hidden">
      <Link to={`/product/${id}`} className="relative aspect-[0.752] w-full overflow-hidden block">
        <img
          src={imageUrl}
          alt={title}
          className="absolute h-full w-full object-contain inset-0 p-4"
        />
        {isNew && (
          <div className="absolute top-2 left-2 bg-white/80 px-3 py-1 text-sm text-black font-bold uppercase">
            {t.newProduct}
          </div>
        )}
        {isOutOfStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-[rgba(255,255,255,0.5)]">
            <span className="text-xl text-[#252020] font-bold uppercase bg-white/50 px-4 py-2">
              {t.outOfStock}
            </span>
          </div>
        )}
      </Link>
      <div className="bg-white p-4 flex-grow">
        <div className="relative">
          <Link to={`/product/${id}`}>
            <h3 className="text-[#252020] truncate text-lg font-bold uppercase pr-8">
              {title}
            </h3>
          </Link>
          <div className="text-[#888792] text-sm font-normal mt-2 flex flex-col">
            <div className="flex justify-between items-center">
              <div>
                <span>{t.signIn} </span>
                <span>{t.createAccount}</span>
              </div>
              <div className="font-bold">${price}</div>
            </div>
          </div>
          <button
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            className="absolute right-0 top-0"
            onClick={onFavoriteToggle}
          >
            <Heart 
              size={24} 
              className="transition-colors" 
              fill={isFavorite ? "#ff0000" : "none"}
              color={isFavorite ? "#ff0000" : "currentColor"}
            />
          </button>
        </div>
      </div>
    </article>
  );
};
