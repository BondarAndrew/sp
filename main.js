const apiKey = "YOUR_API_KEY";
const apiUrl = "https://app.ticketmaster.com/discovery/v2/events.json";

const queryParams = new URLSearchParams({
  apikey: apiKey,
});

const requestUrl = `${apiUrl}?${queryParams}`;

fetch(requestUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("modal");
  var openModalBtn = document.getElementById("openModalBtn");
  var closeBtn = document.getElementsByClassName("close")[0];

  openModalBtn.onclick = function () {
    modal.style.display = "block";
  };

  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});

let currentPageIndex = 0;
const pages = document.querySelectorAll(".page");

function showPage(index) {
  // Скрыть все страницы
  pages.forEach((page) => page.classList.remove("active"));
  // Показать страницу с указанным индексом
  pages[index].classList.add("active");
}

function previousPage() {
  currentPageIndex = (currentPageIndex - 1 + pages.length) % pages.length;
  showPage(currentPageIndex);
}

function nextPage() {
  currentPageIndex = (currentPageIndex + 1) % pages.length;
  showPage(currentPageIndex);
}

// Показать первую страницу при загрузке
showPage(currentPageIndex);

var buttons = document.querySelectorAll(".button");

function previousPage() {
  var activeIndex = getActiveIndex();
  if (activeIndex > 0) {
    buttons[activeIndex].classList.remove("active");
    buttons[activeIndex - 1].classList.add("active");
  }
}

function nextPage() {
  var activeIndex = getActiveIndex();
  if (activeIndex < buttons.length - 1) {
    buttons[activeIndex].classList.remove("active");
    buttons[activeIndex + 1].classList.add("active");
  }
}

function getActiveIndex() {
  for (var i = 0; i < buttons.length; i++) {
    if (buttons[i].classList.contains("active")) {
      return i;
    }
  }
  return -1;
}
let countries = document.querySelector('#countries')
let countriesContent = document.querySelector('.countries-content')
let country = document.querySelectorAll('.country')
let selectedCountry = document.querySelector('.selected-country')

selectedCountry.addEventListener('click', () => {
 countriesContent.classList.add('is-open')
})

country.addEventListener('click', () => {
 countriesContent.classList.remove('is-open')
 forEach(element => {
  const buttonText = country.textContent
  selectedCountry.textContent = buttonText
 });
})
