"use client"

import { useDispatch } from "react-redux"
import { addToCart } from "@/redux/cartSlice"
import toast from "react-hot-toast"
import Link from "next/link"

const ProductCard = ({ product }) => {
  const dispatch = useDispatch()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()
    dispatch(addToCart(product))
    toast.success(`${product.title} added to cart!`)
  }

  return (
    <div className="group">
      <Link href={`/product/${product.id}`}>
        <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group-hover:border-blue-200">
          {/* Image Container */}
          <div className="aspect-square p-6 bg-gray-50 flex items-center justify-center">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.title}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Content */}
          <div className="p-4 space-y-3">
            <h2 className="text-base font-semibold text-gray-800 line-clamp-2 group-hover:text-[#1e40af] transition-colors">
              {product.title}
            </h2>

            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-[#1e40af]">${product.price}</span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
              )}
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full bg-[#1e40af] hover:bg-[#1d4ed8] text-white font-medium py-2.5 px-4 rounded-lg  transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard
