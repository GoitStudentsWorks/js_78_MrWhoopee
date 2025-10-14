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