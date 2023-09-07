import { useContext } from "react";
import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { UserContext } from "../../context/UserContext";
import AdminFacing from "./AdminFacing";
import CustomerFacing from "./CustomerFacing";

export default function Venue() {
  let params = useParams();
  const { user } = useContext(UserContext);

  const { data, isLoading, isError } = useApi(
    `/venues/${params.id}?_owner=true&_bookings=true`,
  );

  if (isLoading) {
    return (
      <div>
        <h1>Loading venues</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h1>Error</h1>
      </div>
    );
  }

  if (data.statusCode && (data.statusCode == 400 || data.statusCode == 404)) {
    return <div>No venue with matching id</div>;
  }

  const isOwnerDefined = data && data.owner && data.owner.name;

  return user &&
    user.venueManager &&
    isOwnerDefined &&
    user.name === data.owner.name ? (
    <AdminFacing venue={data} />
  ) : (
    <CustomerFacing venue={data} />
  );
}
