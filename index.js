
const tools = document.querySelectorAll('.box')
const Matirels = document.querySelectorAll('#Matirels div')



//matrix that hold all the values
let matrix = []


// object 
let Matriel = {
    stone:0,
    wood:0,
    ground:0,
    grass:0
}


let tool = '' // the tool that is in use
let AddBlock = false //this var will check if you can add block


Matirels.forEach(p =>{
    p.addEventListener('click',()=>{
        AddBlock = true
    })
})



// start the playboard depends on the screen size
const start = (row,col) => {

    let query = window.matchMedia("(max-width:700px)")
    let groundRow = 6;
    
    if(query.matches){
        row = 20;
        col = 10;
        groundRow = 12
    }else{
       row = 20
       col = 30
    }

    for(let i=0;i<row;i++){
        matrix[i] = []
        for(let j=0;j<col;j++){
                let div = document.createElement('div')
                matrix[i][j] = div
                div.setAttribute('row',i)
                div.setAttribute('col',j)
                div.classList.add('sky')

                div.addEventListener('click',tileClick)

    

                MainContainer.appendChild(div)
        }
    }
    grass(groundRow)
}



// assign which tool is used
for(let i=0;i<tools.length;i++){
    tools[i].addEventListener('click',(p)=>{
        tool = p.target.getAttribute('type')    
    })
}


// take a tile from the board and add it to an object of matriels types
const tileClick  = (e) =>{
    console.log('clicked')
    console.log(AddBlock)
    if(!AddBlock){
        if(e.target.classList.value === tool){
            Matriel[e.target.classList.value] += 1
            UpdateMatriel(e.target.classList.value)
            e.target.classList.remove(tool)
            e.target.classList.add('sky')
        }
    }else{
        co
    }

}

const TileAddSelectHandler = () =>{

}


const UpdateMatriel = (ev) =>{
    Matirels.forEach(p=>{
          if(ev === p.classList.value){
              p.innerHTML = Matriel[ev]
          }  
        
    })
}

const makeground = (index) =>{
    for(let i=index;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            matrix[i][j].classList.remove('sky')
            matrix[i][j].classList.add('ground')
           
     }
    }

} 




const grass = (index) =>{
   
        for(let j=0;j<matrix[0].length;j++){

            matrix[index][j].classList.remove('sky')
            matrix[index][j].classList.add('grass')
           
     }
     makeground(index+1)
    
}



const clouds = (row,colom) =>{

    for(let i=0;i<2;i++){
        for(let j=0;j<3;j++){

            matrix[row + i][colom+j].classList.remove('sky')
            matrix[row + i][colom+j].classList.add('cloud')
            
        }
}

}


const stones = (index) =>{

    for(let i = 5;i<martix[0].length;i++){

        matrix[row + i][colom+j].classList.remove('sky')
        matrix[row + i][colom+j].classList.add('cloud')

    }
}






start()

clouds(1,5)
// clouds(4,1)





// 










