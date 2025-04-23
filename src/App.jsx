import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Navbar from './components/Navbar';

import Footer from './components/Footer';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <main className="flex-grow container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}