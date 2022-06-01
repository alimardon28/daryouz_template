const navbar = document.querySelector(".navbar");
const hamburgerBtn = document.querySelector(".hamburgerBtn");
const closeBtn = document.querySelector(".closeBtn");

hamburgerBtn.addEventListener("click", () => {
  navbar.classList.add("activNavbar");
  closeBtn.addEventListener("click", () => {
    navbar.classList.remove("activNavbar");
  });
});

// // https://www.daryo.uz/api/news

// const URL = 'https://www.daryo.uz/api/news';
// console.log(URL);
