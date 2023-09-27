import { useContext } from "react";
import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { UserContext } from "../../context/UserContext";
import AdminFacing from "./AdminFacing";
import CustomerFacing from "./CustomerFacing";
import Loading from "../../components/Loading";
import Feedback from "../../components/Feedback";

export default function Venue() {
  let params = useParams();
  const { user } = useContext(UserContext);

  const { data, isLoading, isError } = useApi(
    `/venues/${params.id}?_owner=true&_bookings=true`,
  );

  if (isLoading) {
    return <Loading text="venue" />;
  }

  if (isError) {
    return (
      <section>
        <h1>Error</h1>
        <Feedback message="Encountered error when retrieving venue." />
      </section>
    );
  }

  if (data.statusCode && (data.statusCode == 400 || data.statusCode == 404)) {
    return (
      <section>
        <h1>No venue found</h1>
        <Feedback message="No venue with matching id" status="error" />
      </section>
    );
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
