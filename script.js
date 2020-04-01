// Переменные для header
const MENU = document.getElementById("menu");
const HEADER_ANCHORS = document.querySelectorAll('a[href*="#"]');
const BlocksID = document.querySelectorAll("section[id]");

const PORTFOLIO_LINKS = document.querySelectorAll('[class*="tags__link"]');

const CASES_ITEMS = document.querySelectorAll('[class*="cases-list__item"]');

const SUBMIT_BTN = document.getElementById("submit");
const CLOSE_MODAL = document.getElementById("modal__close");

const VERTICAL_PHONE = document.querySelector('[class="slider__left-phone"]');
const HORIZONTAL_PHONE = document.querySelector(
  '[class="slider__right-phone"]'
);

const OPEN_BURGER = document.getElementById("burger");
const MOBILE_MENU = document.getElementById("mobile-menu");
const CLOSE_BURGER = document.getElementById("burger-close");

let BlockID;

// Переменные для slider
let slideIndex = 1;

// Обработка переключения по ссылкам header
for (let anchor of HEADER_ANCHORS) {
  anchor.addEventListener("click", e => {
    e.preventDefault();

    MENU.querySelectorAll("li").forEach(function(el) {
      el.querySelector("a").classList.remove("header__link-active");
    });

    e.target.classList.add("header__link-active");

    BlockID = anchor.getAttribute("href").substr(1);

    document.getElementById(BlockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}

window.addEventListener("scroll", e => {
  for (let block of BlocksID) {
    let block_id = block.getAttribute("id").substr(0);

    if (block.getBoundingClientRect().top <= 0) {
      MENU.querySelectorAll("li").forEach(function(el) {
        el.querySelector("a").classList.remove("header__link-active");
      });

      for (let anchor of HEADER_ANCHORS) {
        if (anchor.getAttribute("href").substr(1) == block_id) {
          anchor.classList.add("header__link-active");
        }
      }
    }
  }
});

// Обратка слайдера
showSlides(slideIndex);

function nextSlide() {
  showSlides((slideIndex += 1));
}

function prevSlide() {
  showSlides((slideIndex -= 1));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slider__item");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "flex";
}

// переключение таблов partfolio
for (let link of PORTFOLIO_LINKS) {
  link.addEventListener("click", e => {
    e.preventDefault();

    PORTFOLIO_LINKS.forEach(el => {
      el.classList.remove("tags__link_active");
    });

    e.target.classList.add("tags__link_active");

    let cases_items = document.querySelectorAll('[class="cases-list__item"]');

    for (let i = 1; i < cases_items.length; i += 2) {
      setTimeout(function() {
        cases_items[0].parentNode.insertBefore(
          cases_items[i],
          cases_items[i - 1]
        );
      }, 300);
    }
  });
}

// появление border при клики на элементы в portfolio
for (let item of CASES_ITEMS) {
  item.addEventListener("click", e => {
    e.preventDefault();

    CASES_ITEMS.forEach(el => {
      el.classList.remove("cases__active");
    });

    item.classList.add("cases__active");
  });
}

// Модальное окно
SUBMIT_BTN.addEventListener("click", e => {
  e.preventDefault();

  const subject = document.getElementById("subject").value.toString();
  const description = document.getElementById("description").value.toString();

  if (subject == "") {
    document.getElementById("modal__subject").innerText = "Без темы";
  } else {
    document.getElementById("modal__subject").innerText = "Тема: " + subject;
  }

  if (description == "") {
    document.getElementById("modal__description").innerText = "Без описания";
  } else {
    document.getElementById("modal__description").innerText =
      "Описание: " + description;
  }

  document.getElementById("modal-overlay").classList.remove("hidden");
  document.querySelector("form").reset();
});

CLOSE_MODAL.addEventListener("click", e => {
  document.getElementById("modal-overlay").classList.add("hidden");
});

//Выключение телефонов
let flag_left = true; // телефон включен

VERTICAL_PHONE.addEventListener("click", e => {
  e.preventDefault();

  if (flag_left) {
    VERTICAL_PHONE.classList.add("vertical-phone-active");
    flag_left = false;
  } else {
    VERTICAL_PHONE.classList.remove("vertical-phone-active");
    flag_left = true;
  }
});

let flag_right = true;

HORIZONTAL_PHONE.addEventListener("click", e => {
  e.preventDefault();

  if (flag_right) {
    HORIZONTAL_PHONE.classList.add("horizontal-phone-active");
    flag_right = false;
  } else {
    HORIZONTAL_PHONE.classList.remove("horizontal-phone-active");
    flag_right = true;
  }
});

// Бургер
OPEN_BURGER.addEventListener("click", e => {
  MOBILE_MENU.classList.remove("hidden");

  let scrollTop = window.pageYOffset
  ? window.pageYOffset
  : document.documentElement.scrollTop
  ? document.documentElement.scrollTop
  : document.body.scrollTop;

  MOBILE_MENU.style.cssText = `margin-top: ` + scrollTop + `px`;
  console.log(scrollTop);

  // Обработка переключения по ссылкам mobile header
  for (let anchor of HEADER_ANCHORS) {
    anchor.addEventListener("click", e => {
      e.preventDefault();
      document.body.style.overflow = "auto";

      BlockID = anchor.getAttribute("href").substr(1);
      document.getElementById(BlockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

      MOBILE_MENU.querySelectorAll("li").forEach(function(el) {
        el.querySelector("a").classList.remove("mobile-menu__link-active");
      });

      MOBILE_MENU.classList.add("hidden");

      e.target.classList.add("mobile-menu__link-active");
    });
  }

  document.body.style.overflow = "hidden";
});

CLOSE_BURGER.addEventListener("click", e => {
  MOBILE_MENU.classList.add("hidden");

  document.body.style.overflow = "auto";
});
