import { useState } from "react";
import { Link } from "react-router-dom";
import {
  BsFillStarFill,
  BsPinMap,
  BsPerson,
  BsWifi,
  BsFillCarFrontFill,
  BsFillCupHotFill,
  BsCalendarWeek,
} from "react-icons/bs";
import { GiSittingDog } from "react-icons/gi";
import useExtractFromDate from "../../../../../../hooks/useExtractFromDate";
import useBooking from "../../../../../../hooks/useBooking";
import * as S from "./index.styles";
import undefinedImg from "../../../../../../assets/no-image-available.png";
import Alert from "../../../../../../components/Alert";
import useFeedback from "../../../../../../hooks/useFeedback";

export default function YourBookingItem({
  id,
  dateFrom,
  dateTo,
  guests,
  venue,
}) {
  const { extractDate } = useExtractFromDate();
  const { remove } = useBooking();
  const [isCancelled, setIsCancelled] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const { feedbackMessage, feedbackType, setFeedback } = useFeedback();
  const { name, media, price, rating, meta, location } = venue;

  const cancelVenue = async (id) => {
    try {
      setIsDisabled(true);
      setFeedback("Loading ...", "info");
      const { fetchedRemove } = await remove(id);

      if (fetchedRemove.ok) {
        setIsCancelled(true);
      } else {
        setFeedback(
          "Something went wrong when trying to cancel your booking, try again later.",
          "error",
        );
      }
    } catch (error) {
      setFeedback("Encountered error on cancel.", "error");
    }
  };

  try {
    return (
      <div>
        {isCancelled ? (
          <Alert>
            <span>Booking at {name} has been cancelled.</span>
          </Alert>
        ) : (
          <S.YourBookingItem>
            <Link to={`/venue/${venue.id}`}>
              <figure className="venue-showcase">
                <img
                  src={media && media.length > 0 ? media[0] : undefinedImg}
                  alt="Venue showcase"
                />
              </figure>
              <div className="title-and-rating">
                <h2>{name}</h2>
                <div className="detail">
                  <figure>
                    <BsFillStarFill />
                  </figure>
                  {rating}
                </div>
              </div>
              <div className="detail">
                <figure>
                  <BsPinMap />
                </figure>
                {location.city}, {location.country}
              </div>
              <div className="detail">
                <figure>
                  <BsPerson />
                </figure>
                {guests}
              </div>
              <div className="detail amenities">
                {meta.wifi && (
                  <figure>
                    <BsWifi title="Wifi included" />
                  </figure>
                )}
                {meta.parking && (
                  <figure>
                    <BsFillCarFrontFill title="Parking included" />
                  </figure>
                )}
                {meta.breakfast && (
                  <figure>
                    <BsFillCupHotFill title="Breakfast included" />
                  </figure>
                )}
                {meta.pets && (
                  <figure>
                    <GiSittingDog title="Pets allowed" />
                  </figure>
                )}
              </div>
              <div className="detail">{price}kr per night</div>
              <div className="detail">
                <figure>
                  <BsCalendarWeek />
                </figure>
                {extractDate(dateFrom)} - {extractDate(dateTo)}
              </div>
            </Link>
            <button
              disabled={isDisabled}
              onClick={() => cancelVenue(id)}
              className="base-button"
            >
              CANCEL
            </button>
            {feedbackMessage && (
              <Alert status={feedbackType}>
                <span>{feedbackMessage}</span>
              </Alert>
            )}
          </S.YourBookingItem>
        )}
      </div>
    );
  } catch (error) {
    return <div>error</div>;
  }
}
