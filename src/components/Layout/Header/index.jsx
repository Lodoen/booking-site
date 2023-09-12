import Nav from "../Nav";
import * as S from "./index.styles";
import logo from "../../../assets/logo.svg";
import { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import { HeaderContext } from "../../../context/HeaderContext";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <S.Header>
      <HeaderContext.Provider value={{ isDropdownOpen, setIsDropdownOpen }}>
        <div className="header-content">
          <figure>
            <img src={logo} alt="Holidaze logo" />
          </figure>
          <Nav />
        </div>
        {isDropdownOpen && <DropdownMenu />}
      </HeaderContext.Provider>
    </S.Header>
  );
}
