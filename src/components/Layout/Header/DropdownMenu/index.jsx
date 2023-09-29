import { useContext } from "react";
import { BsPerson } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../../context/UserContext";
import useLocalStorage from "../../../../hooks/useLocalStorage";
import * as S from "./index.styles";
import { HeaderContext } from "../../../../context/HeaderContext";

export default function DropdownMenu() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const { remove } = useLocalStorage("user");
  const { setIsDropdownOpen } = useContext(HeaderContext);

  const handleLogout = () => {
    setIsDropdownOpen(false);
    remove();
    setUser(undefined);
    navigate("/");
  };

  const handleRedirect = (href) => {
    setIsDropdownOpen(false);
    switch (href) {
      case "profile":
        navigate("/profile");
        break;
      case "create":
        navigate("/create");
        break;
      default:
        navigate("/");
    }
  };

  return (
    <S.Dropdown>
      <div className="dropdown">
        <div>
          <span className="dropdown-header">Profile</span>
          <div className="user">
            <div className="user-icon">
              <BsPerson />
            </div>
            <div className="user-details">
              <p>{user && user.name ? user.name : "Undefined"}</p>
              <p>{user && user.email ? user.email : "Undefined"}</p>
            </div>
          </div>
          <button onClick={() => handleRedirect("profile")}>Profile</button>
        </div>
        <div>
          <span className="dropdown-header">Shortcuts</span>
          <button onClick={() => handleRedirect()}>Home</button>
          {user && user.venueManager && (
            <button onClick={() => handleRedirect("create")}>Create</button>
          )}
        </div>
        <div>
          <button onClick={() => handleLogout()}>Log out</button>
        </div>
      </div>
    </S.Dropdown>
  );
}
