import { useState } from "react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-md border border-gray-100">
        <h2 className="text-4xl font-black text-center mb-8 tracking-tighter">
          {isLogin ? "WELCOME BACK" : "CREATE ACCOUNT"}
        </h2>

        <div className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-orange-500"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-orange-500"
          />

          <button className="w-full bg-orange-600 text-white py-4 rounded-2xl font-bold shadow-xl hover:bg-orange-700 transition">
            {isLogin ? "Sign In" : "Register"}
          </button>
        </div>

        <p className="text-center mt-6 text-gray-500 font-medium">
          {isLogin ? "New to Leathersstep?" : "Already have an account?"}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="ml-2 text-orange-600 font-bold hover:underline"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;
