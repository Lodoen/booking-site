import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import RegisterAttempt from "./RegisterAttempt";

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

export default function Register() {
  const [newAccount, setNewAccount] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    setNewAccount(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name:</label>
        <input {...register("name")} />
        <p>{errors.name?.message}</p>

        <label htmlFor="email">Email:</label>
        <input {...register("email")} />
        <p>{errors.email?.message}</p>

        <label htmlFor="password">Password:</label>
        <input {...register("password")} type="password" />
        <p>{errors.password?.message}</p>

        <label htmlFor="avatar">Avatar:</label>
        <input {...register("avatar")} />
        <p>{errors.avatar?.message}</p>

        <label htmlFor="venueManager">Venue manager:</label>
        <input
          {...register("venueManager")}
          type="checkbox"
          id="venueManager"
        />
        <p>{errors.venueManager?.message}</p>

        <br />
        <Link to="/login">Login &gt;&gt;</Link>
        <br />
        <button type="submit">Register</button>
      </form>

      {newAccount ? <RegisterAttempt userData={newAccount} /> : ""}
    </div>
  );
}
