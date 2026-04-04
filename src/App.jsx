import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import CNX25 from './pages/CNX25/CNX25';
import NGO26 from './pages/NGO26/NGO26';
import DAN26 from './pages/DAN26/DAN26';
import './App.css'; // Keep if you add global app styles later

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cnx25" element={<CNX25 />} />
        <Route path="/ngo26" element={<NGO26 />} />
        <Route path="/danang26" element={<DAN26 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
