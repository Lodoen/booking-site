import { useEffect, useState } from "react";
import useReadProfile from "./useReadProfile";
import UpdateProfile from "./UpdateProfile";
import YourVenues from "./YourVenues";
import YourBookings from "./YourBookings";

export default function ProfilePage({ user }) {
  const [profile, setProfile] = useState({});
  const [isUpdating, setIsUpdating] = useState(false);
  const { data, isLoading, isError } = useReadProfile(
    user.name,
    user.accessToken,
  );

  useEffect(() => {
    setProfile(data);
  }, [data]);

  if (isLoading) {
    return (
      <div>
        <h1>Loading profile</h1>
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

  const { avatar, name, venueManager, venues, bookings } = profile;
  return (
    <div>
      <section>
        <div>{avatar ? <img src={avatar} /> : <span>No image</span>}</div>
        <h1>{name ? name : "Undefined"}</h1>
        <p>{venueManager ? "Venue Manager" : "Customer"}</p>
        <button onClick={() => setIsUpdating(!isUpdating)}>Update</button>
        {isUpdating && (
          <UpdateProfile
            previousProfileData={user}
            setDisplayedProfile={setProfile}
          />
        )}
      </section>
      {user.venueManager && (
        <section>
          <h2>Your venues</h2>
          <YourVenues venues={venues} />
        </section>
      )}
      <section>
        <h2>Your Bookings</h2>
        <YourBookings bookings={bookings} />
      </section>
    </div>
  );
}
