const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="text-align:center; padding:50px; color:#ff1493; font-family:'Comic Sans MS', cursive;">
      <h1>Yayyy! 🎉💖</h1>
      <p>Anjali, you just made me the happiest person ever 😍🐱</p>
      <img src="https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif" width="200">
    </div>
  `;
});

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * window.innerWidth * 0.6;
  const y = Math.random() * window.innerHeight * 0.6;
  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});
