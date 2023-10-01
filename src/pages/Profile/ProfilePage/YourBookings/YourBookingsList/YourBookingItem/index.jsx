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
import useFeedback from "../../../../../../hooks/useFeedback";
import Feedback from "../../../../../../components/Feedback";
import useCheckUndefined from "../../../../../../hooks/useCheckUndefined";

export default function YourBookingItem({
  id,
  dateFrom,
  dateTo,
  guests,
  venue,
  updated,
}) {
  const { extractDate } = useExtractFromDate();
  const { remove } = useBooking();
  const [isCancelled, setIsCancelled] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const { feedbackMessage, feedbackType, setFeedback } = useFeedback();
  const { name, media, price, rating, meta, location } = venue;
  const { checkUndefined } = useCheckUndefined();

  const cancelBooking = async (id) => {
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
      setIsDisabled(false);
      setFeedback("Encountered error on cancel.", "error");
    }
  };

  try {
    return (
      <div>
        {isCancelled ? (
          <S.YourCancelledBookingItem>
            <Feedback
              message={`Booking at ${name} has been cancelled.`}
            ></Feedback>
          </S.YourCancelledBookingItem>
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
                <h2>{checkUndefined(name)}</h2>
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
                {checkUndefined(location.city)},{" "}
                {checkUndefined(location.country)}
              </div>
              <div className="detail">
                <figure>
                  <BsPerson />
                </figure>
                {checkUndefined(guests)}
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
              <div className="detail">Booked on: {extractDate(updated)}</div>
              <div className="detail">
                <figure>
                  <BsCalendarWeek />
                </figure>
                {extractDate(dateFrom)} - {extractDate(dateTo)}
              </div>
            </Link>
            <button
              disabled={isDisabled}
              onClick={() => cancelBooking(id)}
              className="base-button"
            >
              CANCEL
            </button>
            <Feedback message={feedbackMessage} status={feedbackType} />
          </S.YourBookingItem>
        )}
      </div>
    );
  } catch (error) {
    return <Feedback message="Could not render booking" status="error" />;
  }
}
