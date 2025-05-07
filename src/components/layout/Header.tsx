import React from 'react';

export const Header = () => {
  return (
    <>
      <div className="bg-black flex w-full items-center gap-[40px_100px] text-xs text-[#EB4C6B] font-normal tracking-[1px] justify-between flex-wrap px-[274px] py-2 max-md:max-w-full max-md:px-5">
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
      <header className="border-b-neutral-200 flex w-full flex-col overflow-hidden items-center tracking-[1px] bg-white px-20 py-[30px] border-b border-solid max-md:max-w-full max-md:px-5">
        <div className="flex w-full max-w-[1248px] items-center gap-5 whitespace-nowrap justify-between max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/8b82f75be9f94884997a493107b7bf6b/90d8a493346c2b616adbac449071c60b6d96cf71?placeholderIfAbsent=true"
            alt="Company logo icon"
            className="aspect-[1] object-contain w-9 self-stretch shrink-0 my-auto"
          />
          <div className="text-black text-4xl font-extrabold self-stretch">
            LOGO
          </div>
          <div className="self-stretch flex items-center gap-6 text-base text-[#252020] font-bold my-auto">
            <button aria-label="Search">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/8b82f75be9f94884997a493107b7bf6b/b04c0dd062dccae1cd11a3fef088f7cfe264485a?placeholderIfAbsent=true"
                alt="Search icon"
                className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
              />
            </button>
            <button aria-label="Favorites">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/8b82f75be9f94884997a493107b7bf6b/0c88c9e138b773985abd1872fded389e039aa2bc?placeholderIfAbsent=true"
                alt="Favorites icon"
                className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
              />
            </button>
            <button aria-label="Shopping cart">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/8b82f75be9f94884997a493107b7bf6b/b52c53ed4c6e41d30f9498a6d6744c3c3e5ef313?placeholderIfAbsent=true"
                alt="Cart icon"
                className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
              />
            </button>
            <button aria-label="User account">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/8b82f75be9f94884997a493107b7bf6b/f393dc3e782e36f4d793bbc2945cc82fd037e3cb?placeholderIfAbsent=true"
                alt="Account icon"
                className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
              />
            </button>
            <div className="self-stretch flex items-center gap-[5px] my-auto">
              <button className="text-[#252020] self-stretch my-auto flex items-center gap-[5px]">
                ENG
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/8b82f75be9f94884997a493107b7bf6b/e771220b378b1021e4a4911659f1fa0ae80c2cba?placeholderIfAbsent=true"
                  alt="Language selector"
                  className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
                />
              </button>
            </div>
          </div>
        </div>
        <nav className="flex gap-[40px_64px] text-xl text-[#252020] font-bold flex-wrap mt-[60px] max-md:max-w-full max-md:mt-10">
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
