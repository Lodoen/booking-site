import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import ProfilePage from "./ProfilePage";

export default function Profile() {
  const { user } = useContext(UserContext);
  return user && user.name ? (
    <ProfilePage user={user} />
  ) : (
    <div>You have to logged in to view your profile</div>
  );
}
