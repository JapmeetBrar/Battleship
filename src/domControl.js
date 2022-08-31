import { Player } from "./gameFunctions";

let boards = document.querySelectorAll(".board");
let container = document.querySelector(".container");
let player1 = new Player("jap", 1);
let comp = new Player("computer", 2)


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
  placeShip(3);
}

function placeShip(length) {
  container.removeChild(boards[1]);
  container.classList.replace("container", "container-setup");
  let orient = "h";

  console.log("place first ship");
  let squares = document.querySelectorAll(".board-1 div");
  boards[0].addEventListener("mouseover", (e) => {
    addHighlight(e.target, length, orient);
  });

  boards[0].addEventListener("mouseout", (e) => {
    removeHighlight(e.target, length, orient);
  });
  
  boards[0].addEventListener("click", (e)=>{
    let x = e.target.getAttribute("data-column");
    let y = e.target.getAttribute("data-row");
    if (!e.target.classList.contains("red-highlight"))
      player1.gameBoard.populateBoard(x,y,orient,length)
      addShipToBoard(x,y,orient,length, 1)
  })
}

function addHighlight(target, length, orient) {
  let x = parseInt(target.getAttribute("data-column"));
  let y = parseInt(target.getAttribute("data-row"));

  if (orient == "h"){
    let className = x <= 10-length?"highlighted":"red-highlight";
    for (let i = 0; i < length; i++) {
      try{
        let nextSquare = document.querySelector(
          `.board-1 [data-row='${y}'][data-column='${x + i}']`
        );
        if (nextSquare.classList.contains("placed-ship")) className = "red-highlight";
      }
      catch(ignore){}
    }
    for (let i = 0; i < length; i++) {
      try {
        let nextSquare = document.querySelector(
          `.board-1 [data-row='${y}'][data-column='${x + i}']`
        );
        nextSquare.classList.add(className);
      } catch (ignore) {}
    }
    // for (let i=0;i<length;i++){
    //   try {
    //     let div = document.querySelector(`.board-1 [data-row='${y}'][data-column='${x+i}']`);
    //     if (div.classList.contains("placed-ship")) className = "red-highlight";
    //   } catch (ignore) {}
    // }
    // target.classList.add(className)
    // let sibling = document.querySelector(
    //   `.board-1 [data-row='${y}'][data-column='${x + 1}']`
    // );
    // for (let i = 2; i <= length; i++) {
    //   try {
    //     sibling.classList.add(className);
    //     sibling = document.querySelector(
    //       `.board-1 [data-row='${y}'][data-column='${x + i}']`
    //     );  
    //   } catch (ignore) {}
    // }
  }else {
    let className = y <= 10-length?"highlighted":"red-highlight";
    target.classList.add(className);
    let sibling = document.querySelector(
      `.board-1 [data-row='${y + 1}'][data-column='${x}']`
    );
    for (let i = 2; i <= length; i++) {
      try {
        sibling.classList.add(className);
        sibling = document.querySelector(
          `.board-1 [data-row='${y + i}'][data-column='${x}']`
        );
      } catch (ignore) {}
    }
  }
}

function removeHighlight(target, length, orient) {
  let x = parseInt(target.getAttribute("data-column"));
  let y = parseInt(target.getAttribute("data-row"));
  if (orient == 'h'){
    let className = x <= 10-length?"highlighted":"red-highlight";
    for (let i = 0; i < length; i++) {
      try{
        let nextSquare = document.querySelector(
          `.board-1 [data-row='${y}'][data-column='${x + i}']`
        );
        if (nextSquare.classList.contains("placed-ship")) className = "red-highlight";
      }
      catch(ignore){}
    }
    // for (let i=0;i<length;i++){
    //   try {
    //     let div = document.querySelector(`.board-1 [data-row='${y}'][data-column='${x+i}']`);
    //     if (div.classList.contains("placed-ship")) className = "red-highlight";
    //   } catch (ignore) {}
    // }

    for (let i = 0; i < length; i++) {
      try {
        let nextSquare = document.querySelector(
          `.board-1 [data-row='${y}'][data-column='${x + i}']`
        );
        if (nextSquare.classList.contains("placed-ship")) className = "red-highlight";
        nextSquare.classList.remove(className);
      } catch (ignore) {}
    }
    // for (let i=0;i<length;i++){
    //   try {
    //     let div = document.querySelector(`.board-1 [data-row='${y}'][data-column='${x+i}']`);
    //     if (div.classList.contains("placed-ship")) className = "red-highlight";
    //   } catch (ignore) {}
    // }
    // target.classList.remove(className);
    // let sibling = document.querySelector(
    //   `.board-1 [data-row='${y}'][data-column='${x + 1}']`
    // );
    // for (let i = 2; i <= length; i++) {
    //   try {
    //     sibling.classList.remove(className);
    //     sibling = document.querySelector(
    //       `.board-1 [data-row='${y}'][data-column='${x + i}']`
    //     );
    //   } catch (ignore) {}
    // }
  }else {
    let className = y<=10-length?"highlighted":"red-highlight";
    target.classList.remove(className);
    let sibling = document.querySelector(
      `.board-1 [data-row='${y + 1}'][data-column='${x}']`);
    for (let i = 2; i <= length; i++) {
      try {
        sibling.classList.remove(className);
        sibling = document.querySelector(
        `.board-1 [data-row='${y + i}'][data-column='${x}']`
        );
      } catch (ignore) {}
    }  
  }
}

function addShipToBoard(x, y, orient, length, boardNum) {
  for (let i = 0; i < length; i++) {
    // let div = document.querySelector(
    //   orient == "h"
    //     ? `.board-${boardNum} [data-row='${y}'][data-column='${x + i}']`
    //     : `.board-${boardNum} [data-row='${y + i}'][data-column='${x}']`
    // );
    let divs = document.querySelectorAll(".highlighted");
    divs.forEach(div=>{div.classList.add("placed-ship")});
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

export { prepareBoard, addShipToBoard, recordAttack, player1, comp };
