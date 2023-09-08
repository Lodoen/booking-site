import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import useLocalStorage from "../../../hooks/useLocalStorage";

export default function Nav() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const { remove } = useLocalStorage("user");

  const handleLogout = () => {
    remove();
    setUser(undefined);
    navigate("/");
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/venue/1">Venue 1</Link>
        </li>
        <li>
          <Link to="/venue/1/manage">Manage venue 1</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/create">Create</Link>
        </li>
      </ul>
      <button onClick={() => handleLogout()}>Logout</button>
    </nav>
  );
}
