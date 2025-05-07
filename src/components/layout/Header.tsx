
import React, { useState } from 'react';
import { Menu, Search, Heart, ShoppingCart, User } from 'lucide-react';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <div className="bg-black flex w-full items-center gap-5 text-xs text-[#EB4C6B] font-normal tracking-[1px] justify-between px-6 py-2 md:px-[274px] max-md:hidden">
        <div className="self-stretch flex items-center gap-2.5 my-auto">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/8b82f75be9f94884997a493107b7bf6b/e36faaa33a34101d72a761d73a288b64f64f8f9c?placeholderIfAbsent=true"
            alt="Promotion icon"
            className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
          />
          <div className="text-[#EB4C6B] self-stretch my-auto">
            Lorem ipsum dolor
          </div>
        </div>
        <div className="self-stretch flex items-center gap-2.5 my-auto">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/8b82f75be9f94884997a493107b7bf6b/e36faaa33a34101d72a761d73a288b64f64f8f9c?placeholderIfAbsent=true"
            alt="Promotion icon"
            className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
          />
          <div className="text-[#EB4C6B] self-stretch my-auto">
            Lorem ipsum dolor
          </div>
        </div>
        <div className="self-stretch flex items-center gap-2.5 my-auto">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/8b82f75be9f94884997a493107b7bf6b/e36faaa33a34101d72a761d73a288b64f64f8f9c?placeholderIfAbsent=true"
            alt="Promotion icon"
            className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
          />
          <div className="text-[#EB4C6B] self-stretch my-auto">
            Lorem ipsum dolor
          </div>
        </div>
      </div>
      
      {/* Desktop Header */}
      <header className="border-b-neutral-200 flex w-full flex-col overflow-hidden items-center tracking-[1px] bg-white px-6 py-[30px] border-b border-solid md:px-20 max-md:py-4">
        <div className="flex w-full max-w-[1248px] items-center gap-5 whitespace-nowrap justify-between max-md:justify-center">
          <div className="flex items-center gap-2 md:gap-5">
            <button className="md:hidden mr-2" onClick={toggleMobileMenu} aria-label="Menu">
              <Menu size={24} />
            </button>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/8b82f75be9f94884997a493107b7bf6b/90d8a493346c2b616adbac449071c60b6d96cf71?placeholderIfAbsent=true"
              alt="Company logo icon"
              className="aspect-[1] object-contain w-9 shrink-0"
            />
            <div className="text-black text-4xl font-extrabold">
              LOGO
            </div>
          </div>
          
          <div className="flex items-center gap-4 md:gap-6 text-base text-[#252020] font-bold">
            <button aria-label="Search" className="md:order-1">
              <Search size={24} />
            </button>
            <button aria-label="Favorites" className="hidden md:block">
              <Heart size={24} />
            </button>
            <button aria-label="Shopping cart" className="md:order-2">
              <ShoppingCart size={24} />
            </button>
            <button aria-label="User account" className="hidden md:block">
              <User size={24} />
            </button>
            <div className="flex items-center gap-[5px] md:order-3">
              <button className="text-[#252020] flex items-center gap-[5px]">
                ENG
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/8b82f75be9f94884997a493107b7bf6b/e771220b378b1021e4a4911659f1fa0ae80c2cba?placeholderIfAbsent=true"
                  alt="Language selector"
                  className="aspect-[1] object-contain w-4 shrink-0"
                />
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="w-full md:hidden bg-white py-4 mt-2 border-t border-gray-200">
            <nav className="flex flex-col gap-4 px-4">
              <a href="#" className="text-[#252020] font-bold text-xl">SHOP</a>
              <a href="#" className="text-[#252020] text-xl">SKILLS</a>
              <a href="#" className="text-[#252020] text-xl">STORIES</a>
              <a href="#" className="text-[#252020] text-xl">ABOUT</a>
              <a href="#" className="text-[#252020] text-xl">CONTACT US</a>
            </nav>
          </div>
        )}
        
        {/* Mobile Navigation Pills */}
        <div className="md:hidden w-full mt-4 flex justify-center gap-4">
          <a href="#" className="px-3 py-1">HOME</a>
          <a href="#" className="px-3 py-1 font-bold border-b-2 border-black">SHOP</a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-[40px_64px] text-xl text-[#252020] font-bold flex-wrap mt-[60px] max-md:max-w-full max-md:mt-10">
          <a href="#" className="text-[#252020] whitespace-nowrap w-[52px]">
            SHOP
          </a>
          <a href="#" className="text-[#252020] whitespace-nowrap w-[65px]">
            SKILLS
          </a>
          <a href="#" className="text-[#252020] whitespace-nowrap w-[79px]">
            STORIES
          </a>
          <a href="#" className="text-[#252020] whitespace-nowrap w-[65px]">
            ABOUT
          </a>
          <a href="#" className="text-[#252020] w-[119px]">
            CONTACT US
          </a>
        </nav>
      </header>
    </>
  );
};
