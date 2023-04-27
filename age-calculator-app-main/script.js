const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

const submit = document.getElementById("submit");

console.log(day.value);

submit.addEventListener("click", () => {
  console.log("clicked");
  console.log(day.value);
});
