const formatText = (num) => {
  if (num < 10) {
    return "0" + num;
  }

  return num;
}

const countdown = () => {
  const endDate = new Date("Dec 31 2021 00:00:00").getTime();
  const now = new Date().getTime();

  const diff = endDate - now;

  if (now > endDate) {
    diff = endDate - endDate;
  }

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  let timeDays = Math.floor(diff / days);
  let timeHours = Math.floor((diff % days) / hours);
  let timeMinutes = Math.floor((diff % hours) / minutes);
  let timeSeconds = Math.floor((diff % minutes) / seconds);

  document.getElementById("days").innerHTML = formatText(timeDays);
  document.getElementById("hours").innerHTML = formatText(timeHours);
  document.getElementById("minutes").innerHTML = formatText(timeMinutes);
  document.getElementById("seconds").innerHTML = formatText(timeSeconds);

  setTimeout(countdown, 1000);
}

countdown();