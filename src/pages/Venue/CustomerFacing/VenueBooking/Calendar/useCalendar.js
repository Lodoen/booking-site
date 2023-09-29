import useExtractFromDate from "../../../../../hooks/useExtractFromDate";

export default function useCalendar(currentBookings) {
  const { extractDateNumber } = useExtractFromDate();

  const getListOfDates = (selectedDate) => {
    const checkIfVenueIsAvailable = (dateToCheck, bookings) => {
      //check if date is already booked
      for (let i = 0; i < bookings.length; i++) {
        const { dateFrom, dateTo } = bookings[i];

        const from = extractDateNumber(dateFrom);
        const selected = extractDateNumber(dateToCheck);
        const to = extractDateNumber(dateTo);

        if (selected >= from && selected <= to) {
          return false;
        }
      }

      return true;
    };

    //  Generate an array of all dates in a selected month:
    //    First: get last date of current month, by generating first date of next month
    //    and then subtracting one, meaning the previous date.
    //    Second: generate array of all dates in the selected month
    //    Third: convert all dates into an array of weeks
    const selectedYear = selectedDate.getFullYear();
    const selectedMonth = selectedDate.getMonth();

    // Check if the month is December (11), and adjust accordingly
    const nextMonthYear =
      selectedMonth === 11 ? selectedYear + 1 : selectedYear;
    const nextMonthMonth = selectedMonth === 11 ? 0 : selectedMonth + 1;

    const nextMonthFirstDay = new Date(nextMonthYear, nextMonthMonth, 1);
    const lastDateOfMonth = new Date(nextMonthFirstDay - 1);

    const dateList = [];

    //Generate todays date, to see if selectedDate is outdated
    const today = new Date();
    const day = today.getDate().toString().padStart(2, "0");
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const year = today.getFullYear().toString().padStart(4, "0");
    const dateToday = parseInt(`${year}${month}${day}`);

    //Generate all dates, from first to last
    for (let i = 1; i <= lastDateOfMonth.getDate(); i++) {
      const currentDate = new Date(selectedYear, selectedMonth, i);

      const dateString = i.toString().padStart(2, "0");
      const monthString = (selectedMonth + 1).toString().padStart(2, "0");
      const yearString = selectedYear.toString().padStart(4, "0");
      const dateUTC = `${yearString}-${monthString}-${dateString}T12:00:00.000Z`;
      const isAvailable = checkIfVenueIsAvailable(dateUTC, currentBookings);
      const isOutdated = extractDateNumber(dateUTC) < dateToday;

      dateList.push({
        date: i,
        weekdayIndex: currentDate.getDay(),
        dateUTC: dateUTC,
        isAvailable: isAvailable,
        isOutdated: isOutdated,
      });
    }

    //Divide the array with all days into an array of weeks
    const weeks = [];
    let currentWeek = [];

    dateList.forEach((date) => {
      //Save previous week and create new week
      if (date.weekdayIndex === 0 && currentWeek.length > 0) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
      currentWeek.push(date);
    });

    if (currentWeek.length > 0) {
      weeks.push(currentWeek);
    }

    return weeks;
  };

  return {
    getListOfDates,
  };
}
