import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProductDetail from "./pages/ProductDetail";
import Footer from "./components/layout/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import WhatsAppFloat from "./components/ui/WhatsAppFloat";

// 1. THIS WAS THE MISSING IMPORT:
import PreLoader from "./components/ui/PreLoader";

function App() {
  return (
    <Router>
      {/* Global Preloader */}
      <PreLoader />

      <div className="min-h-screen flex flex-col bg-slate-50 relative">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />

        {/* GLOBAL WHATSAPP FLOAT */}
        <WhatsAppFloat />
      </div>
    </Router>
  );
}

export default App;
