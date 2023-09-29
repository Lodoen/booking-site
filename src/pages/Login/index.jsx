import LoginForm from "./LoginForm";
import * as S from "./index.styles";

export default function Login() {
  return (
    <S.LoginWrapper>
      <h1>Login</h1>
      <LoginForm />
    </S.LoginWrapper>
  );
}
