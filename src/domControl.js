function loadInitScreen() {
  let mainContainer = document.querySelector(".big-container");
  let form = document.createElement("form");
  form.setAttribute("onsubmit", "return false");
  let label = document.createElement("label");
  label.textContent = "NAME: ";
  let nameInput = document.createElement("input");
  nameInput.setAttribute("type", "input");
  let inputContainer = document.createElement("div");
  inputContainer.append(label, nameInput);
  let submitButton = document.createElement("button");
  submitButton.setAttribute("type", "submit");
  submitButton.textContent = "SUBMIT";

  form.append(inputContainer, submitButton);
  mainContainer.appendChild(form);
}

async function startGame(newName, player1, comp) {
  let mainContainer = document.querySelector(".big-container");
  let form = document.querySelector("form");
  mainContainer.removeChild(form);
  let container = document.createElement("div");
  container.classList.add("container-setup");
  let board1 = document.createElement("div");
  let board2 = document.createElement("div");
  let toggleBtn = document.createElement("button");
  toggleBtn.classList.add("direction-btn");
  toggleBtn.textContent = "Switch Orientation";
  toggleBtn.id = "h";

  board1.classList.add("board", "board-1");
  board2.classList.add("board", "board-2");
  mainContainer.appendChild(container);
  container.appendChild(toggleBtn);
  container.appendChild(board1);
  player1.name = newName;

  board1 = prepareBoards(board1);

  let value = placeShip(5, player1);
  await getPromiseFromEvent(board1, "click");
  while ((await value) == false) {
    value = placeShip(5, player1);
    await getPromiseFromEvent(board1, "click");
  }

  value = placeShip(4, player1);
  await getPromiseFromEvent(board1, "click");
  while ((await value) == false) {
    value = placeShip(4, player1);
    await getPromiseFromEvent(board1, "click");
  }

  value = placeShip(3, player1);
  await getPromiseFromEvent(board1, "click");
  while ((await value) == false) {
    value = placeShip(3, player1);
    await getPromiseFromEvent(board1, "click");
  }

  value = placeShip(3, player1);
  await getPromiseFromEvent(board1, "click");
  while ((await value) == false) {
    value = placeShip(3, player1);
    await getPromiseFromEvent(board1, "click");
  }

  value = placeShip(2, player1);
  await getPromiseFromEvent(board1, "click");
  while ((await value) == false) {
    value = placeShip(2, player1);
    await getPromiseFromEvent(board1, "click");
  }

  container.removeChild(toggleBtn);
  container.appendChild(prepareBoards(board2));
  container.classList.replace("container-setup", "container");
  playerAttack(player1, comp);
}

function prepareBoards(board) {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let div = document.createElement("div");
      div.setAttribute("data-row", 9 - i);
      div.setAttribute("data-column", j);
      div.setAttribute("ondragstart", "return false");
      div.setAttribute("ondrop", "return false");
      board.appendChild(div);
    }
  }
  return board;
}

function placeShip(length, player) {
  let board = document.querySelector(".container-setup .board");
  let toggleBtn = document.querySelector(".direction-btn");
  let orient = toggleBtn.id;

  toggleBtn.addEventListener("click", () => {
    if (orient == "h") {
      orient = "v";
    } else orient = "h";
    toggleBtn.id = orient;
  });
  let controller = new AbortController();
  let testSignal = controller.signal;
  board.addEventListener(
    "mouseover",
    (e) => {
      addHighlight(e.target, length, orient);
    },
    { signal: testSignal }
  );

  board.addEventListener(
    "mouseout",
    (e) => {
      removeHighlight(e.target, length, orient);
    },
    {}
  );
  let value;
  board.addEventListener(
    "click",
    (e) => {
      let x = parseInt(e.target.getAttribute("data-column"));
      let y = parseInt(e.target.getAttribute("data-row"));
      if (e.target.classList.contains("red-highlight")) {
        value = false;
        console.log("FAILS");
      } else {
        player.gameBoard.populateBoard(x, y, orient, length);
        addShipToBoard(length);
        value = true;
      }
      controller.abort();
    },
    { once: true }
  );
  return getPromiseFromEvent(board, "click").then(() => {
    return value;
  });
}

function getPromiseFromEvent(item, event) {
  return new Promise((resolve) => {
    const listener = () => {
      item.removeEventListener(event, listener);
      resolve();
    };
    item.addEventListener(event, listener);
  });
}

