import {
  BsFillStarFill,
  BsPinMap,
  BsPerson,
  BsWifi,
  BsFillCarFrontFill,
  BsFillCupHotFill,
  BsFileEarmarkPerson,
} from "react-icons/bs";
import { GiSittingDog } from "react-icons/gi";

export default function VenueDetails({ venue }) {
  if (!venue) {
    return <div>Found no venue</div>;
  }

  const { media, location, maxGuests, owner, rating, meta, description } =
    venue;

  return (
    <div>
      {media && media.length > 0 ? (
        <img
          src={media[0]}
          alt="venue showcase"
          style={{ width: "100px", height: "100px" }}
        />
      ) : (
        <div>No image given</div>
      )}
      <h2>{venue.name}</h2>

      <section>
        <h2>About venue</h2>
        <div>
          <BsPinMap />
          {location ? (
            <div>
              {location.city}, {location.country}
            </div>
          ) : (
            <div>No location information given</div>
          )}
        </div>
        <div>
          <BsPerson />
          {maxGuests ? (
            <div>{maxGuests}</div>
          ) : (
            <div>No max guest information given</div>
          )}
        </div>
        <div>
          <BsFileEarmarkPerson />
          {owner && owner.name ? (
            <div>{owner.name}</div>
          ) : (
            <div>No owner information given</div>
          )}
        </div>
        <div>
          <BsFillStarFill />
          {rating && rating ? (
            <div>{rating}</div>
          ) : (
            <div>No rating information given</div>
          )}
        </div>
      </section>

      <section>
        <h2>Amenities</h2>
        <div>
          <BsWifi />
          {meta && meta.wifi ? (
            <div>Wifi included</div>
          ) : (
            <div>Wifi not included</div>
          )}
        </div>
        <div>
          <BsFillCarFrontFill />
          {meta && meta.parking ? (
            <div>Parking included</div>
          ) : (
            <div>Parking not included</div>
          )}
        </div>
        <div>
          <BsFillCupHotFill />
          {meta && meta.breakfast ? (
            <div>Breakfast included</div>
          ) : (
            <div>Breakfast not included</div>
          )}
        </div>
        <div>
          <GiSittingDog />
          {meta && meta.pets ? (
            <div>Pets allowed</div>
          ) : (
            <div>Pets not allowed</div>
          )}
        </div>
      </section>

      <section>
        <h2>Description</h2>
        <div>
          {description ? (
            <div>{description}</div>
          ) : (
            <div>No description given</div>
          )}
        </div>
      </section>
    </div>
  );
}
