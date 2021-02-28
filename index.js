const tools = document.querySelectorAll(".box");
const Matirels = document.querySelectorAll("#Matirels div");
const restart = document.querySelector("#restart");
const ToolsIcons = document.querySelectorAll('.box img')
//matrix that hold all the values
let matrix = [];

// object save the matirals
let Matriel = {
  stone: 0,
  wood: 0,
  ground: 0,
  grass: 0,
  tree: 0,
  leaf: 0
};

let tool = ""; // the tool that is in use
let AddBlock = false; //this var will check if you can add block

//objects for the draw method
let stoneBlock = [
  [1, 1, 1],
  [1, 1, 1],
  [1, 1, 1],
];
let tree = [
  [2, 2, 2],
  [2, 2, 2],
  [2, 2, 2],
  [0, 1, 0],
  [0, 1, 0],
  [0, 1, 0],
];
let cloud = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
];
let wood = [
  [0, 1, 0],
  [0, 1, 0],
  [0, 1, 0],
  [0, 1, 0],
  [0, 1, 0],
];

// start the playboard depends on the screen size
const start = () => {
  let query = window.matchMedia("(max-width:700px)");
  console.log()
  let groundRow;

  if (query.matches) {
    row = 20;
    col = 10;
    groundRow = 12;
  } else {
    //items

    row = 20;
    col = 30;
    groundRow = 14;
  }

  for (let i = 0; i < row; i++) {
    matrix[i] = [];
    for (let j = 0; j < col; j++) {
      let div = document.createElement("div");
      matrix[i][j] = div;
      div.setAttribute("row", i);
      div.setAttribute("col", j);
      div.classList.add("sky");
      div.addEventListener("click", tileClick);
      MainContainer.appendChild(div);
    }
  }
  grass(groundRow);
  if(!query.matches){
      drawObjects(2, 5, "cloud", cloud);
      drawObjects(2, 22, "cloud", cloud);
      drawObjects(11, 5, "stone", stoneBlock);
      drawObjects(11, 5, "stone", stoneBlock);
      drawObjects(11, 22, "stone", stoneBlock);
      drawObjects(8, 12, ["tree", "leaf"], tree);
      drawObjects(8, 17, ["tree", "leaf"], tree);
      drawObjects(9, 26, "wood", wood);
  }else{
    drawObjects(2, 1, "cloud", [[1,1]]);
    drawObjects(2, 7, "cloud", [[1,1]]);
    drawObjects(6, 0, ["tree","leaf"],tree);
    drawObjects(6, 7, ["tree","leaf"],tree);
    drawObjects(10, 2, "stone",[[1,1,0],[1,1,1]]);
    drawObjects(9, 5, "wood",[[0,1,0],[0,1,0],[0,1]]);
  }
};

Matirels.forEach((p) => {
  p.addEventListener("click", () => {
    tool = p.classList.value;
    AddBlock = true;
    removeActive()
    p.classList.add('MatirelActive')
  });
});

// assign which tool is used
for (let i = 0; i < tools.length; i++) {
  tools[i].addEventListener("click", (p) => {
    tool = p.target.getAttribute("type");
    removeActive()
    p.target.classList.add('active')
    AddBlock = false;
  });
}

//restart the game
restart.addEventListener("click", () => {
  const MainConteiner = document.querySelectorAll("#MainContainer div");
  for (let i = 0; i < MainConteiner.length; i++) {
    MainConteiner[i].remove();
  }
  Matriel = {
    stone: 0,
    wood: 0,
    ground: 0,
    grass: 0,
    tree: 0,
    leaf: 0,
  };
  Matirels.forEach((p) => {
    p.innerHTML = 0;
  });

  start();
});

// take a tile from the board and add it to an object of matriels types
const tileClick = (e) => {
  if (!AddBlock) {
    if (
      e.target.classList.value === tool ||
      (tool === "ground" && e.target.classList.value === "grass") ||
      (tool === "wood" &&
        (e.target.classList.value === "tree" ||
          e.target.classList.value === "leaf"))
    ) {
      Matriel[e.target.classList.value] += 1;
      UpdateMatriel(e.target.classList.value);
      e.target.classList.remove(e.target.classList.value);
      e.target.classList.add("sky");
    }
  } else {
    if (Matriel[tool] > 0 && e.target.classList.value === "sky") {
      Matriel[tool] -= 1;
      console.log('--------------------')
      UpdateMatriel(tool);
      e.target.classList.remove("sky");
      e.target.classList.add(tool);
    }
  }
};

const UpdateMatriel = (ev) => {
  
    
    Matirels.forEach((p) => {
        let SP = p.classList.value.split(' ')
        console.log(SP[0])
    if (ev === SP[0]) {
      
      p.innerHTML = Matriel[ev];
    }
  });
};

const drawObjects = (row, colom, type, object) => {
  for (let i = 0; i < object.length; i++) {
    for (let j = 0; j < object[i].length; j++) {
     
      if (!Array.isArray(type)) {
        if (object[i][j] === 1) {
          matrix[row + i][colom + j].classList.remove(
            matrix[row + i][colom + j].classList.value
          );
          matrix[row + i][colom + j].classList.add(type);
        }
      } else {
        if (object[i][j] === 1) {
          matrix[row + i][colom + j].classList.remove(
            matrix[row + i][colom + j].classList.value
          );
          matrix[row + i][colom + j].classList.add(type[0]);
        } else if (object[i][j] === 2) {
          matrix[row + i][colom + j].classList.remove(
            matrix[row + i][colom + j].classList.value
          );
          matrix[row + i][colom + j].classList.add(type[1]);
        }
      }
    }
  }
};

const makeground = (index) => {
  for (let i = index; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      matrix[i][j].classList.remove("sky");
      matrix[i][j].classList.add("ground");
    }
  }
};

const grass = (index) => {
  for (let j = 0; j < matrix[0].length; j++) {
    matrix[index][j].classList.remove("sky");
    matrix[index][j].classList.add("grass");
  }
  makeground(index + 1);
};

const removeActive = () =>{
    tools.forEach(p=>{
        p.classList.remove('active')
    })
    ToolsIcons.forEach(p =>{
        p.classList.remove('active')
    })
    Matirels.forEach(p =>{
        p.classList.remove('MatirelActive')
    })
}

start();


