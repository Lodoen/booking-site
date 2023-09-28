import {
  BsFillStarFill,
  BsPinMap,
  BsPerson,
  BsWifi,
  BsFillCarFrontFill,
  BsFillCupHotFill,
  BsFileEarmarkPerson,
  BsCash,
} from "react-icons/bs";
import { GiSittingDog } from "react-icons/gi";
import * as S from "./index.styles";
import MediaShowcase from "./MediaShowcase";
import useCheckUndefined from "../../../hooks/useCheckUndefined";
import Feedback from "../../../components/Feedback";

export default function VenueDetails({ venue, isCustomerView = true }) {
  const { checkUndefined } = useCheckUndefined();

  if (!venue) {
    return <Feedback message="Found no venue" status="error" />;
  }

  const {
    media,
    location,
    maxGuests,
    owner,
    rating,
    meta,
    description,
    price,
  } = venue;

  return (
    <S.VenueDetails>
      <div className="image-details-wrapper">
        <MediaShowcase media={media ? media : []} />
        <section>
          {isCustomerView ? (
            <h1>{checkUndefined(venue.name)}</h1>
          ) : (
            <h2>{checkUndefined(venue.name)}</h2>
          )}

          <div className="details-amenities-wrapper">
            <section>
              <h2>About venue</h2>
              <div>
                <BsPinMap />
                {location ? (
                  <span>
                    {checkUndefined(location.city)},{" "}
                    {checkUndefined(location.country)}
                  </span>
                ) : (
                  <span>No location information given</span>
                )}
              </div>
              <div>
                <BsPerson />
                <span>
                  {maxGuests ? maxGuests : "No max guest information given"}
                </span>
              </div>
              <div>
                <BsCash />
                <span>{price ? price : "No price information given"}</span>
              </div>
              <div>
                <BsFillStarFill />
                <span>
                  {checkUndefined(rating)
                    ? checkUndefined(rating)
                    : "No rating information given"}
                </span>
              </div>
              <div>
                <BsFileEarmarkPerson />
                <span>
                  {owner && owner.name
                    ? owner.name
                    : "No owner information given"}
                </span>
              </div>
            </section>

            <section>
              <h2>Amenities</h2>
              <div>
                <BsWifi />
                <span>
                  Wifi {meta && meta.wifi ? "included" : "not included"}
                </span>
              </div>
              <div>
                <BsFillCarFrontFill />
                <span>
                  Parking {meta && meta.parking ? "included" : "not included"}
                </span>
              </div>
              <div>
                <BsFillCupHotFill />
                <span>
                  Breakfast{" "}
                  {meta && meta.breakfast ? "included" : "not included"}
                </span>
              </div>
              <div>
                <GiSittingDog />
                <span>
                  Pets {meta && meta.pets ? "allowed" : "not allowed"}
                </span>
              </div>
            </section>
          </div>
        </section>
      </div>

      <section className="description-wrapper">
        <h2>Description</h2>
        <div>
          <div>{description ? description : "No description given"}</div>
        </div>
      </section>
    </S.VenueDetails>
  );
}
