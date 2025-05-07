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
    <article className="grow">
      <div className="flex flex-col relative aspect-[0.752] w-full">
        <img
          src={imageUrl}
          alt={title}
          className="absolute h-full w-full object-cover inset-0"
        />
        {isNew && (
          <div className="text-sm text-black font-bold uppercase leading-10 px-5">
            new product
          </div>
        )}
        {isOutOfStock && (
          <div className="flex flex-col relative aspect-[0.752] w-full items-stretch justify-center py-px">
            <div className="relative bg-[rgba(255,255,255,0.5)] pt-[179px] pb-[143px] px-[70px] max-md:pt-[100px] max-md:pb-[110px] max-md:px-5">
              <span className="text-xl text-[#252020] font-bold uppercase">
                out of stock
              </span>
            </div>
          </div>
        )}
      </div>
      <div className="bg-white pt-4">
        <div className="relative">
          <h3 className="text-[#252020] text-ellipsis whitespace-nowrap text-lg font-bold uppercase z-0">
            {title}
          </h3>
          <div className="text-[#888792] text-sm font-normal mt-2">
            <span className="text-decoration-none">Sign in</span>
            <span className="text-decoration-none">
              {" "}
              or Create an account to see pricing
            </span>
          </div>
          <button
            aria-label="Add to favorites"
            className="absolute z-0 right-0 bottom-0"
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets/8b82f75be9f94884997a493107b7bf6b/15858c240962787651e2d77cd40f3dbb6a47c578?placeholderIfAbsent=true"
              alt="Favorite icon"
              className="aspect-[1] object-contain w-6 h-6"
            />
          </button>
        </div>
      </div>
    </article>
  );
};
