const codeEl = document.getElementById("code");
const fixBtn = document.getElementById("fixBtn");
const finalMessage = document.getElementById("finalMessage");

const lines = [
  "Initializing Our Love...\n",
  "\n01001000 01100101 01100001 01110010 01110100",
  "\nif (you === \"her\") { love = true; }",
  "\n\n01001100 01101111 01110110 01100101",
  "\nERROR 0x1F4A9",
  "\n\n@#%$&*()_+[]{}|;:<>,./",
  "\n1010101010101010",
  "\nLogic incomplete.",
  "\nSingle input detected."
];

let index = 0;
let charIndex = 0;

function typeLine() {
  if (index >= lines.length) {
    setTimeout(() => {
      fixBtn.classList.remove("hidden");
    }, 800);
    return;
  }

  if (charIndex < lines[index].length) {
    codeEl.textContent += lines[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeLine, 35);
  } else {
    codeEl.textContent += "\n";
    index++;
    charIndex = 0;
    setTimeout(typeLine, 200);
  }
}

typeLine();

fixBtn.addEventListener("click", () => {
  codeEl.textContent = "Applying patch...\nAdding missing input...\n\nERROR FIXED SUCCESSFULLY ✅";
  fixBtn.classList.add("hidden");

  setTimeout(() => {
    document.body.style.background = "linear-gradient(135deg, #ffe6eb, #fff5f7)";
    codeEl.style.display = "none";
    finalMessage.classList.remove("hidden");
  }, 1200);
});
