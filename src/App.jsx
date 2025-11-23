import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, createContext, useContext } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import About from './pages/About';
import TradeFair from './pages/TradeFair';
import Opportunities from './pages/Opportunities';
import Resources from './pages/Resources';
import Dashboard from './pages/Dashboard';

// Language Context
export const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

function App() {
  const [language, setLanguage] = useState('en');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <Router>
        <div className="app">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/about" element={<About />} />
              <Route path="/tradefair" element={<TradeFair />} />
              <Route path="/opportunities" element={<Opportunities />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageContext.Provider>
  );
}

export default App;
