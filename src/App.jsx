import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Venue from "./pages/Venue";
import Manage from "./pages/Manage";
import Create from "./pages/Create";
import Profile from "./pages/Profile";
import RouteNotFound from "./pages/RouteNotFound";
import useLocalStorage from "./hooks/useLocalStorage";

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
            <Route path="venue/:id">
              <Route index element={<Venue />} />
              <Route path="manage" element={<Manage />} />
            </Route>
            <Route path="create" element={<Create />} />
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<RouteNotFound />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}
