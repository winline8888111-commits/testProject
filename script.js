// ЗАМЕНИТЕ ЭТУ СТРОКУ — здесь будет имя получателя.
const recipientName = "Имя";

const nameEl = document.getElementById("recipientName");
const messageEl = document.getElementById("message");
const signatureEl = document.getElementById("signature");
const buttonEl = document.getElementById("wishButton");
const cardEl = document.querySelector(".card");

// Можно открыть открытку сразу с именем через ссылку: ?name=Айжан
const params = new URLSearchParams(window.location.search);
const queryName = params.get("name");
const finalName = queryName?.trim() || recipientName;
nameEl.textContent = finalName;
document.title = `С днём рождения, ${finalName} ❤️`;

buttonEl.addEventListener("click", () => {
  cardEl.classList.add("open");
  messageEl.textContent = "Желаю счастья, которое чувствуется в мелочах, людей, рядом с которыми тепло, и мечт, которые однажды становятся реальностью. Пусть этот год подарит много красивых историй и незабываемых моментов. ✨";
  signatureEl.textContent = "Пусть всё задуманное обязательно сбудется ♥";
  buttonEl.innerHTML = '<span class="button-spark">♥</span> Пожелание открыто';
});

// Лёгкий 3D-наклон карточки на десктопе.
const canTilt = window.matchMedia("(pointer:fine)").matches;
if (canTilt) {
  window.addEventListener("pointermove", (event) => {
    const rect = cardEl.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    cardEl.style.transform = `rotateY(${x * 4}deg) rotateX(${y * -4}deg)`;
  });

  window.addEventListener("pointerleave", () => {
    cardEl.style.transform = "rotateY(0deg) rotateX(0deg)";
  });
}
