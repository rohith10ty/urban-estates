import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SavedPropertiesDrawer from './components/SavedPropertiesDrawer';
import SmoothScroll from './components/SmoothScroll';
import { SavedProvider } from './context/SavedContext';

// Pages
import HomePage from './pages/HomePage';
import ListingsPage from './pages/ListingsPage';
import PropertyDetailsPage from './pages/PropertyDetailsPage';
import SellPage from './pages/SellPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <SavedProvider>
        <SmoothScroll>
          <div className="flex flex-col min-h-screen font-outfit antialiased bg-brand-cream text-brand-dark selection:bg-brand-dark selection:text-white">
            <Navbar />
            <SavedPropertiesDrawer />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/listings" element={<ListingsPage />} />
                <Route path="/property/:id" element={<PropertyDetailsPage />} />
                <Route path="/sell" element={<SellPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </SmoothScroll>
      </SavedProvider>
    </BrowserRouter>
  );
}

export default App;
