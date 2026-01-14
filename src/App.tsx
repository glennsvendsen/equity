import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Privacy from './pages/Privacy';
import Support from './pages/Support';
import Terms from './pages/Terms';

function App() {
  return (
    <BrowserRouter basename="/equity">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/support" element={<Support />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

