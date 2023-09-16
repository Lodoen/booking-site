import { useEffect, useState } from "react";
import useReadProfile from "./useReadProfile";
import UpdateProfile from "./UpdateProfile";
import YourVenues from "./YourVenues";
import YourBookings from "./YourBookings";
import { BsCaretDown, BsCaretUp } from "react-icons/bs";
import * as S from "./index.styles";
import undefinedImg from "../../../assets/no-image-available.png";

export default function ProfilePage({ user }) {
  const [profile, setProfile] = useState({});
  const [isUpdating, setIsUpdating] = useState(false);
  const { data, isLoading, isError } = useReadProfile(
    user.name,
    user.accessToken,
  );

  const [isShowingVenues, setIsShowingVenues] = useState(true);
  const [isShowingBookings, setIsShowingBookings] = useState(true);

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
    <S.ProfilePage>
      <section className="profile-details">
        <figure>
          {<img src={avatar ? avatar : undefinedImg} alt="Profile image" />}
        </figure>
        <div>
          <h1>{name ? name : "Undefined"}</h1>
          <p>{venueManager ? "Venue Manager" : "Customer"}</p>
          <button
            onClick={() => setIsUpdating(!isUpdating)}
            className="toggle-update-form-button"
          >
            {isUpdating ? "Close update form" : "Open update form"} &gt;&gt;
          </button>
        </div>

        {isUpdating && (
          <UpdateProfile
            previousProfileData={user}
            setDisplayedProfile={setProfile}
          />
        )}
      </section>
      {user.venueManager && (
        <section>
          <div className="profile-controls">
            <h2>Your venues</h2>
            <button onClick={() => setIsShowingVenues(!isShowingVenues)}>
              {isShowingVenues ? <BsCaretDown /> : <BsCaretUp />}
            </button>
          </div>
          <YourVenues venues={venues} isShowingVenues={isShowingVenues} />
        </section>
      )}
      <section>
        <div className="profile-controls">
          <h2>Your Bookings</h2>
          <button onClick={() => setIsShowingBookings(!isShowingBookings)}>
            {isShowingBookings ? <BsCaretDown /> : <BsCaretUp />}
          </button>
        </div>
        <YourBookings
          bookings={bookings}
          isShowingBookings={isShowingBookings}
        />
      </section>
    </S.ProfilePage>
  );
}
