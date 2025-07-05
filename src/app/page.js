'use client';

import { useSearchParams } from "next/navigation"
import products from '../utils/products';
import LeftSidebar from '../components/LeftSidebar';
import ProductListing from '../components/ProductListing';
import Footer from '@/components/Footer';

export default function HomePage() {
  const searchParams = useSearchParams()
  const selectedCategory = searchParams.get("category") || "All"
  const price = parseInt(searchParams.get("price") || "1000")

  const filteredProducts = products.filter((p) => {
    const matchCategory = selectedCategory === "All" || p.category === selectedCategory
    const matchPrice = p.price <= price
    return matchCategory && matchPrice
  })

  return (
    <>
    <div className="flex flex-col md:flex-row gap-6 py-6 px-4 bg-[#f2f6ff] min-h-screen">
      <LeftSidebar
      />
      <ProductListing products={filteredProducts} />
    </div>
    <Footer/>
    </>
    
  );
}
