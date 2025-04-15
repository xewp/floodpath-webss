// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLanding from './pages/AdminLanding/AdminLanding';
import DashboardPage from './pages/DashboardLayout';
import UserLanding from './pages/UserLanding/UserLanding';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminLanding />} /> {/* Changed default */}

        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/user-landing" element={<UserLanding />} /> {/* Define the route for UserLanding */}
      </Routes>
    </Router>
  );
}

export default App;