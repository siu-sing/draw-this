console.log("hello script js");

// var px = "🍍";

var px = "😽";
// outputElement = document.getElementById("output")
// outputElement.innerHTML = "What emoji would you like to use?"

var setBoard = function(){
  board = [
    ["X","X","X","X"],
    ["X","X","X","X"],
    ["X","X","X","X"],
    ["X","X","X","X"]
  ]
}

var setCursorPos = function(i,j){
  board[i][j]="c";
}

var displayBoard = function(){
    board.forEach(row => {
        var p = document.createElement("p")
        p.innerHTML = row.join("")
        document.getElementById("output").appendChild(p)
    });
}

var board = [[]];
var char = px;
setBoard();
setCursorPos(0,0);
displayBoard();

var inputHappened = function(currentInput){
  console.log( currentInput );
  display(currentInput);
};

var display="";

var display = function(stuffToDisplay){
};

//displayboard



var setCharPos = function(i,j){
  board[i][j]=char;
}
var getCursorPos = function(){
  let i = "";
  let j = "";
    board.forEach((row,idx) => {
      if(row.includes("c")==true){
        i = idx; //set i
        row.forEach((col,idx)=>{
          if(col==="c"){
            j = idx;
          }
        });
      }
    });
  return [i,j]
};
var moveCursor = function(direction,distance){
  let currPos = getCursorPos(); // [i,j]
  let i = currPos[0];
  let j = currPos[1];
  setBoard();
  switch (direction){
    case "right":
    setCursorPos(i,j+distance);
    break;
    case "left":
    setCursorPos(i,j-distance);
    break;
    case "up":
    setCursorPos(i-distance,j);
    break;
    case "down":
    setCursorPos(i+distance,j);
    break;
  }
}
//draw function (direction, distance) - replaces coordinates with char
//replace curr cursor position with char
//move cursor in direction, replace
var draw = function(direction,distance){

  let currPos = getCursorPos(); // [i,j]
  let i = currPos[0];
  let j = currPos[1];

  switch (direction){
    case "right":
      for(let c = 0; c < distance; c++){
        setCharPos(i,j+c)
      }
    break;
    case "left":
      for(let c = 0; c < distance; c++){
        setCharPos(i,j-c)
      }
    break;
    case "up":
      for(let c = 0; c < distance; c++){
        setCharPos(i-c,j)
      }
    break;
    case "down":
      for(let c = 0; c < distance; c++){
        setCharPos(i+c,j)
        console.log(i,c)
      }
    break;
  }
}

// var display = function(stuffToDisplay){
//   // your DOM manipulation code her

//     //user hasn't input an emoji
//     if (px===""){
//         //set emoji
//         px = stuffToDisplay;
//         outputElement.innerHTML = "";
//     } else {
//         //handling clear command
//         if(stuffToDisplay.toUpperCase().startsWith("CLEAR")==true){
//         clearP(stuffToDisplay.split(" ")[1]);
//         //handling multiple commands
//         } else {
//         //parse input
//         let inputArr = stuffToDisplay.split(" ");
//         //triangle
//         if (inputArr[0].toUpperCase() === "TRIANGLE") {
//             let triNum = inputArr[1];
//             let triArr = drawTriangle(triNum);
//             triArr.forEach(i => {
//                 document.getElementById("output").appendChild(i);
//             });
//         //rtriangle
//         } else if (inputArr[0].toUpperCase() === "RTRIANGLE"){
//             let triNum = inputArr[1];
//             let triArr = drawRtriangle(triNum);
//             triArr.forEach(i => {
//                 document.getElementById("output").appendChild(i);
//             });
//         } else {
//             inputArr.forEach(i=>{
//             document.getElementById("output").appendChild(drawRow(i));
//         });
//         }
//         }
//     }
// };

var drawTriangle = function(num){
    var displayArr = [];
    for(let i = 1; i <= num; i++){
        displayArr.push(drawRow(i));
    }
    return displayArr;
}

var drawRtriangle = function(num){
    var displayArr = [];
    for(let i = 1; i <= num; i++){
        let row = drawRow(i);
        let tmp = row.innerHTML;
        let space = "";
        for(let j = i; j<= num-1; j++){
            space+="&nbsp;&nbsp;&nbsp;&nbsp;"
        }
        row.innerHTML = space + tmp;
        displayArr.push(row);
    }
    return displayArr;
}

var clearP = function(row){
    //if no input, clear all
    console.log(row)
    if(row===undefined){
        //clear all
        document.getElementById("output").innerHTML=""
    } else {
        //clear child n
        let output = document.getElementById("output")
        output.removeChild(output.childNodes[row-1]);
    }
};

//return element with rows drawn.
var drawRow = function(num){
    let p = document.createElement("p");
    for(let i = 0; i < num; i++){
        p.innerHTML+=px;
    }
    return p
}

// 😽