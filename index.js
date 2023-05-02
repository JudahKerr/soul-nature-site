let hamburger = document.querySelector(".hamburger");
let mobileMenu = document.querySelector(".mobile-menu");

let mobileSessions = document.querySelector(".mobile-sessions");
let mobileSessionsShow = document.querySelector(".mobile-sessions-drop");

let mobileCourses = document.querySelector(".mobile-courses");
let mobileCoursesShow = document.querySelector(".mobile-courses-drop");

function hamburgerClick() {
    mobileMenu.classList.toggle("hamburger-click");
    mobileMenu.classList.toggle("animate");
}

function sessionsOnClick() {
    mobileSessionsShow.classList.toggle("mobile-sessions-onclick");
}

function coursesOnClick() {
    mobileCoursesShow.classList.toggle("mobile-courses-onclick");
}

mobileSessions.addEventListener("click", sessionsOnClick);
mobileCourses.addEventListener("click", coursesOnClick);
hamburger.addEventListener("click", hamburgerClick);

const currentYear = new Date().getFullYear();
document.getElementById("copyright-year").innerHTML = "© " + currentYear + " Lisa Love";

