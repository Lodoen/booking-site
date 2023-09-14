import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useLocalStorage from "../../../hooks/useLocalStorage";
import { useContext, useState } from "react";
import { UserContext } from "../../../context/UserContext";
import * as S from "./index.styles";

const schema = yup
  .object({
    name: yup
      .string()
      .max(20, "Your name must be 20 characters or lower")
      .matches(/^[\w]+$/, "Name can only use a-Z, 0-9, and _")
      .required("Please enter your full name"),
    email: yup
      .string()
      .email("Please enter a valid email")
      .matches(
        /^[\w\-.]+@stud\.noroff\.no$/,
        "Only stud.noroff.no emails are allowed to register",
      )
      .required("Please enter your email"),
    password: yup
      .string()
      .min(8, "Your password must be at least 8 characters")
      .required("Please enter your password"),
    avatar: yup.string().url("Must be a fully formed URL"),
    venueManager: yup.boolean(),
  })
  .required();

export default function RegisterForm() {
  const navigate = useNavigate();
  const { login, registerUser } = useAuth();
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
      setShowFeedback("Loading register ...");
      const { fetchedRegister, stringifiedRegister } = await registerUser(data);

      if (fetchedRegister.ok) {
        setShowFeedback("Loading login ...");
        const { fetchedLogin, stringifiedLogin } = await login(data);

        if (fetchedLogin.ok) {
          save(stringifiedLogin);
          setUser(stringifiedLogin);
          navigate("/profile");
        } else {
          setShowFeedback(stringifiedLogin.errors[0].message);
        }
      } else {
        setShowFeedback(stringifiedRegister.errors[0].message);
      }
    } catch (error) {
      setShowFeedback("Encountered error on register");
    }
  }

  return (
    <S.RegisterForm onSubmit={handleSubmit(onSubmit)}>
      <div className="input-group">
        <label htmlFor="name">Name:</label>
        <input {...register("name")} type="text" />
        <p>{errors.name?.message}</p>
      </div>

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

      <div className="input-group">
        <label htmlFor="avatar">Avatar:</label>
        <input {...register("avatar")} type="text" />
        <p>{errors.avatar?.message}</p>
      </div>

      <div className="checkbox-group">
        <input
          {...register("venueManager")}
          type="checkbox"
          id="venueManager"
        />
        <label htmlFor="venueManager" className="checkbox-label">
          Venue manager
        </label>
        <p>{errors.venueManager?.message}</p>
      </div>

      <Link to="/auth/login">Login &gt;&gt;</Link>

      <button type="submit">Register</button>
      {showFeedback ? <p>{showFeedback}</p> : null}
    </S.RegisterForm>
  );
}
