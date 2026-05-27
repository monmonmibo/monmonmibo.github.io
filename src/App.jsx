import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import CNX25 from './pages/CNX25/CNX25';
import NGO26 from './pages/NGO26/NGO26';
import DAN26 from './pages/DAN26/DAN26';
import UKB26 from './pages/UKB26/UKB26';
import TAK26 from './pages/TAK26/TAK26';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cnx25" element={<CNX25 />} />
        <Route path="/ngo26" element={<NGO26 />} />
        <Route path="/danang26" element={<DAN26 />} />
        <Route path="/ukb26" element={<UKB26 />} />
        <Route path="/tak26" element={<TAK26 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
