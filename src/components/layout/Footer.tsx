import React from 'react';
import { NewsletterForm } from '../forms/NewsletterForm';

export const Footer = () => {
  return (
    <footer className="bg-black flex w-full flex-col mt-12 pt-[79px] pb-[25px] px-20 max-md:max-w-full max-md:mt-10 max-md:px-5">
      <div className="self-center w-full max-w-[1207px] ml-3 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[57%] max-md:w-full max-md:ml-0">
            <div className="flex w-full flex-col max-md:max-w-full max-md:mt-10">
              <h2 className="text-white text-xl font-bold uppercase">
                Be the first to know
              </h2>
              <p className="text-white text-base font-normal mt-6">
                Sign up for updates from mettā muse.
              </p>
              <NewsletterForm />
            </div>
          </div>
          <div className="w-[43%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex w-full flex-col text-base text-white font-bold max-md:max-w-full max-md:mt-10">
              <h2 className="text-white text-xl uppercase">CONTACT US</h2>
              <a href="tel:+442211335360" className="text-white font-normal mt-4">
                +44 221 133 5360
              </a>
              <a
                href="mailto:customercare@mettamuse.com"
                className="text-white font-normal mt-4"
              >
                customercare@mettamuse.com
              </a>
              <h2 className="text-white text-xl uppercase mt-6">Currency</h2>
              <div className="flex items-center gap-[5px] whitespace-nowrap tracking-[1px] mt-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/8b82f75be9f94884997a493107b7bf6b/d90fc4857eebe3707facc10b9edc95dcde7f2159?placeholderIfAbsent=true"
                  alt="Currency flag"
                  className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto rounded-3xl"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/8b82f75be9f94884997a493107b7bf6b/82ea9c388108a53252acf659a2cb801c87af01e1?placeholderIfAbsent=true"
                  alt="Dropdown arrow"
                  className="aspect-[1] object-contain w-1.5 self-stretch shrink-0 my-auto"
                />
                <span className="text-white self-stretch my-auto">USD</span>
              </div>
              <p className="text-white text-xs font-normal self-stretch mt-4 max-md:max-w-full">
                Transactions will be completed in Euros and a currency reference is
                available on hover.
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-white border-solid mt-[25px]" />

      <div className="w-[954px] max-w-full mt-14 max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[22%] max-md:w-full max-md:ml-0">
            <div className="flex flex-col items-stretch text-white max-md:mt-10">
              <h2 className="text-white text-[25px] font-bold">mettā muse</h2>
              <nav className="text-lg font-normal mt-[18px]">
                <a href="#" className="text-white block">
                  About Us
                </a>
                <a href="#" className="text-white block mt-4">
                  Stories
                </a>
                <a href="#" className="text-white block mt-4">
                  Artisans
                </a>
                <a href="#" className="text-white block mt-4">
                  Boutiques
                </a>
                <a href="#" className="text-white block mt-4">
                  Contact Us
                </a>
                <a href="#" className="text-white block mt-4">
                  EU Compliances Docs
                </a>
              </nav>
            </div>
          </div>

          <div className="w-[78%] ml-5 max-md:w-full max-md:ml-0">
            <div className="grow max-md:max-w-full max-md:mt-10">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                <div className="w-[65%] max-md:w-full max-md:ml-0">
                  <div className="flex grow flex-col text-white font-normal max-md:mt-[21px]">
                    <h2 className="text-white text-xl font-bold uppercase">
                      Quick Links
                    </h2>
                    <nav className="text-lg mt-6">
                      <a href="#" className="text-white block">
                        Orders & Shipping
                      </a>
                      <a href="#" className="text-white block mt-4">
                        Join/Login as a Seller
                      </a>
                      <a href="#" className="text-white block mt-4">
                        Payment & Pricing
                      </a>
                      <a href="#" className="text-white block mt-4">
                        Return & Refunds
                      </a>
                      <a href="#" className="text-white block mt-4">
                        FAQs
                      </a>
                      <a href="#" className="text-white block mt-4">
                        Privacy Policy
                      </a>
                      <a href="#" className="text-white block mt-4">
                        Terms & Conditions
                      </a>
                    </nav>
                    <p className="text-white text-center text-sm mt-[37px]">
                      Copyright © 2023 mettamuse. All rights reserved.
                    </p>
                  </div>
                </div>

                <div className="w-[35%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex w-full flex-col max-md:mt-[21px]">
                    <h2 className="text-white text-xl font-bold uppercase">
                      Follow Us
                    </h2>
                    <div className="flex gap-3 mt-6">
                      <a href="#" aria-label="Facebook">
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/8b82f75be9f94884997a493107b7bf6b/5319f2da81bb111fc3978eb56f37684efa4256cd?placeholderIfAbsent=true"
                          alt="Facebook"
                          className="aspect-[1] object-contain w-8 shrink-0"
                        />
                      </a>
                      <a href="#" aria-label="Instagram">
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/8b82f75be9f94884997a493107b7bf6b/aa48b4e3ae1aa0d46c4d0ac0ae0250699eb3dee0?placeholderIfAbsent=true"
                          alt="Instagram"
                          className="aspect-[1] object-contain w-8 shrink-0"
                        />
                      </a>
                    </div>
                    <h2 className="text-white text-xl font-bold uppercase self-stretch mt-14 max-md:mt-10">
                      mettā muse Accepts
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
