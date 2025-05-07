
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Index from './pages/Index';
import ProductDetail from './pages/ProductDetail';
import NotFound from './pages/NotFound';
import './App.css';
import { CartProvider } from './contexts/CartContext';

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