function addHighlight(target, length, orient) {
  let x = parseInt(target.getAttribute("data-column"));
  let y = parseInt(target.getAttribute("data-row"));

  if (orient == "h") {
    let className = x <= 10 - length ? "highlighted" : "red-highlight";
    for (let i = 0; i < length; i++) {
      try {
        let nextSquare = document.querySelector(
          `.board-1 [data-row='${y}'][data-column='${x + i}']`
        );
        if (nextSquare.classList.contains("placed-ship"))
          className = "red-highlight";
      } catch (ignore) {}
    }
    for (let i = 0; i < length; i++) {
      try {
        let nextSquare = document.querySelector(
          `.board-1 [data-row='${y}'][data-column='${x + i}']`
        );
        nextSquare.classList.add(className);
      } catch (ignore) {}
    }
  } else {
    let className = y <= 10 - length ? "highlighted" : "red-highlight";
    for (let i = 0; i < length; i++) {
      try {
        let nextSquare = document.querySelector(
          `.board-1 [data-row='${y + i}'][data-column='${x}']`
        );
        if (nextSquare.classList.contains("placed-ship"))
          className = "red-highlight";
      } catch (ignore) {}
    }
    for (let i = 0; i < length; i++) {
      try {
        let nextSquare = document.querySelector(
          `.board-1 [data-row='${y + i}'][data-column='${x}']`
        );
        nextSquare.classList.add(className);
      } catch (ignore) {}
    }
    // target.classList.add(className);
    // let sibling = document.querySelector(
    //   `.board-1 [data-row='${y + 1}'][data-column='${x}']`
    // );
    // for (let i = 2; i <= length; i++) {
    //   try {
    //     sibling.classList.add(className);
    //     sibling = document.querySelector(
    //       `.board-1 [data-row='${y + i}'][data-column='${x}']`
    //     );
    //   } catch (ignore) {}
    // }
  }
}

function removeHighlight(target, length, orient) {
  let x = parseInt(target.getAttribute("data-column"));
  let y = parseInt(target.getAttribute("data-row"));
  if (orient == "h") {
    let className = x <= 10 - length ? "highlighted" : "red-highlight";
    for (let i = 0; i < length; i++) {
      try {
        let nextSquare = document.querySelector(
          `.board-1 [data-row='${y}'][data-column='${x + i}']`
        );
        if (nextSquare.classList.contains("placed-ship"))
          className = "red-highlight";
      } catch (ignore) {}
    }

    for (let i = 0; i < length; i++) {
      try {
        let nextSquare = document.querySelector(
          `.board-1 [data-row='${y}'][data-column='${x + i}']`
        );
        nextSquare.classList.remove(className);
      } catch (ignore) {}
    }
  } else {
    let className = y <= 10 - length ? "highlighted" : "red-highlight";
    for (let i = 0; i < length; i++) {
      try {
        let nextSquare = document.querySelector(
          `.board-1 [data-row='${y + i}'][data-column='${x}']`
        );
        if (nextSquare.classList.contains("placed-ship"))
          className = "red-highlight";
      } catch (ignore) {}
    }
    for (let i = 0; i < length; i++) {
      try {
        let nextSquare = document.querySelector(
          `.board-1 [data-row='${y + i}'][data-column='${x}']`
        );
        nextSquare.classList.remove(className);
      } catch (ignore) {}
    }
  }
}

function addShipToBoard(length) {
  for (let i = 0; i < length; i++) {
    let divs = document.querySelectorAll(".highlighted");
    divs.forEach((div) => {
      div.classList.add("placed-ship");
    });
  }
}

function recordAttack(x, y, boardNum, status) {
  let div = document.querySelector(
    `.board-${boardNum} [data-row='${y}'][data-column='${x}']`
  );
  if (status == "miss") {
    div.innerHTML = "&#x1F534";
    div.style.backgroundColor = "#ffcccb";
  } else {
    div.textContent = "\u274C";
    // div.style.backgroundColor = "#4BF54B !important;";
    div.setAttribute("style", "background-color: #4BF54B !important;");
  }
}

function playerAttack(player1, comp) {
  let board = document.querySelector(".board-2");
  let controller = new AbortController();
  let testSignal = controller.signal;
  board.addEventListener(
    "click",
    (e) => {
      let x = parseInt(e.target.getAttribute("data-column"));
      let y = parseInt(e.target.getAttribute("data-row"));
      let status = player1.attack(x, y, comp);
      recordAttack(x, y, 2, status);
      if (comp.gameBoard.isGameOver() || player1.gameBoard.isGameOver()) {
        console.log("YOU WIN");
        controller.abort();
        return;
      }

      computerAttack(player1, comp);
    },
    { signal: testSignal }
  );
}

function computerAttack(player1, comp) {
  let x = Math.floor(Math.random() * 10);
  let y = Math.floor(Math.random() * 10);
  console.log(player1.gameBoard.missedShots.includes(`${x}${y}`));

  while (player1.gameBoard.missedShots.includes(`${x}${y}`)) {
    x = Math.floor(Math.random() * 10);
    y = Math.floor(Math.random() * 10);
  }

  let status = comp.attack(x, y, player1);
  recordAttack(x, y, 1, status);
}

export {
  addShipToBoard,
  recordAttack,
  startGame,
  loadInitScreen,
  playerAttack,
  computerAttack,
};
