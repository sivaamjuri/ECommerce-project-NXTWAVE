
import React, { useState } from 'react';
import { Menu, Search, Heart, ShoppingCart, User, ChevronDown } from 'lucide-react';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  favoritesCount: number;
  language: 'english' | 'hindi' | 'telugu';
  onLanguageChange: (lang: 'english' | 'hindi' | 'telugu') => void;
  onSearch: (query: string) => void;
}

const translations = {
  english: {
    shop: "SHOP",
    skills: "SKILLS",
    stories: "STORIES",
    about: "ABOUT",
    contactUs: "CONTACT US",
    home: "HOME",
    search: "Search",
  },
  hindi: {
    shop: "खरीदारी",
    skills: "कौशल",
    stories: "कहानियाँ",
    about: "हमारे बारे में",
    contactUs: "संपर्क करें",
    home: "होम",
    search: "खोज",
  },
  telugu: {
    shop: "షాప్",
    skills: "నైపుణ్యాలు",
    stories: "కథలు",
    about: "మా గురించి",
    contactUs: "మమ్మల్ని సంప్రదించండి",
    home: "హోమ్",
    search: "వెతకండి",
  }
};

export const Header: React.FC<HeaderProps> = ({ 
  favoritesCount, 
  language, 
  onLanguageChange,
  onSearch
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchText, setSearchText] = useState('');

  const t = translations[language];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchText);
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
            <form onSubmit={handleSearchSubmit} className="md:order-1 relative flex items-center">
              <input 
                type="search"
                placeholder={t.search}
                className="py-1 px-2 border rounded-md md:block hidden mr-1"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button type="submit" aria-label="Search">
                <Search size={24} />
              </button>
            </form>
            
            <button aria-label="Favorites" className="relative md:block">
              <Heart size={24} fill={favoritesCount > 0 ? "#ff0000" : "none"} color={favoritesCount > 0 ? "#ff0000" : "currentColor"} />
              {favoritesCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {favoritesCount}
                </span>
              )}
            </button>
            
            <button aria-label="Shopping cart" className="md:order-2">
              <ShoppingCart size={24} />
            </button>
            
            <button aria-label="User account" className="hidden md:block">
              <User size={24} />
            </button>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-[5px] md:order-3">
                <span className="text-[#252020]">
                  {language === 'english' ? 'ENG' : language === 'hindi' ? 'HIN' : 'TEL'}
                </span>
                <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => onLanguageChange('english')}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onLanguageChange('hindi')}>
                  Hindi
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => onLanguageChange('telugu')}>
                  Telugu
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="w-full md:hidden bg-white py-4 mt-2 border-t border-gray-200">
            <nav className="flex flex-col gap-4 px-4">
              <a href="#" className="text-[#252020] font-bold text-xl">{t.shop}</a>
              <a href="#" className="text-[#252020] text-xl">{t.skills}</a>
              <a href="#" className="text-[#252020] text-xl">{t.stories}</a>
              <a href="#" className="text-[#252020] text-xl">{t.about}</a>
              <a href="#" className="text-[#252020] text-xl">{t.contactUs}</a>
            </nav>
          </div>
        )}
        
        {/* Mobile Navigation Pills */}
        <div className="md:hidden w-full mt-4 flex justify-center gap-4">
          <a href="#" className="px-3 py-1">{t.home}</a>
          <a href="#" className="px-3 py-1 font-bold border-b-2 border-black">{t.shop}</a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-[40px_64px] text-xl text-[#252020] font-bold flex-wrap mt-[60px] max-md:max-w-full max-md:mt-10">
          <a href="#" className="text-[#252020] whitespace-nowrap w-[52px]">
            {t.shop}
          </a>
          <a href="#" className="text-[#252020] whitespace-nowrap w-[65px]">
            {t.skills}
          </a>
          <a href="#" className="text-[#252020] whitespace-nowrap w-[79px]">
            {t.stories}
          </a>
          <a href="#" className="text-[#252020] whitespace-nowrap w-[65px]">
            {t.about}
          </a>
          <a href="#" className="text-[#252020] w-[119px]">
            {t.contactUs}
          </a>
        </nav>
      </header>
    </>
  );
};
