const grids = document.querySelectorAll('.grid');

// Initializes game
let oGameStatus = true;
grids.forEach(grid => grid.dataset.game = "none");

const gameCount = (symbol) => {
  if (grids[4].dataset.game === symbol) {
    if (grids[3].dataset.game === symbol && grids[5].dataset.game === symbol) {
      return symbol;
    } else if (grids[1].dataset.game === symbol && grids[7].dataset.game === symbol) {
      return symbol;
    } else if (grids[0].dataset.game === symbol && grids[8].dataset.game === symbol) {
      return symbol;
    } else if (grids[6].dataset.game === symbol && grids[2].dataset.game === symbol) {
      return symbol;
    }
  } else if (grids[0].dataset.game === symbol) {
    if (grids[1].dataset.game === symbol && grids[2].dataset.game === symbol) {
      return symbol;
    } else if (grids[3].dataset.game === symbol && grids[6].dataset.game === symbol) {
      return symbol;
    }
  } else if (grids[8].dataset.game === symbol) {
    if (grids[6].dataset.game === symbol && grids[7].dataset.game === symbol) {
      return symbol;
    } else if (grids[2].dataset.game === symbol && grids[8].dataset.game === symbol) {
      return symbol;
    }
  }
}

const gamePlay = (event) => {
  if (event.currentTarget.dataset.game === "none") {
    if (oGameStatus) {
      event.currentTarget.dataset.game = "o";
      event.currentTarget.classList.add('o');
      event.currentTarget.innerText = "O";
      oGameStatus = false;
    } else {
      event.currentTarget.dataset.game = "x";
      event.currentTarget.classList.add('x');
      event.currentTarget.innerText = "X";
      oGameStatus = true;
    }
  }
}

grids.forEach(grid => grid.addEventListener('click', (event) => {
  gamePlay(event);
  if (gameCount("x") === "x") {
    setTimeout(() => {
      alert("Red Wins!");
      window.location.reload();
    }, 300);
    } else if (gameCount("o") === "o") {
      setTimeout(() => {
      alert("Blue Wins!");
      window.location.reload();
    }, 300);
    } else {
      const drawCondition = Array.from(grids).every( grid => grid.dataset.game === "x" || grid.dataset.game === "o");
      if (drawCondition) {
        setTimeout(() => {
          alert("It's a Draw!");
          window.location.reload();
        }, 300);
      };
    }
}));
