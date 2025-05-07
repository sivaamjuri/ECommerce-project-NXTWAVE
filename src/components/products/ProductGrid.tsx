
import React from 'react';
import { ProductCard } from './ProductCard';
import { FilterSection } from '../filters/FilterSection';

export const ProductGrid = () => {
  return (
    <div className="flex w-full flex-col mt-[72px] px-6 md:px-20 max-md:mt-10">
      <div className="max-w-[1248px] mx-auto w-full">
        <h1 className="text-[#252020] text-center text-4xl md:text-6xl font-normal tracking-[1px] uppercase mx-auto md:max-w-[800px]">
          DISCOVER OUR PRODUCTS
        </h1>
        <p className="text-[#252020] text-center text-lg md:text-[22px] font-normal leading-relaxed md:leading-10 mx-auto max-w-full md:max-w-[721px] mt-4 px-4">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
        
        <hr className="border-neutral-200 border w-full max-w-[1248px] h-px mt-12 md:mt-[71px] border-solid" />
        
        <div className="bg-white w-full max-w-[1248px] pt-6">
          <div className="flex flex-col md:flex-row w-full items-start md:items-center gap-4 justify-between mb-6">
            <div className="flex items-center flex-wrap gap-4 md:gap-[40px]">
              <div className="text-[#252020] text-lg font-bold uppercase">
                3425 Items
              </div>
              <button className="items-center flex gap-2 text-base text-[#888792] font-normal underline bg-white">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/8b82f75be9f94884997a493107b7bf6b/ab44b220031ffb5036c75897d12f9a83eb2afbc3?placeholderIfAbsent=true"
                  alt="Filter icon"
                  className="aspect-[1] object-contain w-4 shrink-0"
                />
                <span className="text-[#888792] underline">HIDE FILTER</span>
              </button>
            </div>
            <div className="flex items-center gap-2 text-lg text-[#252020] font-bold whitespace-nowrap uppercase">
              <span className="text-[#252020]">
                RECOMMENDED
              </span>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/8b82f75be9f94884997a493107b7bf6b/3d071781f1d507db621c91d439accec00a027a3c?placeholderIfAbsent=true"
                alt="Sort icon"
                className="aspect-[1] object-contain w-4 shrink-0"
              />
            </div>
          </div>
          <hr className="border-neutral-200 border h-px border-solid" />
        </div>

        <div className="w-full max-w-[1248px] mt-8">
          <div className="gap-5 flex flex-col md:flex-row">
            <aside className="w-full md:w-[24%]">
              <FilterSection />
            </aside>
            
            <main className="w-full md:w-[76%]">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
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

        <hr className="border-neutral-200 border w-full max-w-[1248px] h-px mt-12 mb-8 border-solid" />
        
        {/* Payment methods section */}
        <div className="w-full max-w-[1248px] py-8 flex flex-col items-center">
          <h2 className="text-[#252020] text-center text-2xl font-bold mb-6">PAYMENT METHODS</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-gray-100 rounded-lg w-16 h-10 flex items-center justify-center">
              <span className="text-xs">VISA</span>
            </div>
            <div className="bg-gray-100 rounded-lg w-16 h-10 flex items-center justify-center">
              <span className="text-xs">MASTER</span>
            </div>
            <div className="bg-gray-100 rounded-lg w-16 h-10 flex items-center justify-center">
              <span className="text-xs">PAYPAL</span>
            </div>
            <div className="bg-gray-100 rounded-lg w-16 h-10 flex items-center justify-center">
              <span className="text-xs">GPAY</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
