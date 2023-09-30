import { Link } from "react-router-dom";
import {
  BsFillStarFill,
  BsPinMap,
  BsPerson,
  BsWifi,
  BsFillCarFrontFill,
  BsFillCupHotFill,
} from "react-icons/bs";
import { GiSittingDog } from "react-icons/gi";
import * as S from "./index.styles";
import undefinedImg from "../../../assets/no-image-available.png";
import useCheckUndefined from "../../../hooks/useCheckUndefined";
import Feedback from "../../Feedback";

export default function VenueItem({
  id,
  name,
  media,
  price,
  maxGuests,
  rating,
  meta,
  location,
}) {
  const { checkUndefined } = useCheckUndefined();
  try {
    return (
      <S.VenueItem>
        <Link to={`/venue/${id}`}>
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
              <span>
                {rating && typeof rating === "number" ? rating.toFixed(0) : 0}
              </span>
            </div>
          </div>
          <div className="detail">
            <figure>
              <BsPinMap />
            </figure>
            {checkUndefined(location.city)}, {checkUndefined(location.country)}
          </div>
          <div className="detail">
            <figure>
              <BsPerson />
            </figure>

            {checkUndefined(maxGuests)}
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
          <div className="detail">{checkUndefined(price)}kr per night</div>
        </Link>
      </S.VenueItem>
    );
  } catch (error) {
    return <Feedback message="Error loading venue item" status="error" />;
  }
}
