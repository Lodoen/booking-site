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
      <div style={{ border: "1px solid #000", padding: "10px" }}>
        <Link to={`/venue/${id}`}>
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
            {maxGuests}
          </div>
          <div>
            <div>{meta.wifi && <BsWifi />}</div>
            <div>{meta.parking && <BsFillCarFrontFill />}</div>
            <div>{meta.breakfast && <BsFillCupHotFill />}</div>
            <div>{meta.pets && <GiSittingDog />}</div>
          </div>
          <div>{price}kr per night</div>
        </Link>
      </div>
    );
  } catch (error) {
    return <div>error</div>;
  }
}
