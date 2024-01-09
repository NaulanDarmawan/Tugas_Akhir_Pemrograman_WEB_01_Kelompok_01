/* Js Milik Ara ditulis dibaris dibawah sini ya ... */

// Kode Toggle Navbar
const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemenArray = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = (element) => {
    for (let i = 0; i < element.length; i++) {
        element[i].addEventListener("click", function () {
            navbar.classList.toggle("active");
            overlay.classList.toggle("active");
        })
    }
}

navToggleEvent(navElemenArray);
navToggleEvent(navLinks);

// Kode Sticky Header & Sticky Button Go To Top
const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function() {
    if(window.scrollY >= 200) {
        header.classList.add("active");
        goTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        goTopBtn.classList.remove("active");
    }
})
/* Batas Js Milik Ara */

// Agar Card Bisa Menampilkan Nama
const guiderCards = document.querySelectorAll("[guider-cards]");
const guiderNames = document.querySelectorAll("[data-guider]");
const guiderToggleEvent = (element) => {
    for (let i = 0; i < element.length; i++) {
        element[i].addEventListener("click", function () {
            guiderNames[i].classList.toggle("active");
        })
    }
}

guiderToggleEvent(guiderCards);

// Interaksi Popup-Card 
const popupCard = document.querySelectorAll("[card-popup-overlay]");
const popularCard = document.querySelectorAll(".popular-card");

function handlePopup(element) {
    for (let i = 0; i < element.length; i++) {
        element[i].addEventListener("click", function () {
            popupCard[i].classList.toggle("active");
        })
    }
}

handlePopup(popularCard)
handlePopup(popupCard)