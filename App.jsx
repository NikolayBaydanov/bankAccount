import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './Pages/Home';
import AccountsPage from './Pages/AccountsPage';
import TransfersPage from './Pages/TransfersPage';
import SupportPage from './Pages/SupportPage';


import './styles.css';

function App() {
  // Track which page is currently active
  const [currentPage, setCurrentPage] = useState('home');
  
  // Store info about the currently logged-in user (null if no one is logged in)
  const [user, setUser] = useState(null);

  // A simple array of registered users in memory
  const [registeredUsers, setRegisteredUsers] = useState([]);

  // Handle page navigation
  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  // Handle logout
  const handleLogout = () => {
    setUser(null);
    setCurrentPage('home');
  };

  return (
    <div className="app">
      <Header 
        onNavigate={handleNavigation} 
        user={user} 
        onLogout={handleLogout}
      />

      {/* Conditionally render pages based on currentPage */}
      {currentPage === 'home' && <Home />}

      {currentPage === 'accounts' && (
        <AccountsPage
          user={user}
          setUser={setUser}
          registeredUsers={registeredUsers}
          setRegisteredUsers={setRegisteredUsers}
        />
      )}

      {currentPage === 'transfers' && (
        <TransfersPage user={user} />
      )}

      {currentPage === 'support' && (
        <SupportPage user={user} />
      )}

      <Footer />
    </div>
  );
}

export default App;
