'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/cartSlice';
import toast from 'react-hot-toast';
import products from '@/utils/products';


const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart({ ...product, quantity }));
      toast.success(`${product.title} added to cart!`);
    }
  };

  if (!product) return <div className="p-8">Product not found.</div>;

  return (
    <div className="p-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Image Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-auto object-contain rounded"
        />
      </div>

      {/* Details Section */}
      <div className="text-[#003087]">
        <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
        <p className="text-xl font-semibold mb-2">${product.price.toFixed(2)}</p>
        <p className="text-sm mb-4 text-gray-700">{product.description}</p>
        <p className="text-sm mb-4 text-gray-600">Category: {product.category}</p>

        {/* Quantity Selector */}
        <div className="mb-4">
          <label className="block font-medium mb-1">Quantity:</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
            className="border rounded px-3 py-1 w-20 text-center"
          />
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="bg-[#003087] text-white px-6 py-2 rounded hover:bg-blue-900 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
