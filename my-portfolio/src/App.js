import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Navbar from './components/Navbar';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
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
          <Route path='blog' element={<Blog darkMode={darkMode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
