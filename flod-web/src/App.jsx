// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLanding from './pages/AdminLanding/AdminLanding';
import DashboardPage from './pages/DashboardLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminLanding />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        {/* Remove the redundant redirect route */}
      </Routes>
    </Router>
  );
}

export default App;