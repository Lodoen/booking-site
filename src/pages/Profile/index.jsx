import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import ProfilePage from "./ProfilePage";
import Feedback from "../../components/Feedback";

export default function Profile() {
  const { user } = useContext(UserContext);

  return user && user.name ? (
    <ProfilePage user={user} />
  ) : (
    <section>
      <h1>Not available</h1>
      <Feedback
        message="You have to logged in to view your profile"
        status="error"
      />
    </section>
  );
}
