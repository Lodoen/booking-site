import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useAuth from "../../../hooks/useAuth";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { useContext, useState } from "react";
import { UserContext } from "../../../context/UserContext";
import * as S from "./index.styles";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Please enter your email"),
    password: yup.string().required("Please enter your password"),
  })
  .required();

export default function LoginForm() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { save } = useLocalStorage("user");
  const { setUser } = useContext(UserContext);

  const [showFeedback, setShowFeedback] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    try {
      setShowFeedback("Loading ...");
      const { fetchedLogin, stringifiedLogin } = await login(data);

      if (fetchedLogin.ok) {
        save(stringifiedLogin);
        setUser(stringifiedLogin);
        navigate("/profile");
      } else {
        setShowFeedback(stringifiedLogin.errors[0].message);
      }
    } catch (error) {
      setShowFeedback("Encountered error on login");
    }
  }

  return (
    <S.LoginForm onSubmit={handleSubmit(onSubmit)}>
      <div className="input-group">
        <label htmlFor="email">Email:</label>
        <input {...register("email")} type="email" />
        <p>{errors.email?.message}</p>
      </div>

      <div className="input-group">
        <label htmlFor="password">Password:</label>
        <input {...register("password")} type="password" />
        <p>{errors.password?.message}</p>
      </div>

      <Link to="/auth/register">Register &gt;&gt;</Link>

      <button type="submit" className="base-button">
        Login
      </button>

      {showFeedback ? <p>{showFeedback}</p> : null}
    </S.LoginForm>
  );
}
