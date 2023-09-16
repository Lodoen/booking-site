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
  const [showRemoveFeedback, setShowRemoveFeedback] = useState(false);
  const { name, media, price, rating, meta, location } = venue;

  const cancelVenue = async (id) => {
    try {
      setIsDisabled(true);
      setShowRemoveFeedback("Loading ...");
      const { fetchedRemove } = await remove(id);

      if (fetchedRemove.ok) {
        setIsCancelled(true);
      } else {
        setShowRemoveFeedback("We encountered error on remove");
      }
    } catch (error) {
      console.log(error);
      setShowRemoveFeedback("Encountered error on remove");
    }
  };

  try {
    return (
      <div>
        {isCancelled ? (
          <p>Cancelled!</p>
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
              <div className="detail">
                <figure>{meta.wifi && <BsWifi title="Wifi included" />}</figure>
                <figure>
                  {meta.parking && (
                    <BsFillCarFrontFill title="Parking included" />
                  )}
                </figure>
                <figure>
                  {meta.breakfast && (
                    <BsFillCupHotFill title="Breakfast included" />
                  )}
                </figure>
                <figure>
                  {meta.pets && <GiSittingDog title="Pets allowed" />}
                </figure>
              </div>
              <div className="detail">{price}kr per night</div>
              <div className="detail">
                <figure>
                  <BsCalendarWeek />
                </figure>
                {extractDate(dateFrom)} - {extractDate(dateTo)}
              </div>
            </Link>
            <button disabled={isDisabled} onClick={() => cancelVenue(id)}>
              CANCEL
            </button>
            {showRemoveFeedback && <div>{showRemoveFeedback}</div>}
          </S.YourBookingItem>
        )}
      </div>
    );
  } catch (error) {
    return <div>error</div>;
  }
}
