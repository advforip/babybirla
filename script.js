const noBtn = document.getElementById("noBtn");
const maybeBtn = document.querySelector(".maybe");
const noneBtn = document.querySelector(".none");
const yesBtn = document.querySelector(".yes");

/* ---------------- NO BUTTON (RUN AWAY) ---------------- */

function moveNoButton() {
  const padding = 20;

  const maxX = window.innerWidth - noBtn.offsetWidth - padding;
  const maxY = window.innerHeight - noBtn.offsetHeight - padding;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.position = "fixed";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

// Desktop: hover
noBtn.addEventListener("mouseenter", moveNoButton);

// Mobile: touch
noBtn.addEventListener("touchstart", moveNoButton);

/* ---------------- MAYBE BUTTON (UNCHANGED) ---------------- */

maybeBtn.addEventListener("click", () => {
  maybeBtn.innerHTML =
    "Maybe I should ask you this,<br>will you be my Valentine bub?";
});

/* ---------------- NONE OF THE ABOVE (UNCHANGED) ---------------- */

noneBtn.addEventListener("click", () => {
  noneBtn.textContent =
    "None of the above because you are already my valentine? Haina?";
});

/* ---------------- YES BUTTON ---------------- */

yesBtn.addEventListener("click", () => {
  window.location.href = "yes.html";
});
