// Function to get current date in specified format
function getCurrentDate(format) {
  const today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1; // January is 0, so we add 1
  const year = today.getFullYear();

  // Pad day and month with leading zero if needed
  day = day < 10 ? `0${day}` : day;
  month = month < 10 ? `0${month}` : month;

  // Determine the desired date format
  let formattedDate;
  switch (format) {
    case "mm-dd-yyyy":
      formattedDate = `${month}-${day}-${year}`;
      break;
    case "mm/dd/yyyy":
      formattedDate = `${month}/${day}/${year}`;
      break;
    case "dd-mm-yyyy":
      formattedDate = `${day}-${month}-${year}`;
      break;
    case "dd/mm/yyyy":
      formattedDate = `${day}/${month}/${year}`;
      break;
    default:
      formattedDate = "Invalid format";
      break;
  }

  return formattedDate;
}

// Function to display current date in specified format
function displayCurrentDate() {
  const dateOutput = document.getElementById("dateOutput");
  const formattedDate = getCurrentDate("dd/mm/yyyy"); // Change format as needed
  dateOutput.textContent = `Current Date: ${formattedDate}`;
}

// Call the function to display current date on page load
displayCurrentDate();
