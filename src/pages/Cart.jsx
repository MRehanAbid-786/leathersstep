import { useCart } from "../store/CartContext";
import { Trash2, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <ShoppingBag className="w-16 h-16 text-gray-300 mb-4" />
        <h2 className="text-2xl font-bold text-gray-800">Your cart is empty</h2>
        <Link
          to="/shop"
          className="mt-4 text-orange-600 font-semibold hover:underline"
        >
          Go Shopping →
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.cartId}
            className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-gray-100"
          >
            <div className="flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div>
                <h3 className="font-bold text-gray-800">{item.name}</h3>
                <p className="text-orange-600 font-bold">${item.price}</p>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(item.cartId)}
              className="p-2 text-gray-400 hover:text-red-600 transition"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 border-t pt-6 flex justify-between items-center">
        <div>
          <p className="text-gray-500 font-medium">Total Amount:</p>
          <p className="text-3xl font-black text-gray-900">${cartTotal}</p>
        </div>

        {/* Changed from <button> to <Link> */}
        <Link
          to="/checkout"
          className="bg-orange-600 text-white px-10 py-4 rounded-full font-bold hover:bg-orange-700 shadow-lg transition-transform active:scale-95 text-center"
        >
          Checkout Now
        </Link>
      </div>
    </div>
  );
};

export default Cart;
