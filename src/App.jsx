import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CNX25 from './pages/CNX25';
import NGO26 from './pages/NGO26';
import './App.css'; // Keep if you add global app styles later

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cnx25" element={<CNX25 />} />
        <Route path="/ngo26" element={<NGO26 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
