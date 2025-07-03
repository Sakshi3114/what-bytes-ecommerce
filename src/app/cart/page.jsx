'use client';

import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity, clearCart } from '@/redux/cartSlice';
import Link from 'next/link';


const CartPage = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, value) => {
    const quantity = parseInt(value, 10);
    if (!isNaN(quantity) && quantity >= 1) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
      {cartItems.length === 0 ? (
        <>
        <p className="text-gray-600">Your cart is empty.</p>
        <div className="mt-8">
            <Link href="/">
            <button className="bg-[#003087] text-white px-4 py-2 rounded hover:bg-[#002070] transition">
            ← Back to Product Listing
            </button>
            </Link>
        </div>
        </>
      ) : (
        <>
          <div className="space-y-6">
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded shadow">
                <div className="flex items-center space-x-4">
                  <img src={item.image} alt={item.title} className="w-20 h-20 object-contain" />
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-gray-500">${item.price}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                    className="w-16 border rounded px-2 py-1 text-center"
                  />
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-red-500 hover:underline text-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-right">
            <p className="text-lg font-semibold">Total: ${totalPrice.toFixed(2)}</p>
            <button
              onClick={() => dispatch(clearCart())}
              className="mt-2 text-sm text-red-600 hover:underline"
            >
              Clear Cart
            </button>
          </div>
          <div className="mt-8">
            <Link href="/">
            <button className="bg-[#003087] text-white px-4 py-2 rounded hover:bg-[#002070] transition">
            ← Back to Product Listing
            </button>
            </Link>
        </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
