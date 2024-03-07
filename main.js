function rainOfHeart() {
  let heart = document.querySelector(".heart");
  let heartElement = document.createElement("div");
  heartElement.classList.add("drop");
  heart.appendChild(heartElement);

  let left = Math.floor(Math.random() * 300);
  let duration = Math.random() * 0.5;
  heartElement.style.left = `${left}px`;
  heartElement.style.animationDuration = 2 + duration + "s";

  setTimeout(function () {
    heart.removeChild(heartElement);
  }, 5000);
}

setInterval(() => {
  rainOfHeart();
}, 50);

function animatedText() {
  const text = "Srećan 8. mart";
  const textElement = document.querySelector(".animated-text");

  text.split("").forEach((char, index) => {
    const span = document.createElement("span");
    span.textContent = char;
    textElement.appendChild(span);

    if (char === " ") {
      span.classList.add("space");
    }

    span.style = `--i: ${index}`;
  });
}

animatedText();
