import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import './App.css';
import LoginPage from './pages/LoginPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;
