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
import { useState } from "react";

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
          <div style={{ border: "1px solid #000", padding: "10px" }}>
            <Link to={`/venue/${venue.id}`}>
              {media.length > 0 ? (
                <img
                  src={media[0]}
                  alt="venue showcase"
                  style={{ width: "100px", height: "100px" }}
                />
              ) : (
                <div>No image given</div>
              )}
              <h2>{name}</h2>
              <div>
                <BsFillStarFill />
                {rating}
              </div>
              <div>
                <BsPinMap />
                {location.city}, {location.country}
              </div>
              <div>
                <BsPerson />
                {guests}
              </div>
              <div>
                <div>{meta.wifi && <BsWifi />}</div>
                <div>{meta.parking && <BsFillCarFrontFill />}</div>
                <div>{meta.breakfast && <BsFillCupHotFill />}</div>
                <div>{meta.pets && <GiSittingDog />}</div>
              </div>
              <div>{price}kr per night</div>
              <div>
                <BsCalendarWeek />
                {extractDate(dateFrom)} - {extractDate(dateTo)}
              </div>
            </Link>
            <button disabled={isDisabled} onClick={() => cancelVenue(id)}>
              CANCEL
            </button>
            {showRemoveFeedback && <div>{showRemoveFeedback}</div>}
          </div>
        )}
      </div>
    );
  } catch (error) {
    return <div>error</div>;
  }
}
