import { useParams } from "react-router-dom";

export default function Manage() {
  let params = useParams();
  console.log(params);
  return <div>Individual manage venue page: {params.id}</div>;
}
