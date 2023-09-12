import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import * as S from "./index.styles";

export default function Layout() {
  return (
    <S.Container>
      <Header />
      <Outlet />
      <Footer />
    </S.Container>
  );
}
