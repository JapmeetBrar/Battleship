let boards = document.querySelectorAll(".board");
let container = document.querySelector(".container");
function placeShip(length) {
  container.removeChild(boards[1]);
  container.classList.replace("container", "container-setup");
  let orient = "v";

  console.log("place first ship");
  let squares = document.querySelectorAll(".board-1 div");
  boards[0].addEventListener("mouseover", function (e) {
    addHighlight(e.target, length, orient);
  });

  boards[0].addEventListener("mouseout", function (e) {
    removeHighlight(e.target, length, orient);
  });
}

function addHighlight(target, length, orient) {
  let x = parseInt(target.getAttribute("data-column"));
  let y = parseInt(target.getAttribute("data-row"));
  if (orient == "h" && x <= 10 - length) {
    if (!target.classList.contains("highlighted")) {
      target.classList.add("highlighted");
      let sibling = document.querySelector(
        `.board-1 [data-row='${y}'][data-column='${x + 1}']`
      );
      for (let i = 2; i <= length; i++) {
        sibling.classList.add("highlighted");
        sibling = document.querySelector(
          `.board-1 [data-row='${y}'][data-column='${x + i}']`
        );
      }
    }
  } else if (orient == "v" && y <= 10 - length) {
    if (!target.classList.contains("highlighted")) {
      target.classList.add("highlighted");
      let sibling = document.querySelector(
        `.board-1 [data-row='${y + 1}'][data-column='${x}']`
      );
      for (let i = 2; i <= length; i++) {
        sibling.classList.add("highlighted");
        sibling = document.querySelector(
          `.board-1 [data-row='${y + i}'][data-column='${x}']`
        );
      }
    }
  }
}

function removeHighlight(target, length, orient) {
  // if (target.classList.contains("enabled")) {
  target.classList.remove("highlighted");
  let sibling = target.nextSibling;
  for (let i = 1; i < length; i++) {
    sibling.classList.remove("highlighted");
    sibling = sibling.nextSibling;
  }
  // }
}

function prepareBoard() {
  boards.forEach((board) => {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        let div = document.createElement("div");
        div.classList.add("enabled");
        div.setAttribute("data-row", 9 - i);
        div.setAttribute("data-column", j);
        board.appendChild(div);
      }
    }
  });
  placeShip(5);
}

function addShipToBoard(x, y, orient, length, boardNum) {
  for (let i = 0; i < length; i++) {
    let div = document.querySelector(
      orient == "h"
        ? `.board-${boardNum} [data-row='${y}'][data-column='${x + i}']`
        : `.board-${boardNum} [data-row='${y + i}'][data-column='${x}']`
    );
    div.backgroundColor = "gray";
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
    div.style.backgroundColor = "#4BF54B";
  }
}

export { prepareBoard, addShipToBoard, recordAttack };
