const getElement = (id) => document.getElementById(id);

const Chours = getElement("hours");
const Cminutes = getElement("minutes");
const Cseconds = getElement("seconds");
const lunarDateElement = getElement("lunar-date");
const persianDateElement = getElement("persian-date");
const gregorianDateElement = getElement("gregorian-date");
const gregorianDateNameElement = getElement("gregorian-date-name");
const persianDateNameElement = getElement("persian-date-name");
const lunarDateNameElement = getElement("lunar-date-name");
const hamburgerBtn = getElement("hamburger-btn");

const formatDate = (locale, format) =>
    new Date().toLocaleDateString(locale, format);

const updateClock = () => {
    const currentTime = new Date().toLocaleTimeString("fa-IR", {
        timeZone: "Asia/Tehran",
    });

    const [hours, minutes, seconds] = currentTime.split(/:| /);

    Chours.textContent = hours;
    Cminutes.textContent = minutes;
    Cseconds.textContent = seconds;

    persianDateElement.textContent = formatDate("fa-IR", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
        era: undefined,
    });

    lunarDateElement.textContent = formatDate("ar-TN-u-ca-islamic", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
        era: undefined,
    });

    gregorianDateElement.textContent = formatDate("en-US", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
        era: undefined,
    });

    gregorianDateNameElement.textContent = formatDate("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
    });

    persianDateNameElement.textContent = formatDate("fa-IR", {
        weekday: "long",
        month: "long",
        day: "numeric",
    });

    lunarDateNameElement.textContent = formatDate("ar-TN-u-ca-islamic", {
        weekday: "long",
        month: "long",
        day: "numeric",
    });
};

function toggleHamburger() {
    document.getElementById("sidebar").classList.toggle("show");
}

setInterval(updateClock, 1000);

updateClock();
