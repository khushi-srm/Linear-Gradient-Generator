let preview = document.getElementById("preview");
let colors = document.querySelectorAll(".colors");
let directions = document.querySelectorAll(".left__directions ul li");
let codeBox = document.querySelector(".left__code");
let copyBtn = document.querySelector(".copy__code");
let dir;

colors.forEach((color) => {
  color.addEventListener("change", () => {
    setGradient(dir, colors[0].value, colors[1].value);
  });
});

function setGradient(direction, color1, color2) {
  let bgImage = `linear-gradient(${direction}, ${color1}, ${color2})`;
  console.log(bgImage);
  preview.style.backgroundImage = bgImage;
  codeBox.textContent = `${bgImage};`;
}

function reset() {
  for (let i = 0; i < directions.length; i++) {
    directions[i].classList.remove("active");
  }
}

directions.forEach((direction) => {
  direction.addEventListener("click", (e) => {
    reset();
    let pos = e.target.getAttribute("data-direction");
    dir = pos;
    direction.classList.add("active");
    setGradient(pos, colors[0].value, colors[1].value);
  });
});

function copyCode() {
  let storage = document.createElement("textarea");
  storage.value = codeBox.textContent;
  codeBox.appendChild(storage);
  storage.select();
  storage.setSelectionRange(0, 99999);
  document.execCommand("copy");
  copyBtn.innerText = "Copied!";
  copyBtn.style.backgroundColor = "red";
  setTimeout(() => {
    copyBtn.innerText = "Copy Code";
    copyBtn.style.backgroundColor = "blueviolet";
  }, 1000);
  codeBox.removeChild(storage);
}

copyBtn.addEventListener("click", copyCode);
setGradient("to top", colors[0].value, colors[1].value);