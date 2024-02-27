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
const backArrow = getElement("back-arrow");
const nextArrow = getElement("next-arrow");
let nowDay = new Date();
cOption = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
};

/**
 * Converts the current day to a specific date format.
 * @author amirreza
 * @param {string} type - The type of date format
 * @param {Object} option - The options for the date format
 * @param {Date} currentDay - The current day to be converted
 * @return {string} The formatted date
 */
const convertDate = (type, option, currentDay) => {
    console.log(type, "type", option, "option", currentDay, "currentDay");
    const result = currentDay
        .toLocaleDateString(type, option)
        .replace("هـ", "");
    return result;
};

const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
};

const updateClock = () => {
    const currentTime = new Date().toLocaleTimeString("fa-IR", {
        timeZone: "Asia/Tehran",
    });

    const [hours, minutes, seconds] = currentTime.split(/:| /);

    Chours.textContent = hours;
    Cminutes.textContent = minutes;
    Cseconds.textContent = seconds;
};

/**
 * Formats a date using the specified type and options.
 *
 * @param {string} type - the type of formatting to apply
 * @param {object} cOption - the formatting options
 * @param {Date} date - the date to format
 * @return {string} the formatted date
 */
const formatDate = (type, cOption, date) => {
    let formattedDate = date.toLocaleDateString(type, cOption);

    formattedDate = formattedDate.replace(/هـ/, "");

    return formattedDate;
};

/**
 * Updates the date elements on the page with the formatted dates in Persian, lunar, and Gregorian calendars,
 * as well as their corresponding names.
 */
const updateDate = () => {
    persianDateElement.innerText = formatDate("fa-IR", cOption, nowDay);
    lunarDateElement.innerText = formatDate(
        "ar-TN-u-ca-islamic",
        cOption,
        nowDay
    );
    gregorianDateElement.innerText = formatDate("en-us", cOption, nowDay);
    persianDateNameElement.innerText = convertDate("fa-IR", options, nowDay);
    gregorianDateNameElement.innerText = convertDate("en-us", options, nowDay);
    lunarDateNameElement.innerText = convertDate(
        "ar-TN-u-ca-islamic",
        options,
        nowDay
    );
};

const handleBackArrowClick = () => {
    nowDay.setDate(nowDay.getDate() - 1);
    updateDate();
};

const handleNextArrowClick = () => {
    nowDay.setDate(nowDay.getDate() + 1);
    updateDate();
};

backArrow.addEventListener("click", handleBackArrowClick);
nextArrow.addEventListener("click", handleNextArrowClick);

function toggleHamburger() {
    document.getElementById("sidebar").classList.toggle("show");
}

setInterval(updateClock, 1000);

updateDate();
updateClock();
