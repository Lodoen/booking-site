import { useEffect, useState } from "react";
import useReadProfile from "./useReadProfile";
import UpdateProfile from "./UpdateProfile";
import YourVenues from "./YourVenues";
import YourBookings from "./YourBookings";
import { BsCaretDown, BsCaretUp } from "react-icons/bs";
import * as S from "./index.styles";
import undefinedImg from "../../../assets/no-image-available.png";
import Loading from "../../../components/Loading";
import Feedback from "../../../components/Feedback";

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
    return <Loading text="profile" />;
  }

  if (isError) {
    return (
      <section>
        <h1>Not available</h1>
        <Feedback
          message="Encountered error when retrieving profile."
          status="error"
        />
      </section>
    );
  }

  if (data.statusCode && (data.statusCode == 401 || data.statusCode == 404)) {
    return (
      <section>
        <h1>No profile found</h1>
        <Feedback message="No profile with matching name" status="error" />
      </section>
    );
  }

  const { avatar, name, venueManager, venues, bookings } = profile;
  const sortedVenues =
    venues && Array.isArray(venues)
      ? [...venues].sort((a, b) => new Date(b.updated) - new Date(a.updated))
      : [];
  const sortedBookings =
    bookings && Array.isArray(bookings)
      ? [...bookings].sort((a, b) => new Date(b.updated) - new Date(a.updated))
      : [];

  return (
    <S.ProfilePage>
      <div className="profile-details-wrapper">
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
      </div>

      {user.venueManager && (
        <section>
          <div className="profile-controls">
            <h2>Your venues</h2>
            <button onClick={() => setIsShowingVenues(!isShowingVenues)}>
              {isShowingVenues ? <BsCaretDown /> : <BsCaretUp />}
            </button>
          </div>
          <YourVenues venues={sortedVenues} isShowingVenues={isShowingVenues} />
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
          bookings={sortedBookings}
          isShowingBookings={isShowingBookings}
        />
      </section>
    </S.ProfilePage>
  );
}
