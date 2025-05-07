import React from 'react';
import { ProductCard } from './ProductCard';
import { FilterSection } from '../filters/FilterSection';

export const ProductGrid = () => {
  return (
    <div className="flex w-full flex-col mt-[72px] px-20 max-md:max-w-full max-md:mt-10 max-md:px-5">
      <h1 className="text-[#252020] text-center text-6xl font-normal tracking-[1px] uppercase self-center max-md:max-w-full max-md:text-[40px]">
        DISCOVER OUR PRODUCTS
      </h1>
      <p className="text-[#252020] text-center text-[22px] font-normal leading-10 self-center w-[721px] mt-4 max-md:max-w-full">
        Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
        scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
      </p>
      
      <hr className="border-neutral-200 border self-center w-[1248px] shrink-0 max-w-full h-px mt-[71px] border-solid max-md:mt-10" />
      
      <div className="bg-white self-center w-full max-w-[1248px] leading-10 pt-6 max-md:max-w-full">
        <div className="flex w-full max-w-[1212px] items-stretch gap-5 flex-wrap justify-between mr-9 max-md:max-w-full max-md:mr-2.5">
          <div className="flex items-stretch gap-[40px_78px]">
            <div className="text-[#252020] text-lg font-bold uppercase">
              3425 Items
            </div>
            <button className="items-center flex gap-2 text-base text-[#888792] font-normal text-right underline bg-white">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/8b82f75be9f94884997a493107b7bf6b/ab44b220031ffb5036c75897d12f9a83eb2afbc3?placeholderIfAbsent=true"
                alt="Filter icon"
                className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
              />
              <span className="text-[#888792] underline">HIDE FILTER</span>
            </button>
          </div>
          <div className="flex items-center gap-2 text-lg text-[#252020] font-bold whitespace-nowrap uppercase">
            <span className="text-[#252020] self-stretch my-auto">
              RECOMMENDED
            </span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/8b82f75be9f94884997a493107b7bf6b/3d071781f1d507db621c91d439accec00a027a3c?placeholderIfAbsent=true"
              alt="Sort icon"
              className="aspect-[1] object-contain w-4 self-stretch shrink-0 my-auto"
            />
          </div>
        </div>
        <hr className="border-neutral-200 border shrink-0 h-px mt-[23px] border-solid max-md:max-w-full" />
      </div>

      <div className="self-center w-full max-w-[1248px] mt-8 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <aside className="w-[24%] max-md:w-full max-md:ml-0">
            <FilterSection />
          </aside>
          
          <main className="w-[76%] ml-5 max-md:w-full max-md:ml-0">
            <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
              <ProductCard
                imageUrl="https://cdn.builder.io/api/v1/image/assets/8b82f75be9f94884997a493107b7bf6b/dff656cad0c6374763f3f257eeeec321f1ebfc45?placeholderIfAbsent=true"
                title="PPXOC Milkyway dress in pressed flowers"
                isNew={true}
              />
              <ProductCard
                imageUrl="https://cdn.builder.io/api/v1/image/assets/8b82f75be9f94884997a493107b7bf6b/7fa8cb7b02efb073b5f20c32a44b6df5112e38df?placeholderIfAbsent=true"
                title="PPXOC Milkyway dress in pressed flowers"
                isOutOfStock={true}
              />
              <ProductCard
                imageUrl="https://cdn.builder.io/api/v1/image/assets/8b82f75be9f94884997a493107b7bf6b/121b5c405ff3f6a144037815b58cb0a08a79f21d?placeholderIfAbsent=true"
                title="Product Name"
              />
              {/* Additional ProductCards */}
              <ProductCard
                imageUrl="https://cdn.builder.io/api/v1/image/assets/8b82f75be9f94884997a493107b7bf6b/1665699e1aa3592061fd265efafe712c5d202061?placeholderIfAbsent=true"
                title="Product Name"
              />
              <ProductCard
                imageUrl="https://cdn.builder.io/api/v1/image/assets/8b82f75be9f94884997a493107b7bf6b/b1b990e5a6243fcf86a33de52b7ee4db5441236b?placeholderIfAbsent=true"
                title="Product Name"
              />
              <ProductCard
                imageUrl="https://cdn.builder.io/api/v1/image/assets/8b82f75be9f94884997a493107b7bf6b/5e6f492c80748d4820b1b9e80537e26c5badc598?placeholderIfAbsent=true"
                title="Product Name"
              />
              <ProductCard
                imageUrl="https://cdn.builder.io/api/v1/image/assets/8b82f75be9f94884997a493107b7bf6b/cc3c06479640728e8634c69b46073336dd62a3bb?placeholderIfAbsent=true"
                title="Product Name"
              />
              <ProductCard
                imageUrl="https://cdn.builder.io/api/v1/image/assets/8b82f75be9f94884997a493107b7bf6b/c28f05080a40d583abfc28b37db44470339d182c?placeholderIfAbsent=true"
                title="Product Name"
              />
              <ProductCard
                imageUrl="https://cdn.builder.io/api/v1/image/assets/8b82f75be9f94884997a493107b7bf6b/8b3febfcf460b170f03b2afe016ddac3d100be49?placeholderIfAbsent=true"
                title="Product Name"
              />
              <ProductCard
                imageUrl="https://cdn.builder.io/api/v1/image/assets/8b82f75be9f94884997a493107b7bf6b/4dc224d80d94c5cebdc29e4947661e28a7ad95c9?placeholderIfAbsent=true"
                title="Product Name"
              />
              <ProductCard
                imageUrl="https://cdn.builder.io/api/v1/image/assets/8b82f75be9f94884997a493107b7bf6b/cc5622874d6cd8bc13d4c1683f7b863a34651a5d?placeholderIfAbsent=true"
                title="Product Name"
              />
              <ProductCard
                imageUrl="https://cdn.builder.io/api/v1/image/assets/8b82f75be9f94884997a493107b7bf6b/e2a04099c574bf962fa9a582361f724013dd32da?placeholderIfAbsent=true"
                title="Product Name"
              />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
