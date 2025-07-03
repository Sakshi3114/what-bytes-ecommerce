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
        <div className="bg-white rounded shadow hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 group-hover:border-blue-300">
          {/* Image Container */}
          <div className="h-40 p-4 flex items-center justify-center">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.title}
              className="max-h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="p-3 space-y-2">
            <h2 className="text-lg font-medium text-gray-800 line-clamp-2 group-hover:text-[#1e40af] transition-colors">
              {product.title}
            </h2>

            <div className="text-lg font-semibold text-[#040b23]">
              ${product.price}
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full bg-[#1e40af] hover:bg-[#1d4ed8] text-white text-sm font-medium py-1.5 rounded transition"
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
