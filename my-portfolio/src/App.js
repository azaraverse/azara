import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  const [darkMode, setDarkMode] = useState(() => window.localStorage.getItem('darkMode') === 'true');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    window.localStorage.setItem('darkMode', !darkMode);
  }

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Router>
      <div className={darkMode ? "dark": ""}>
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
        <Routes>
          <Route path='/' element={<Home darkMode={darkMode} />} />
          <Route path='portfolio' element={<Portfolio darkMode={darkMode} />} />
        </Routes>
        <Footer darkMode={darkMode} />
      </div>
    </Router>
  );
}

export default App;
