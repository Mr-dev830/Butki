const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const card = document.getElementById("card");
const sound = document.getElementById("sound");

/* ---------- NO BUTTON AVOIDS CURSOR ---------- */
function moveNoButton() {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("click", moveNoButton);

/* ---------- YES BUTTON ---------- */
yesBtn.addEventListener("click", () => {
  localStorage.setItem("valentineAccepted", "yes");
  sound.play();

  card.innerHTML = `
    <div class="success">
      I knew you love me, Zoya 😘💘
      <img src="https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif" alt="Proposal GIF">
    </div>
  `;

  launchConfetti();
});

/* ---------- CONFETTI ---------- */
function launchConfetti() {
  for (let i = 0; i < 80; i++) {
    const c = document.createElement("div");
    c.className = "confetti";
    c.style.left = Math.random() * window.innerWidth + "px";
    c.style.background = `hsl(${Math.random()*360},100%,70%)`;
    c.style.animationDuration = Math.random() * 2 + 1 + "s";
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 3000);
  }
}

/* ---------- FLOATING HEARTS ---------- */
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 300);
