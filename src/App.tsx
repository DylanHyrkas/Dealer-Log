import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import InventoryManagement from './pages/InventoryManagement.tsx';
import Login from './pages/Login.tsx';
import ProtectedRoute from './auth/ProtectedRoute.tsx';
import { useAuth } from './auth/AuthProvider.tsx';
import Account from './pages/Account.tsx';
import Footer from './components/Footer.tsx';
import PrivacyPolicy from './pages/PricacyPolicy.tsx';
import TermsOfService from './pages/TermsOfService.tsx';

function App() {
  const { user, signOut } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut();
      // Redirect to login after successful logout
      window.location.href = '/login';
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  const navLinks = user
  ?[
        { label: 'Home', path: '/' },
        { label: 'Inventory', path: '/inventorymanagement' },
        { label: 'Logout', path: '/login', onClick: handleLogout },
      ]
  : []

  return (
    <>
      <BrowserRouter>
        <Header links={navLinks} />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy/>} />
          <Route path="/termsofservice" element={<TermsOfService/>} />
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/inventorymanagement" element={<ProtectedRoute><InventoryManagement /></ProtectedRoute>} />
          <Route path="/account" element={<ProtectedRoute><Account/></ProtectedRoute>} />
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
