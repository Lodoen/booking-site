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
import * as S from "./index.styles";
import MediaShowcase from "./MediaShowcase";

export default function VenueDetails({ venue }) {
  if (!venue) {
    return <div>Found no venue</div>;
  }

  const { media, location, maxGuests, owner, rating, meta, description } =
    venue;

  return (
    <S.VenueDetails>
      <div className="image-details-wrapper">
        <MediaShowcase media={media ? media : []} />
        <section>
          <h2>{venue.name}</h2>

          <div className="details-amenities-wrapper">
            <section>
              <h2>About venue</h2>
              <div>
                <BsPinMap />
                {location ? (
                  <span>
                    {location.city}, {location.country}
                  </span>
                ) : (
                  <div>No location information given</div>
                )}
              </div>
              <div>
                <BsPerson />
                {maxGuests ? (
                  <span>{maxGuests}</span>
                ) : (
                  <div>No max guest information given</div>
                )}
              </div>
              <div>
                <BsFileEarmarkPerson />
                {owner && owner.name ? (
                  <span>{owner.name}</span>
                ) : (
                  <div>No owner information given</div>
                )}
              </div>
              <div>
                <BsFillStarFill />
                {rating && rating ? (
                  <span>{rating}</span>
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
                  <span>Wifi included</span>
                ) : (
                  <span>Wifi not included</span>
                )}
              </div>
              <div>
                <BsFillCarFrontFill />
                {meta && meta.parking ? (
                  <span>Parking included</span>
                ) : (
                  <span>Parking not included</span>
                )}
              </div>
              <div>
                <BsFillCupHotFill />
                {meta && meta.breakfast ? (
                  <span>Breakfast included</span>
                ) : (
                  <span>Breakfast not included</span>
                )}
              </div>
              <div>
                <GiSittingDog />
                {meta && meta.pets ? (
                  <span>Pets allowed</span>
                ) : (
                  <span>Pets not allowed</span>
                )}
              </div>
            </section>
          </div>
        </section>
      </div>

      <section className="description-wrapper">
        <h2>Description</h2>
        <div>
          {description ? (
            <div>{description}</div>
          ) : (
            <div>No description given</div>
          )}
        </div>
      </section>
    </S.VenueDetails>
  );
}
