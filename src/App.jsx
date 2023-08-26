import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Venue from "./pages/Venue";
import Manage from "./pages/Manage";
import Create from "./pages/Create";
import Profile from "./pages/Profile";
import RouteNotFound from "./pages/RouteNotFound";

export default function App() {
  return (
    <div>
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
    </div>
  );
}
