
let animation = setInterval(() => {

  let eventYear = document.querySelector(".events .box .text .event-year");
  let secondsLeft = document.querySelector(".events .box .info .unit .seconds")
  let minutesLeft = document.querySelector(".events .box .info .unit .minutes")
  let hoursLeft = document.querySelector(".events .box .info .unit .hours")
  let daysLeft = document.querySelector(".events .box .info .unit .days")
  let date = new Date();
  let eventDate = new Date("2023");

  eventYear.innerHTML = eventDate.getFullYear();
  secondsLeft.innerHTML = Math.floor(60 - date.getSeconds());
  minutesLeft.innerHTML = Math.floor(60 - date.getMinutes());
  hoursLeft.innerHTML = Math.floor(24 - date.getHours());
  daysLeft.innerHTML = parseInt((eventDate - date) / 1000 / 60 / 60 / 24);

}, 1000);

