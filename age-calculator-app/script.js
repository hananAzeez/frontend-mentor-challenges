const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

// LABEL
const dayLabel = document.getElementById("dayLabel");
const monthLabel = document.getElementById("monthLabel");
const yearLabel = document.getElementById("yearLabel");

// ERROR TEXT
const dayErrorText = document.getElementById("day-error-text");
const monthErrorText = document.getElementById("month-error-text");
const yearErrorText = document.getElementById("year-error-text");

// RESULT
const dayResult = document.getElementById("day-result");
const monthResult = document.getElementById("month-result");
const yearResult = document.getElementById("year-result");

const submit = document.getElementById("submit");


const today = new Date();
const currentDay = today.getDate();
const currentMonth = today.getMonth() + 1;
const currentYear = today.getFullYear();

console.log("typeof", typeof currentDay);

// FUNCTIONS
const checkMonth = (month, year) => {
  if (Number(year) === currentYear && month > currentMonth) {
    const isValid = false;
    const errorText = "Must be in the past";
    return { isValid, errorText };
  } else if (month < 1 || month > 12 || month == 0 || month == "") {
    const isValid = false;
    const errorText = "This field is required";
    return { isValid, errorText };
  } else {
    const isValid = month >= 1 && month <= 12 && month !== 0 && month !== "";
    const errorText = "";
    return { isValid, errorText };
  }
};

const checkDay = (day, month, year) => {
  if (
    Number(year) === currentYear &&
    Number(month) === currentMonth &&
    day >= currentDay
  ) {
    const isValid = false;
    const errorText = "Must be in the past";
    return { isValid, errorText };
  } else if (day < 1) {
    const isValid = false;
    const errorText = "This field is required";
    return { isValid, errorText };
  } else if (month === 2 && day > 29) {
    const isValid = false;
    const errorText = "Must be below 29";
    return { isValid, errorText };
  } else if (day > 31) {
    const isValid = false;
    const errorText = "Must be below 31";
    return { isValid, errorText };
  } else if (day == 0 && day == "") {
    const isValid = false;
    const errorText = "This field is required";
    return { isValid, errorText };
  } else {
    const isValid = true;
    const errorText = "";
    return { isValid, errorText };
  }
};

const checkYear = (year) => {
  if (year == "" || year == 0) {
    const isValid = false;
    const errorText = "This field is required";
    return { isValid, errorText };
  } else if (year > currentYear) {
    const isValid = false;
    const errorText = "Must be in the past";
    return { isValid, errorText };
  } else if (year <= 1900) {
    const isValid = false;
    const errorText = "Must be after 1900";
    return { isValid, errorText };
  } else {
    const isValid =
      year >= 1900 && year <= currentYear && year !== 0 && year !== "";
    const errorText = "";
    return { isValid, errorText };
  }
};

const finalSubmit = (isValidForm, resultYear, resultMonth, resultDay) => {
  if (isValidForm) {
    yearResult.innerHTML = resultYear;
    yearErrorText.classList.add("hidden");
    year.classList.remove("error");

    monthResult.innerHTML = resultMonth;
    monthErrorText.classList.add("hidden");
    month.classList.remove("error");

    dayResult.innerHTML = resultDay;
    dayErrorText.classList.add("hidden");
    day.classList.remove("error");
  }
};

const initState = () => {
  yearErrorText.classList.add("hidden");
  year.classList.remove("error");

  monthErrorText.classList.add("hidden");
  month.classList.remove("error");

  dayErrorText.classList.add("hidden");
  day.classList.remove("error");
};

submit.addEventListener("click", () => {
  initState();

  const dayValue = day.value;
  const monthValue = month.value;
  const yearValue = year.value;

  const isValidMonth = checkMonth(monthValue, yearValue);
  const isValidDay = checkDay(dayValue, monthValue, yearValue);
  const isValidYear = checkYear(yearValue);

  // DAY CHECK
  !isValidDay.isValid &&
    ((dayErrorText.innerHTML = isValidDay.errorText),
    dayErrorText.classList.remove("hidden"));

  !isValidMonth.isValid &&
    ((monthErrorText.innerHTML = isValidMonth.errorText),
    monthErrorText.classList.remove("hidden"));

  !isValidYear.isValid &&
    ((yearErrorText.innerHTML = isValidYear.errorText),
    yearErrorText.classList.remove("hidden"));

  // RESULT
  let resultYear = isValidYear.isValid && currentYear - yearValue;
  let resultMonth = isValidMonth.isValid && currentMonth - monthValue;
  let resultDay = isValidDay.isValid && currentDay - dayValue;

  if (resultMonth < 0) {
    resultMonth += 12;
    resultYear -= 1;
  }

  if (resultDay < 0) {
    resultDay += 30;
    resultMonth -= 1;
  }

  const isValidForm =
    isValidDay.isValid && isValidMonth.isValid && isValidYear.isValid;

  !isValidForm && day.classList.add("error"),
    month.classList.add("error"),
    year.classList.add("error");

  finalSubmit(isValidForm, resultYear, resultMonth, resultDay);
});
