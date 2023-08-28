import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { UserContext } from "../../context/UserContext";
import useAuth from "../../hooks/useAuth";
import useLocalStorage from "../../hooks/useLocalStorage";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Please enter a valid email")
      .required("Please enter your email"),
    password: yup.string().required("Please enter your password"),
  })
  .required();

export default function Login() {
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
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email:</label>
        <input {...register("email")} />
        <p>{errors.email?.message}</p>

        <label htmlFor="password">Password:</label>
        <input {...register("password")} type="password" />
        <p>{errors.password?.message}</p>

        <Link to="/register">Register &gt;&gt;</Link>
        <br />
        <button type="submit">Login</button>
      </form>

      {showFeedback ? <p>{showFeedback}</p> : null}
    </div>
  );
}
