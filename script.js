let date = new Date();
let month = date.getMonth();
let year = date.getFullYear();
let btnNext = document.querySelector(".next-btn");
let btnPrevious = document.querySelector(".prev-btn");

let dayWeeks = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function renderCalendar() {
  let currentDate = new Date();
  let currentDay = currentDate.getDate();
  let firstDayMonth = new Date(year, month, 1).getDay();
  let lastDayMonth = new Date(year, month + 1, 0).getDate();

  let currentMonth = document.getElementById("current-month");
  currentMonth.innerText = months[month] + " " + year;

  let days = document.getElementById("days");
  days.innerHTML = "";

  for (let i = 0; i < firstDayMonth; i++) {
    days.innerHTML += `<div></div>`;
  }

  for (let i = 1; i < lastDayMonth + 1; i++) {
    let days = document.getElementById("days");

    days.innerHTML += `<div class= "${
      i === currentDay && currentDate.getMonth() === month ? "day-current" : ""
    } day" id = "day-${i}">${i}</div>`;
  }

  let availableDays = [27, 28];

  availableDays.forEach((day) => {
    let daysList = document.querySelectorAll(".days .day");
    console.log(daysList, daysList[day - 1]);
    let dayElement = daysList[day - 1];

    dayElement.classList.add("day-available");

    let rightContainer = document.querySelector(".right-container");
    dayElement.addEventListener("click", () => {
      rightContainer.classList.add("schedule");

      let buttons = document.querySelector(".container-buttons");
      buttons.classList.add("schedule");

      daysList.forEach((dayElement) => {
        dayElement.classList.remove("day-selected");
      });

      dayElement.classList.add("day-selected");

      currentDate.setDate(day);
      console.log(currentDate, daysList);
      let selectedDay = document.getElementById("selected-day");
      selectedDay.innerHTML = `<div>${dayWeeks[currentDate.getDay()]}, ${
        months[date.getMonth()]
      }, ${day}</div>`;
    });
  });
}

let schedulesDay23 = [
  "13:00pm",
  "14:00pm",
  "15:00pm",
  "16:00pm",
  "17:00pm",
  "18:00pm",
];

let container = document.querySelector(".container-buttons");

schedulesDay23.forEach((time) => {
  const button = document.createElement("button");
  button.textContent = time;
  button.classList.add("schedule");
  container.appendChild(button);
});

btnNext.addEventListener("click", () => {
  month++;
  if (month > 11) {
    month = 0;
    year++;
  }
  renderCalendar();
});

btnPrevious.addEventListener("click", () => {
  month--;
  if (month < 0) {
    month = 11;
    year--;
  }
  renderCalendar();
});

renderCalendar();
