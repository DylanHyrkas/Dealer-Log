import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import InventoryManagement from './pages/InventoryManagement.tsx';

function App() {
  // Navigation links for the header
  const navLinks = [
    { label: 'Home', path: '/' },
  ];

  return (
    <BrowserRouter>
      {/* Header with navigation links */}
      <Header links={navLinks} />
      {/* Define application routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventorymanagement" element={<InventoryManagement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;