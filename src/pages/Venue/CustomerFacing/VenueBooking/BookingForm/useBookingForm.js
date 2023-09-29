import useExtractFromDate from "../../../../../hooks/useExtractFromDate";

export default function useBookingForm() {
  const { extractDateNumber } = useExtractFromDate();

  const checkAvailableDates = (start, end, currentBookings) => {
    try {
      const wantFrom = extractDateNumber(start);
      const wantTo = extractDateNumber(end);

      for (let i = 0; i < currentBookings.length; i++) {
        const { dateFrom, dateTo } = currentBookings[i];

        const bookedFrom = extractDateNumber(dateFrom);
        const bookedTo = extractDateNumber(dateTo);

        //  Test if wantFrom -> wantTo has a value equal to bookedFrom or bookedTo
        //  false means the venue is already booked on that date
        //  1. Loop wantFrom until wantTo
        for (let j = wantFrom; j <= wantTo; j++) {
          //  2. Test if the current value is equal to bookedFrom || bookedTo
          if (j == bookedFrom || j == bookedTo) {
            return false;
          }
        }
      }

      //  3. All dates are available, if no dates were found in the loop
      return true;
    } catch (error) {
      return undefined;
    }
  };

  return {
    checkAvailableDates,
  };
}
