import { useContext } from "react";
import { Link } from "react-router-dom";
import { BsHouse, BsPlusLg } from "react-icons/bs";
import { UserContext } from "../../../context/UserContext";
import DropdownButton from "./DropdownButton";
import * as S from "./index.styles";

export default function Nav() {
  const { user } = useContext(UserContext);

  return (
    <S.Nav>
      <ul>
        <li>
          <Link to="/" className="navigation-element">
            <span className="icon">
              <BsHouse />
            </span>
            <span className="desc">Home</span>
          </Link>
        </li>
        {user && user.venueManager && (
          <li>
            <Link to="/create" className="navigation-element">
              <span className="icon">
                <BsPlusLg />
              </span>
              <span className="desc">Venue</span>
            </Link>
          </li>
        )}
        {user && user.name ? (
          <DropdownButton />
        ) : (
          <Link to="/login" className="login-href">
            Login
          </Link>
        )}
      </ul>
    </S.Nav>
  );
}
