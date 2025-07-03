"use client"

import ProductCard from "./ProductCard"

const ProductListing = ({ products }) => {
  return (
    <section className="w-full md:w-3/4 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1e40af] mb-2">Product Listing</h1>
        <p className="text-gray-600 text-sm">
          {products.length} {products.length === 1 ? "product" : "products"} found
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 text-lg">No products match your filters.</p>
            <p className="text-gray-400 text-sm mt-2">Try adjusting your search criteria.</p>
          </div>
        ) : (
          products.map((product) => <ProductCard key={product.id} product={product} />)
        )}
      </div>
    </section>
  )
}

export default ProductListing
