import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import Login from "./shared/login/Login";
import Register from "./shared/register/Register";
import Dashboard from "./pages/Dashboard";
import { authProvider } from "./api/auth";
import LoadingOverlay from "./components/Loading/LoadingOverlay";

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route
          path="/"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
      </Routes>
      <LoadingOverlay />
    </AppProvider>
  );
}
export default App;

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  let location = useLocation();

  if (!authProvider.isAuth()) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  return children;
};
