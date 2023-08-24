import { useParams } from "react-router-dom";

export default function Venue() {
  let params = useParams();
  console.log(params);
  return <div>Individual venue page: {params.id}</div>;
}
