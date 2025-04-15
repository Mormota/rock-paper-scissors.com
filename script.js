function play(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const emojis = {
      rock: '🪨',
      paper: '📄',
      scissors: '✂️'
    };
  
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    document.getElementById("user-choice").textContent = `Te: ${emojis[userChoice]}`;
    document.getElementById("computer-choice").textContent = `Gép: ${emojis[computerChoice]}`;
  
    const container = document.querySelector(".container");
    let result = "";

    if (userChoice === computerChoice) {
      result = "Döntetlen!";

      //vilanás
      container.classList.remove("flash-win", "flash-loss", "flash-draw");
      void container.offsetWidth; // trükk: újrarajzoltatjuk az elemet
      container.classList.add("flash-draw");

    } else if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
      result = "Nyertél! 🎉";
      
      //villanás
      container.classList.remove("flash-win", "flash-loss", "flash-draw");
      void container.offsetWidth; // trükk: újrarajzoltatjuk az elemet
      container.classList.add("flash-win");

    } else {
      result = "Vesztettél! 😢";
  
      // villanás trükk – kis késleltetéssel újraindítjuk az animációt
      container.classList.remove("flash-win", "flash-loss", "flash-draw");
      void container.offsetWidth; // trükk: újrarajzoltatjuk az elemet
      container.classList.add("flash-loss");
    }
  
    document.getElementById("winner").textContent = result;
  }
  