export const formatDate = (dateToFormat) => {
  const date = new Date(dateToFormat);
  // Array of month names for formatting
  const monthNames = [
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

  // Extracting individual date components
  const month = monthNames[date.getMonth()]; // Getting month name
  const day = date.getDate();
  const year = date.getFullYear();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  // Pad minute with zero if less than 10
  minutes = minutes < 10 ? "0" + minutes : minutes;

  // Construct the formatted date string
  const formattedDate = `${month} ${day}, ${year} at ${hours}:${minutes} ${ampm}`;
  return formattedDate;
};

// Test
const testDate = new Date("2023-09-08T07:24:17.475Z"); // Represents "Sep 8, 2023 at 10:24 AM"
console.log(formatDate(testDate));

export function formatPrice(price) {
  let numPrice = parseFloat(price);

  if (numPrice === 0) return "0.0";

  return String(Math.trunc(numPrice));
}

// Test
console.log(formatPrice("624.00")); // Expected output: 624
console.log(formatPrice("0.00")); // Expected output: 0.0
