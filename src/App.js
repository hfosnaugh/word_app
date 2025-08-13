import { Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar.js';
import HomePage from './pages/HomePage.js';
import Game from './pages/Game.js';
import ERR404 from './pages/ERR404.js';
import './styles.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/" index element={<HomePage />} />
        <Route path="/game" element={<Game />} />
        <Route path="*" element={<ERR404 />} />
      </Route>
    </Routes>//default page will take to <HomePage />
  );
}

export default App;