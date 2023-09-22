import { BsXLg } from "react-icons/bs";
import * as S from "./index.styles";

export default function FilterForm({ setFilter, filter, setIsFilterOpen }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const body = Object.fromEntries(formData.entries());
    setFilter((prevFilter) => ({
      ...prevFilter,
      price: {
        min: body["min-price"] ? parseInt(body["min-price"]) : undefined,
        max: body["max-price"] ? parseInt(body["max-price"]) : undefined,
      },
      guests: body.guests ? parseInt(body.guests) : undefined,
      amenities: {
        wifi: body.wifi ? true : false,
        parking: body.parking ? true : false,
        breakfast: body.breakfast ? true : false,
        pets: body.pets ? true : false,
      },
    }));
    setIsFilterOpen(false);
  };

  const handleClear = () => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      price: {
        min: undefined,
        max: undefined,
      },
      guests: undefined,
      amenities: {
        wifi: undefined,
        parking: undefined,
        breakfast: undefined,
        pets: undefined,
      },
    }));
    setIsFilterOpen(false);
  };

  const { price, guests, amenities } = filter;

  return (
    <S.FilterForm onSubmit={handleSubmit}>
      <div className="heading-and-close">
        <button onClick={() => setIsFilterOpen(false)} className="exit-button">
          <figure>
            <BsXLg />
          </figure>
        </button>
        <span>
          <h2>Filters</h2>
        </span>
      </div>

      <div className="input-group form-content">
        <h3>Price per night (kr)</h3>
        <label htmlFor="min">Min:</label>
        <input
          type="number"
          id="min-price"
          name="min-price"
          placeholder="0"
          min="0"
          defaultValue={price && price.min ? price.min : 0}
        />
        <label htmlFor="max">Max:</label>
        <input
          type="number"
          id="max-price"
          name="max-price"
          placeholder="10 000"
          min="0"
          defaultValue={price && price.max ? price.max : 0}
        />
      </div>
      <div className="input-group form-content">
        <h3>Min guests allowed</h3>
        <label htmlFor="guests">Guests:</label>
        <input
          type="number"
          id="guests"
          name="guests"
          placeholder="0"
          min="0"
          defaultValue={guests ? guests : 0}
        />
      </div>
      <div className="form-content">
        <h3>Amenities</h3>
        <div className="checkbox-group">
          <input
            type="checkbox"
            name="wifi"
            id="wifi"
            defaultChecked={amenities && amenities.wifi ? true : false}
          />
          <label htmlFor="wifi">Wifi included</label>
        </div>
        <div className="checkbox-group">
          <input
            type="checkbox"
            name="parking"
            id="parking"
            defaultChecked={amenities && amenities.parking ? true : false}
          />
          <label htmlFor="parking">Parking included</label>
        </div>
        <div className="checkbox-group">
          <input
            type="checkbox"
            name="breakfast"
            id="breakfast"
            defaultChecked={amenities && amenities.breakfast ? true : false}
          />
          <label htmlFor="breakfast">Breakfast included</label>
        </div>
        <div className="checkbox-group">
          <input
            type="checkbox"
            name="pets"
            id="pets"
            defaultChecked={amenities && amenities.pets ? true : false}
          />
          <label htmlFor="pets">Pets allowed</label>
        </div>
      </div>
      <div className="form-content">
        <button onClick={handleClear} className="clear-button">
          Clear filters
        </button>
        <button type="submit" className="base-button">
          Apply filters
        </button>
      </div>
    </S.FilterForm>
  );
}
