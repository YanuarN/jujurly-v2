import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import FeedbackPage from "./pages/FeedbackPage/FeedbackPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage/ForgotPasswordPage";
import "./App.css";
import UserLookupPage from "./pages/UserLookupPage/UserLookupPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";

function App() {
  const isAuthenticated = !!localStorage.getItem("userData");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/beri-feedback" element={<UserLookupPage />} />
        <Route path="/beri-feedback/:userId" element={<FeedbackPage />} />
        <Route path="/dashboard" element={isAuthenticated ? <DashboardPage /> : <LoginPage />} />
        <Route path="/register" element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <RegisterPage />}/>
        <Route path="/login" element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <LoginPage />}/>
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
