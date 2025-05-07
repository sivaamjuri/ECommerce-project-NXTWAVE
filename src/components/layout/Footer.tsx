
import React from 'react';
import { NewsletterForm } from '../forms/NewsletterForm';

export const Footer = () => {
  return (
    <footer className="bg-black flex w-full flex-col mt-12 pt-12 md:pt-[79px] pb-[25px] px-6 md:px-20">
      <div className="max-w-[1248px] mx-auto w-full">
        <div className="gap-8 flex flex-col md:flex-row">
          <div className="w-full md:w-[57%]">
            <div className="flex w-full flex-col">
              <h2 className="text-white text-xl font-bold uppercase">
                Be the first to know
              </h2>
              <p className="text-white text-base font-normal mt-4">
                Sign up for updates from mettā muse.
              </p>
              <NewsletterForm />
            </div>
          </div>
          <div className="w-full md:w-[43%]">
            <div className="flex w-full flex-col text-base text-white font-bold">
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
              <h2 className="text-white text-xl uppercase mt-8 md:mt-10">Currency</h2>
              <div className="flex items-center gap-[5px] whitespace-nowrap tracking-[1px] mt-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/8b82f75be9f94884997a493107b7bf6b/d90fc4857eebe3707facc10b9edc95dcde7f2159?placeholderIfAbsent=true"
                  alt="Currency flag"
                  className="w-6 rounded-3xl"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/8b82f75be9f94884997a493107b7bf6b/82ea9c388108a53252acf659a2cb801c87af01e1?placeholderIfAbsent=true"
                  alt="Dropdown arrow"
                  className="w-1.5"
                />
                <span className="text-white">USD</span>
              </div>
              <p className="text-white text-xs font-normal mt-4">
                Transactions will be completed in Euros and a currency reference is
                available on hover.
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-white border-solid my-8 md:mt-[25px] md:mb-12 max-w-[1248px] mx-auto w-full" />

      <div className="max-w-[1248px] mx-auto w-full">
        <div className="gap-8 flex flex-col md:flex-row">
          <div className="w-full md:w-[22%]">
            <div className="flex flex-col items-start text-white">
              <h2 className="text-white text-[25px] font-bold">mettā muse</h2>
              <nav className="text-lg font-normal mt-4 md:mt-[18px]">
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

          <div className="w-full md:w-[78%]">
            <div className="gap-8 flex flex-col md:flex-row">
              <div className="w-full md:w-[65%]">
                <div className="flex flex-col text-white font-normal">
                  <h2 className="text-white text-xl font-bold uppercase">
                    Quick Links
                  </h2>
                  <nav className="text-lg mt-4 md:mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
                    <a href="#" className="text-white">
                      Orders & Shipping
                    </a>
                    <a href="#" className="text-white">
                      Join/Login as a Seller
                    </a>
                    <a href="#" className="text-white">
                      Payment & Pricing
                    </a>
                    <a href="#" className="text-white">
                      Return & Refunds
                    </a>
                    <a href="#" className="text-white">
                      FAQs
                    </a>
                    <a href="#" className="text-white">
                      Privacy Policy
                    </a>
                    <a href="#" className="text-white">
                      Terms & Conditions
                    </a>
                  </nav>
                </div>
              </div>

              <div className="w-full md:w-[35%]">
                <div className="flex flex-col">
                  <h2 className="text-white text-xl font-bold uppercase">
                    Follow Us
                  </h2>
                  <div className="flex gap-3 mt-4 md:mt-6">
                    <a href="#" aria-label="Facebook">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/8b82f75be9f94884997a493107b7bf6b/5319f2da81bb111fc3978eb56f37684efa4256cd?placeholderIfAbsent=true"
                        alt="Facebook"
                        className="w-8"
                      />
                    </a>
                    <a href="#" aria-label="Instagram">
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/8b82f75be9f94884997a493107b7bf6b/aa48b4e3ae1aa0d46c4d0ac0ae0250699eb3dee0?placeholderIfAbsent=true"
                        alt="Instagram"
                        className="w-8"
                      />
                    </a>
                  </div>
                  <h2 className="text-white text-xl font-bold uppercase mt-8 md:mt-14">
                    mettā muse Accepts
                  </h2>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <div className="bg-white/10 rounded w-12 h-8 flex items-center justify-center">
                      <span className="text-xs text-white">VISA</span>
                    </div>
                    <div className="bg-white/10 rounded w-12 h-8 flex items-center justify-center">
                      <span className="text-xs text-white">MC</span>
                    </div>
                    <div className="bg-white/10 rounded w-12 h-8 flex items-center justify-center">
                      <span className="text-xs text-white">AMEX</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-white text-center text-sm mt-12">
              Copyright © 2023 mettamuse. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
