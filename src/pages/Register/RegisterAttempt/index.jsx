import { Navigate } from "react-router-dom";
import useRegister from "../useRegister";

export default function RegisterAttempt({ userData }) {
  const { account, isLoading, isError } = useRegister(userData);

  if (isLoading) {
    return <p>Loading attempt ...</p>;
  }

  if (isError) {
    return <p>Error</p>;
  }

  //API only returns statuscode if request was unsuccessful
  if (account.statusCode) {
    return <p>{account.errors[0].message}</p>;
  }

  return <Navigate to="/login" replace={true} />;
}
