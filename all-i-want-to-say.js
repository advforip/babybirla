const unlockBtn = document.getElementById("unlockBtn");
const input = document.getElementById("answerInput");
const overlay = document.getElementById("overlay");
const content = document.getElementById("content");

unlockBtn.addEventListener("click", unlock);
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") unlock();
});

function unlock() {
  const value = input.value.trim().toLowerCase();

  if (value === "jaan" || value === "jaa") {
    overlay.style.opacity = "0";
    setTimeout(() => {
      overlay.style.display = "none";
      content.classList.remove("blurred");
    }, 500);
  } else {
    input.value = "";
    input.placeholder = "Soch lo dobara ❤️";
    input.style.border = "2px solid red";
  }
}
