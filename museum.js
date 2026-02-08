const unlockBtn = document.getElementById("unlockBtn");
const input = document.getElementById("passwordInput");
const overlay = document.getElementById("overlay");
const gallery = document.getElementById("gallery");

unlockBtn.addEventListener("click", checkAnswer);
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") checkAnswer();
});

function checkAnswer() {
  const answer = input.value.trim().toLowerCase();

  if (answer === "rab ne bana di jodi") {
    overlay.style.opacity = "0";
    setTimeout(() => {
      overlay.style.display = "none";
      gallery.classList.remove("blurred");
    }, 500);
  } else {
    input.style.border = "2px solid red";
    input.value = "";
    input.placeholder = "Nope… think again ❤️";
  }
}
