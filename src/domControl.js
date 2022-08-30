let boards = document.querySelectorAll(".board");
function prepareBoard() {
  boards.forEach((board) => {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        let div = document.createElement("div");
        div.setAttribute("data-row", 9 - i);
        div.setAttribute("data-column", j);
        board.appendChild(div);
      }
    }
  });
}

function addShipToBoard(x, y, orient, length, boardNum) {
  for (let i = 0; i < length; i++) {
    let div = document.querySelector(
      orient == "h"
        ? `.board-${boardNum} [data-row='${y}'][data-column='${x + i}']`
        : `.board-${boardNum} [data-row='${y + i}'][data-column='${x}']`
    );
    div.style.backgroundColor = "gray";
  }
}

function recordAttack(x, y, boardNum, status) {
  let div = document.querySelector(
    `.board-${boardNum} [data-row='${y}'][data-column = '${x}']`
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
