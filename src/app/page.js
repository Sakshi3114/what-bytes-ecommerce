'use client';

import { useState } from 'react';
import products from '../utils/products';
import LeftSidebar from '../components/LeftSidebar';
import ProductListing from '../components/ProductListing';
import Footer from '@/components/Footer';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [price, setPrice] = useState(1000);

  const handleCategoryChange = (e) => setSelectedCategory(e.target.value);
  const handlePriceChange = (e) => setPrice(Number(e.target.value));

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === 'All' || product.category === selectedCategory;
    const priceMatch = product.price <= price;
    return categoryMatch && priceMatch;
  });

  return (
    <>
    <div className="flex flex-col md:flex-row gap-6 py-6 px-4 bg-[#f2f6ff] min-h-screen">
      <LeftSidebar
        selectedCategory={selectedCategory}
        price={price}
        onCategoryChange={handleCategoryChange}
        onPriceChange={handlePriceChange}
      />
      <ProductListing products={filteredProducts} />
    </div>
    <Footer/>
    </>
    
  );
}
