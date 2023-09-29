export default function useExtractFromDate() {
  const extractDateNumber = (string) => {
    try {
      return parseInt(string.split("T")[0].replaceAll("-", ""));
    } catch (error) {
      return string;
    }
  };

  const extractDate = (string) => {
    const monthShortNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    try {
      const splitDateElements = string.split("T")[0].split("-");
      return `${splitDateElements[2]} ${
        monthShortNames[parseInt(splitDateElements[1]) - 1]
      } ${splitDateElements[0]}`;
    } catch (error) {
      return string;
    }
  };

  return {
    extractDateNumber,
    extractDate,
  };
}
