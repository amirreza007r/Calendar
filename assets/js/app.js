const Chours = document.getElementById("hours");
const Cminutes = document.getElementById("minutes");
const Cseconds = document.getElementById("seconds");
const lunarDateElement = document.getElementById("lunar-date");
const persianDateElement = document.getElementById("persian-date");
const gregorianDateElement = document.getElementById("gregorian-date");
const gregorianDateNameElement = document.getElementById("gregorian-date-name");
const persianDateNameElement = document.getElementById("persian-date-name");
const lunarDateNameElement = document.getElementById("lunar-date-name");

function getPersianDate() {
    let currentDate = new Date().toLocaleDateString("fa-IR", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
        era: undefined,
    });
    return currentDate;
}
function getPersianDateName() {
    let now = new Date().toLocaleDateString("fa-IR", {
        weekday: "long",
        month: "long",
        day: "numeric",
    });
    return now;
}

function getGregorianDate() {
    let currentDate = new Date().toLocaleDateString("en-US", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
        era: undefined,
    });
    return currentDate;
}
function getGregorianDateName() {
    let now = new Date().toLocaleDateString("en-us", {
        weekday: "long",
        month: "long",
        day: "numeric",
    });
    return now;
}
function getLunarDate() {
    let currentDate = new Date().toLocaleDateString("ar-TN-u-ca-islamic", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
        era: undefined,
    });

    return currentDate;
}
function getLunarDateName() {
    let now = new Date().toLocaleDateString("ar-TN-u-ca-islamic", {
        weekday: "long",
        month: "long",
        day: "numeric",
    });
    return now;
}

function updateClock() {
    // console.clear();
    let currentTime = new Date().toLocaleTimeString("fa-IR", {
        timeZone: "Asia/Tehran",
    });

    let [hours, minutes, seconds] = currentTime.split(/:| /);

    let clockElement = document.getElementById("digital-clock");

    Chours.textContent = hours;
    Cminutes.textContent = minutes;
    Cseconds.textContent = seconds;

    persianDateElement.textContent = getPersianDate();

    lunarDateElement.textContent = getLunarDate();

    gregorianDateElement.textContent = getGregorianDate();

    gregorianDateNameElement.textContent = getGregorianDateName();

    persianDateNameElement.textContent = getPersianDateName();

    lunarDateNameElement.textContent = getLunarDateName();
}

setInterval(updateClock, 1000);

updateClock();
