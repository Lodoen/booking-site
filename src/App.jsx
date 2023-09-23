import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Venue from "./pages/Venue";
import Create from "./pages/Create";
import Profile from "./pages/Profile";
import RouteNotFound from "./pages/RouteNotFound";
import useLocalStorage from "./hooks/useLocalStorage";
import AuthLayout from "./components/AuthLayout";

export default function App() {
  //Check if user is logged in on initial page load
  const { load } = useLocalStorage("user");
  const [user, setUser] = useState(load);
  return (
    <div>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="venue/:id" element={<Venue />} />
            <Route path="create" element={<Create />} />
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<RouteNotFound />} />
          </Route>
          <Route path="/auth" element={<AuthLayout />}>
            <Route index element={<Navigate to="/auth/login" replace />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </UserContext.Provider>
    </div>
  );
}
