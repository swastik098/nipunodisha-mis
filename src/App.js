import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Auth/Login";
import AdminHome from "./pages/AdminPages/AdminHome";
import UserHome from "./pages/UserPages/UserHome";
import NotFoundPage from "./pages/NotFound";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import UserDashboard from "./components/Dashboard/UserDashboard";
import Reports from "./components/Reports/Reports";
import ProtectedRoute from "./components/protectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
          <Route path="/admin" element={<AdminHome />}>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="reports" element={<Reports isAdmin={true} />} />
            <Route index element={<Navigate to="dashboard" replace />} />
          </Route>
        </Route>

        <Route element={<ProtectedRoute allowedRoles={["user"]} />}>
          <Route path="/user" element={<UserHome />}>
            <Route path="dashboard" element={<UserDashboard />} />
            <Route path="reports" element={<Reports isAdmin={false} />} />
            <Route index element={<Navigate to="dashboard" replace />} />
          </Route>
        </Route>

        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="#" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
