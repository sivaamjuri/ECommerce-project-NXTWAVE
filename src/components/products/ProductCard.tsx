
import React from 'react';

interface ProductCardProps {
  imageUrl: string;
  title: string;
  isNew?: boolean;
  isOutOfStock?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  title,
  isNew = false,
  isOutOfStock = false
}) => {
  return (
    <article className="flex flex-col w-full h-full shadow-sm hover:shadow-md transition-shadow border border-gray-100">
      <div className="relative aspect-[0.752] w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="absolute h-full w-full object-cover inset-0"
        />
        {isNew && (
          <div className="absolute top-2 left-2 bg-white/80 px-3 py-1 text-sm text-black font-bold uppercase">
            new product
          </div>
        )}
        {isOutOfStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-[rgba(255,255,255,0.5)]">
            <span className="text-xl text-[#252020] font-bold uppercase bg-white/50 px-4 py-2">
              out of stock
            </span>
          </div>
        )}
      </div>
      <div className="bg-white p-4 flex-grow">
        <div className="relative">
          <h3 className="text-[#252020] truncate text-lg font-bold uppercase pr-8">
            {title}
          </h3>
          <div className="text-[#888792] text-sm font-normal mt-2">
            <span>Sign in</span>
            <span> or Create an account to see pricing</span>
          </div>
          <button
            aria-label="Add to favorites"
            className="absolute right-0 top-0"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/8b82f75be9f94884997a493107b7bf6b/15858c240962787651e2d77cd40f3dbb6a47c578?placeholderIfAbsent=true"
              alt="Favorite icon"
              className="w-6 h-6"
            />
          </button>
        </div>
      </div>
    </article>
  );
};
