// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminLanding from './pages/AdminLanding/AdminLanding';
import DashboardPage from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminLanding />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;