import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import * as S from "./index.styles";

export default function AuthLayout() {
  return (
    <S.Container>
      <div className="floating-box-wrapper">
        <div className="floating-box">
          <Header />
          <main>
            <Outlet />
          </main>
        </div>
      </div>
      <Footer />
    </S.Container>
  );
}
