import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav";
import * as S from "./index.styles";
import logo from "../../../assets/logo.svg";
import DropdownMenu from "./DropdownMenu";
import { HeaderContext } from "../../../context/HeaderContext";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <S.Header>
      <HeaderContext.Provider value={{ isDropdownOpen, setIsDropdownOpen }}>
        <div className="header-content">
          <Link to="/">
            <figure>
              <img src={logo} alt="Holidaze logo" />
            </figure>
          </Link>
          <Nav />
        </div>
        {isDropdownOpen && <DropdownMenu />}
      </HeaderContext.Provider>
    </S.Header>
  );
}
