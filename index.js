//Index for what month we are in
const index = 0;

const calendar = document.getElementById("calendar");
//Names of the days
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Get all of the dates we need
const dt = new Date();
const currentMonth = dt.getMonth();
const currentDay = dt.getDay();
const currentYear = dt.getFullYear();
const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
const dateString = firstDayOfMonth.toLocaleDateString("en-us", {
  weekday: "long",
  year: "numeric",
  month: "numeric",
  day: "numeric",
});

function addDaysToScreen() {
  const dayNamesOnCalendar = document.getElementById("dayNames");
  //Using +4 since we only want to see 5 days
  endDay = currentDay + 4;
  //Add days to screen
  for (i = currentDay; i <= endDay; i++) {
    const newElement = document.createElement("p");
    newElement.classList.add("dayName");
    if (i > weekdays.length - 1) {
      holder = i;
      i = 0;
      endDay = endDay - holder;
    }
    newElement.innerHTML = weekdays[i];
    dayNamesOnCalendar.appendChild(newElement);
  }
}

addDaysToScreen();
