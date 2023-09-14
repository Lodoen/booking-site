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

            {maxGuests}
          </div>
          <div className="detail">
            <figure>{meta.wifi && <BsWifi title="Wifi included" />}</figure>
            <figure>
              {meta.parking && <BsFillCarFrontFill title="Parking included" />}
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
        </Link>
      </S.VenueItem>
    );
  } catch (error) {
    return <div>error</div>;
  }
}
