import React from 'react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ProductGrid } from '@/components/products/ProductGrid';

export default function Index() {
  return (
    <div className="bg-white">
      <Header />
      <ProductGrid />
      <Footer />
    </div>
  );
}
