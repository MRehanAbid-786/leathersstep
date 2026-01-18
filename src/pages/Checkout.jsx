import { useCart } from "../store/CartContext";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { cart, cartTotal } = useCart();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-black mb-10 tracking-tighter">CHECKOUT</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Side: Form */}
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-bold mb-4 border-b pb-2">
              Shipping Information
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="p-3 bg-white border border-gray-200 rounded-xl outline-none focus:border-orange-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="p-3 bg-white border border-gray-200 rounded-xl outline-none focus:border-orange-500"
              />
            </div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full mt-4 p-3 bg-white border border-gray-200 rounded-xl outline-none focus:border-orange-500"
            />
            <input
              type="text"
              placeholder="Full Address"
              className="w-full mt-4 p-3 bg-white border border-gray-200 rounded-xl outline-none focus:border-orange-500"
            />
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 border-b pb-2">Payment</h2>
            <div className="p-4 bg-gray-50 rounded-xl text-gray-500 text-sm">
              Payment processing is currently in test mode. No real charges will
              be made.
            </div>
          </section>

          <button className="w-full bg-orange-600 text-white py-5 rounded-full font-black text-lg shadow-xl hover:bg-orange-700 transition">
            PLACE ORDER
          </button>
        </div>

        {/* Right Side: Summary */}
        <div className="bg-zinc-900 text-white p-8 rounded-3xl h-fit sticky top-10">
          <h2 className="text-2xl font-bold mb-6 italic text-orange-500">
            Order Summary
          </h2>
          <div className="space-y-4 mb-8">
            {cart.map((item) => (
              <div
                key={item.cartId}
                className="flex justify-between items-center text-sm"
              >
                <span className="text-gray-400">{item.name}</span>
                <span className="font-bold">${item.price}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-white/10 pt-6 flex justify-between items-center">
            <span className="text-xl font-medium">Grand Total</span>
            <span className="text-3xl font-black text-orange-500">
              ${cartTotal}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
