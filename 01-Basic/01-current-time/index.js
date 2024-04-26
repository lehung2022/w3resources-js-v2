// Function to format time with leading zeros
function formatTime(num) {
  return (num < 10 ? "0" : "") + num;
}

// Function to display the current day and time
function displayDateTime() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const now = new Date();

  const dayOfWeek = daysOfWeek[now.getDay()];
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();
  const period = hour >= 12 ? "PM" : "AM";
  const formattedHour = hour % 12 === 0 ? 12 : hour % 12;

  const timeString = `${formattedHour} ${period} : ${formatTime(
    minute
  )} : ${formatTime(second)}`;

  const datetimeElement = document.getElementById("datetime");
  datetimeElement.textContent = `Today is: ${dayOfWeek}. Current time is: ${timeString}`;
}

// Call the displayDateTime function when the page loads
window.onload = function () {
  displayDateTime();
};
