import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { BsWifi, BsFillCarFrontFill, BsFillCupHotFill } from "react-icons/bs";
import { GiSittingDog } from "react-icons/gi";
import * as S from "./index.styles";

const schema = yup
  .object({
    name: yup.string().required("Please enter a venue name"),
    description: yup.string().required("Please enter a venue description"),
    media: yup.string("Enter a valid list of media urls"),
    price: yup
      .number()
      .typeError("Price must be a valid number")
      .min(1, "Enter a valid price")
      .required("Please enter a rating"),
    maxGuests: yup
      .number()
      .typeError("Max guests must be a valid number between 1 and 100")
      .min(1, "Enter a max number of guests between 1 and 100")
      .max(100, "Enter a max number of guests between 1 and 100")
      .integer()
      .required("Please enter max number of guests"),
    rating: yup
      .number()
      .typeError("Rating must be a valid number between 0 and 5")
      .min(0, "Enter a rating between 0 and 5")
      .max(5, "Enter a rating between 0 and 5"),
  })
  .required();

export default function VenueManagementForm({
  venue,
  submitFunction,
  isDisabled,
}) {
  const [meta, setMeta] = useState(
    venue
      ? {
          wifi: venue.meta.wifi,
          parking: venue.meta.parking,
          breakfast: venue.meta.breakfast,
          pets: venue.meta.pets,
        }
      : {
          wifi: false,
          parking: false,
          breakfast: false,
          pets: false,
        },
  );

  const [location, setLocation] = useState(
    venue
      ? {
          address: venue.location.address,
          city: venue.location.city,
          zip: venue.location.zip,
          country: venue.location.country,
          continent: venue.location.continent,
          lat: venue.location.lat,
          lng: venue.location.lng,
        }
      : {
          address: "",
          city: "",
          zip: "",
          country: "",
          continent: "",
          lat: 0,
          lng: 0,
        },
  );

  const handleMetaChange = (event) => {
    const { name, checked } = event.target;
    setMeta((prevValues) => ({ ...prevValues, [name]: checked }));
  };

  const handleLocationChange = (event) => {
    const { name, value } = event.target;
    setLocation((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const convertToArray = (string) => {
    return string
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item !== "");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    const { media, ...combinedData } = { ...data, meta, location };
    const body = { ...combinedData, media: convertToArray(media) };
    submitFunction(body);
  }

  const details = venue
    ? {
        name: venue.name,
        description: venue.description,
        media: venue.media,
        price: venue.price,
        maxGuests: venue.maxGuests,
        rating: venue.rating,
      }
    : {
        name: "",
        description: "",
        media: "",
        price: 0,
        maxGuests: 0,
        rating: 0,
      };

  return (
    <S.VenueManagementForm onSubmit={handleSubmit(onSubmit)}>
      {!venue && <h1>Create venue</h1>}

      <div className="image-details-wrapper">
        <section>
          <h2>Venue media</h2>
          <div className="input-group">
            <label htmlFor="media">Media (URLs separated by comma):</label>
            <textarea
              {...register("media")}
              type="text"
              defaultValue={details.media}
              disabled={isDisabled}
            />
            <p>{errors.media?.message}</p>
          </div>
        </section>

        <section>
          <h2>Details about venue</h2>
          <div className="input-group">
            <label htmlFor="name">Name of venue*:</label>
            <input
              {...register("name")}
              type="text"
              defaultValue={details.name}
              disabled={isDisabled}
            />
            <p>{errors.name?.message}</p>
          </div>

          <div className="details-amenities-wrapper">
            <section>
              <h3>About</h3>

              <div className="input-group">
                <label htmlFor="price">Price*:</label>
                <input
                  {...register("price")}
                  type="number"
                  defaultValue={details.rating}
                  disabled={isDisabled}
                  min="1"
                />
                <p>{errors.price?.message}</p>
              </div>

              <div className="input-group">
                <label htmlFor="maxGuests">Max guests*:</label>
                <input
                  {...register("maxGuests")}
                  type="number"
                  defaultValue={details.maxGuests}
                  disabled={isDisabled}
                  min="1"
                  max="100"
                />
                <p>{errors.maxGuests?.message}</p>
              </div>

              <div className="input-group">
                <label htmlFor="rating">Rating:</label>
                <input
                  {...register("rating")}
                  type="number"
                  defaultValue={details.rating}
                  disabled={isDisabled}
                  min="0"
                />
                <p>{errors.rating?.message}</p>
              </div>
            </section>

            <section>
              <h3>Amenities</h3>

              <div className="checkbox-group">
                <input
                  type="checkbox"
                  name="wifi"
                  id="wifi"
                  checked={meta.wifi}
                  onChange={handleMetaChange}
                  disabled={isDisabled}
                />
                <label htmlFor="wifi">
                  <BsWifi />
                  Wifi included
                </label>
              </div>

              <div className="checkbox-group">
                <input
                  type="checkbox"
                  name="parking"
                  id="parking"
                  checked={meta.parking}
                  onChange={handleMetaChange}
                  disabled={isDisabled}
                />
                <label htmlFor="parking">
                  <BsFillCarFrontFill />
                  Parking available
                </label>
              </div>

              <div className="checkbox-group">
                <input
                  type="checkbox"
                  name="breakfast"
                  id="breakfast"
                  checked={meta.breakfast}
                  onChange={handleMetaChange}
                  disabled={isDisabled}
                />
                <label htmlFor="breakfast">
                  <BsFillCupHotFill />
                  Breakfast included
                </label>
              </div>

              <div className="checkbox-group">
                <input
                  type="checkbox"
                  name="pets"
                  id="pets"
                  checked={meta.pets}
                  onChange={handleMetaChange}
                  disabled={isDisabled}
                />
                <label htmlFor="pets">
                  <GiSittingDog />
                  Pets allowed
                </label>
              </div>
            </section>
          </div>
        </section>
      </div>

      <div>
        <div className="input-group description-wrapper">
          <label htmlFor="description">Description*:</label>
          <textarea
            {...register("description")}
            type="text"
            defaultValue={details.description}
            disabled={isDisabled}
          />
          <p>{errors.description?.message}</p>
        </div>
      </div>

      <section>
        <h2>Location</h2>
        <div className="input-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            name="address"
            id="address"
            value={location.address}
            onChange={handleLocationChange}
            disabled={isDisabled}
          />
        </div>

        <div className="input-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            name="city"
            id="city"
            value={location.city}
            onChange={handleLocationChange}
            disabled={isDisabled}
          />
        </div>

        <div className="input-group">
          <label htmlFor="zip">Zip:</label>
          <input
            type="text"
            name="zip"
            id="zip"
            value={location.zip}
            onChange={handleLocationChange}
            disabled={isDisabled}
          />
        </div>

        <div className="input-group">
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            name="country"
            id="country"
            value={location.country}
            onChange={handleLocationChange}
            disabled={isDisabled}
          />
        </div>

        <div className="input-group">
          <label htmlFor="continent">Continent:</label>
          <input
            type="text"
            name="continent"
            id="continent"
            value={location.continent}
            onChange={handleLocationChange}
            disabled={isDisabled}
          />
        </div>

        <div className="input-group">
          <label htmlFor="lat">Latitude:</label>
          <input
            type="number"
            name="lat"
            id="lat"
            value={location.lat}
            onChange={handleLocationChange}
            disabled={isDisabled}
          />
        </div>

        <div className="input-group">
          <label htmlFor="lng">Longitude:</label>
          <input
            type="number"
            name="lng"
            id="lng"
            value={location.lng}
            onChange={handleLocationChange}
            disabled={isDisabled}
          />
        </div>
      </section>

      <button type="submit" disabled={isDisabled} className="base-button">
        {venue ? "Update" : "Create"}
      </button>
    </S.VenueManagementForm>
  );
}
