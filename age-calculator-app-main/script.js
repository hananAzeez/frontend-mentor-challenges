const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

// RESULT
const dayResult = document.getElementById("day-result");
const monthResult = document.getElementById("month-result");
const yearResult = document.getElementById("year-result");

const submit = document.getElementById("submit");

const today = new Date();
const currentDay = today.getDate();
const currentMonth = today.getMonth() + 1;
const currentYear = today.getFullYear();

submit.addEventListener("click", () => {
  const dayValue = day.value;
  const monthValue = month.value;
  const yearValue = year.value;
  const isValidMonth =
    monthValue >= 1 &&
    monthValue <= 12 &&
    monthValue !== 0 &&
    monthValue !== "";
  const isValidDay =
    dayValue >= 1 && dayValue <= 31 && dayValue !== 0 && dayValue !== "";
  const isValidYear = yearValue >= 1900 && yearValue <= currentYear;

  // RESULT
  const resultYear = isValidYear && currentYear - yearValue;
  const resultMonth = isValidMonth && currentMonth - monthValue;
  const resultDay = isValidDay && currentDay - dayValue;
  isValidYear && (yearResult.innerHTML = resultYear);
  isValidMonth && (monthResult.innerHTML = resultMonth);
  isValidDay && (dayResult.innerHTML = resultDay);
});
