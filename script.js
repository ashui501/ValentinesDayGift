const text = "Will you stay with me forever, Selfieee?";
let index = 0;
const typingEl = document.getElementById("typingText");

function typeText() {
  if (index < text.length) {
    typingEl.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 70);
  }
}
typeText();

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseenter", moveNoBtn);
noBtn.addEventListener("click", moveNoBtn);

function moveNoBtn() {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

yesBtn.addEventListener("click", showQuotes);

function showQuotes() {
  const container = document.querySelector(".container");
  container.innerHTML = `<div class="intro-quotes" id="quotes"></div>`;

  const quotes = [
    "You are my calm in every storm.",
    "You are the safest place my heart has ever known.",
    "Loving you feels like home."
  ];

  const quotesDiv = document.getElementById("quotes");
  let i = 0;

  function showNext() {
    if (i < quotes.length) {
      const p = document.createElement("p");
      p.textContent = quotes[i];
      quotesDiv.appendChild(p);
      i++;
      setTimeout(showNext, 1500);
    } else {
      setTimeout(showEnvelope, 1500);
    }
  }
  showNext();
}

function showEnvelope() {
  const container = document.querySelector(".container");
  container.innerHTML = `
    <div class="envelope">
      <div class="letter">
        <h3>To My Selfieee 💌</h3>
        <p id="loveText"></p>
        <div class="ring">💍</div>
      </div>
    </div>
  `;

  typeLetter();
}

function typeLetter() {
  const message = "I will choose you, today and every single day. You are my forever.";
  const loveText = document.getElementById("loveText");
  let i = 0;

  function type() {
    if (i < message.length) {
      loveText.textContent += message.charAt(i);
      i++;
      setTimeout(type, 50);
    } else {
      setTimeout(showFinalMessage, 4000);
    }
  }
  type();
}

function showFinalMessage() {
  const container = document.querySelector(".container");

  container.innerHTML = `
    <div class="final-message">
      <h2>One More Thing... 💭</h2>
      <p>I’m sorry I couldn’t give you chains, bracelets or cute gifts yet.</p>
      <p>I promise one day I’ll give you everything you deserve.</p>
      <p>This may not be expensive, but I made it with all my heart.</p>
      <p>I hope it gives you happiness. ❤️</p>
      <p>— Aldroy</p>

      <div class="valentine-section">
        <h2 class="valentine-title">Happy Valentine's Day, Selfieee ❤️</h2>
        <p class="valentine-text">
          You will always be my favorite notification,
          my safest place, and my forever person.
        </p>
      </div>

      <button id="replayBtn">Replay Our Story 💕</button>
    </div>
  `;

  document.getElementById("replayBtn").addEventListener("click", () => {
    location.reload();
  });
  }
