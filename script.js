const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  menu.classList.toggle("menu-active");
});

window.addEventListener("scroll", () => {
  hamburger.classList.remove("is-active");
  menu.classList.remove("menu-active");
});

document.addEventListener("DOMContentLoaded", function () {
    let sidebar = document.querySelector(".sidebar"); 
    let closeBtn = document.querySelector(".close-menu"); 
    let menuLinks = document.querySelectorAll(".sidebar a");

    closeBtn.addEventListener("click", function () {
        sessionStorage.setItem("menuOpen", "false");
    });
    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            sessionStorage.setItem("menuOpen", "false");
        });
    });

    if (sessionStorage.getItem("menuOpen") === "true") {
        sidebar.classList.add("open");
    } else {
        sidebar.classList.remove("open");
    }
    window.addEventListener("popstate", function () {
        if (window.history.state !== null) { 
            sessionStorage.setItem("menuOpen", "false");
            sidebar.classList.remove("open"); 
        }
    });
    window.history.replaceState({ page: "current" }, "");
});

const loader = document.querySelector(".loader");
function loaderActive(){
  loader.classList.add("loader-active");
}

function loaderActiveTime() {
  setInterval(loaderActive, 2000);
}

window.onload = loaderActiveTime();

var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});



