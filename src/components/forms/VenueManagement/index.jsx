import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

const schema = yup
  .object({
    name: yup.string().required("Please enter a venue name"),
    description: yup.string().required("Please enter a venue description"),
    media: yup.string("Enter a valid list of media urls"),
    price: yup
      .number()
      .typeError("Price must be a valid number")
      .min(0, "Enter a valid price")
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

export default function VenueManagement({
  venue = undefined,
  submitFunction,
  isDisabled = false,
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <section>
        <h2>Details</h2>
        <label htmlFor="name">Name*:</label>
        <input
          {...register("name")}
          type="text"
          defaultValue={details.name}
          disabled={isDisabled}
        />
        <p>{errors.name?.message}</p>

        <label htmlFor="description">Description*:</label>
        <input
          {...register("description")}
          type="text"
          defaultValue={details.description}
          disabled={isDisabled}
        />
        <p>{errors.description?.message}</p>

        <label htmlFor="media">Media:</label>
        <input
          {...register("media")}
          type="text"
          defaultValue={details.media}
          disabled={isDisabled}
        />
        <p>{errors.media?.message}</p>

        <label htmlFor="price">Price*:</label>
        <input
          {...register("price")}
          type="number"
          defaultValue={details.rating}
          disabled={isDisabled}
        />
        <p>{errors.price?.message}</p>

        <label htmlFor="maxGuests">Max guests*:</label>
        <input
          {...register("maxGuests")}
          type="number"
          defaultValue={details.maxGuests}
          disabled={isDisabled}
        />
        <p>{errors.maxGuests?.message}</p>

        <label htmlFor="rating">Rating:</label>
        <input
          {...register("rating")}
          type="number"
          defaultValue={details.rating}
          disabled={isDisabled}
        />
        <p>{errors.rating?.message}</p>
      </section>

      <section>
        <h2>Amenities</h2>
        <label htmlFor="wifi">Wifi:</label>
        <input
          type="checkbox"
          name="wifi"
          id="wifi"
          checked={meta.wifi}
          onChange={handleMetaChange}
          disabled={isDisabled}
        />

        <label htmlFor="parking">Parking:</label>
        <input
          type="checkbox"
          name="parking"
          id="parking"
          checked={meta.parking}
          onChange={handleMetaChange}
          disabled={isDisabled}
        />

        <label htmlFor="breakfast">Breakfast:</label>
        <input
          type="checkbox"
          name="breakfast"
          id="breakfast"
          checked={meta.breakfast}
          onChange={handleMetaChange}
          disabled={isDisabled}
        />

        <label htmlFor="pets">Pets:</label>
        <input
          type="checkbox"
          name="pets"
          id="pets"
          checked={meta.pets}
          onChange={handleMetaChange}
          disabled={isDisabled}
        />
      </section>

      <section>
        <h2>Location</h2>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          name="address"
          id="address"
          value={location.address}
          onChange={handleLocationChange}
          disabled={isDisabled}
        />

        <label htmlFor="city">City:</label>
        <input
          type="text"
          name="city"
          id="city"
          value={location.city}
          onChange={handleLocationChange}
          disabled={isDisabled}
        />

        <label htmlFor="zip">Zip:</label>
        <input
          type="text"
          name="zip"
          id="zip"
          value={location.zip}
          onChange={handleLocationChange}
          disabled={isDisabled}
        />

        <label htmlFor="country">Country:</label>
        <input
          type="text"
          name="country"
          id="country"
          value={location.country}
          onChange={handleLocationChange}
          disabled={isDisabled}
        />

        <label htmlFor="continent">Continent:</label>
        <input
          type="text"
          name="continent"
          id="continent"
          value={location.continent}
          onChange={handleLocationChange}
          disabled={isDisabled}
        />

        <label htmlFor="lat">Latitude:</label>
        <input
          type="number"
          name="lat"
          id="lat"
          value={location.lat}
          onChange={handleLocationChange}
          disabled={isDisabled}
        />

        <label htmlFor="lng">Longitude:</label>
        <input
          type="number"
          name="lng"
          id="lng"
          value={location.lng}
          onChange={handleLocationChange}
          disabled={isDisabled}
        />
      </section>

      <button type="submit" disabled={isDisabled}>
        Submit
      </button>
    </form>
  );
}
