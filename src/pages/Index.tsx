
import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ProductGrid } from '@/components/products/ProductGrid';

export default function Index() {
  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex justify-center">
        <div className="w-full">
          <ProductGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
}
