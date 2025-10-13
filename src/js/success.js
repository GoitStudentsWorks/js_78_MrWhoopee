const formEl = document.querySelector(".register-form");
const closeBtnEl = document.querySelector(".succes-close-btn");
const closeBlueBtnEl = document.querySelector(".modal-success .big-blue-btn");
const modalEl = document.querySelector(".backdrop-success");
const bodyEl = document.body;

function openModal() {
  modalEl.classList.add("is-open-now");
  bodyEl.style.overflow = "hidden";
}

function closeModal() {
  modalEl.classList.remove("is-open-now");
  bodyEl.style.overflow = "visible";
}

formEl.addEventListener("submit", function (event) {
  event.preventDefault();

  if (formEl.checkValidity()) {
    openModal();
    formEl.reset();
  } else {
    formEl.reportValidity();
  }
});

[closeBtnEl, closeBlueBtnEl].forEach((btn) => {
  if (btn) btn.addEventListener("click", closeModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modalEl.classList.contains("is-open-now")) {
    closeModal();
  }
});

const cardSelector = '.speaker';     
const positionSelector = '.speaker-position';

let maxHeightValue = null; 

function alignCardPositions() {
  if (window.innerWidth >= 1440) {
    const cards = document.querySelectorAll(cardSelector);
    let maxHeight = 0;

    cards.forEach(card => {
      const posEl = card.querySelector(positionSelector);
      if (posEl) {
        const h = posEl.getBoundingClientRect().height;
        if (h > maxHeight) maxHeight = h;
      }
    });

    maxHeightValue = maxHeight;

    cards.forEach(card => {
      const posEl = card.querySelector(positionSelector);
      if (posEl) posEl.style.minHeight = maxHeight + 'px';
    });
  }
}

window.addEventListener('load', () => {
    alignCardPositions();
});

function resetCardPositions() {
  const cards = document.querySelectorAll(cardSelector);
  cards.forEach(card => {
    const posEl = card.querySelector(positionSelector);
    if (posEl) posEl.style.minHeight = '';
  });
}

window.addEventListener('resize', () => {
  if (window.innerWidth < 1440) {
    resetCardPositions();
  } else if (maxHeightValue !== null) {
    const cards = document.querySelectorAll(cardSelector);
    cards.forEach(card => {
      const posEl = card.querySelector(positionSelector);
      if (posEl) posEl.style.minHeight = maxHeightValue + 'px';
    });
  } else {
    alignCardPositions();
  }
});