import * as S from "./index.styles";
import logo from "../../../assets/logo.svg";

import { Link } from "react-router-dom";

export default function Header() {
  return (
    <S.Header>
      <nav>
        <Link to="/">
          <figure>
            <img src={logo} alt="Holidaze logo" />
          </figure>
        </Link>
      </nav>
    </S.Header>
  );
}
