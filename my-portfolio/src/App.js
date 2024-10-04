import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='blog' element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
