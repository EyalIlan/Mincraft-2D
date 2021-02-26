



let matrix = []

let Matriel = {
    stone:0,
    wood:0,
    ground:0,
    grass:0,
    wood:0
}

// 20
// 30
let tool = 'ground'



// const InitMedia = () =>{
//     let query = window.matchMedia("(max-width:700px)")
//     if(query.matches){
//         start(20,20)
//     }else{
//         start(20,30)
//     }
// }





const start = (row,col) => {

    let query = window.matchMedia("(max-width:700px)")
    if(query.matches){
        row = 10
        col = 10
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
}


const tileClick  = (e) =>{
    
    if(e.target.classList.value === tool){
        console.log(e.target.classList.value)
        Matriel[e.target.classList.value] += 1
        e.target.classList.remove(tool)
        e.target.classList.add('sky')
    }  
}

const makeground = () =>{
    for(let i=15;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            matrix[i][j].classList.remove('sky')
            matrix[i][j].classList.add('ground')
           
     }
    }

} 

const grass = (index) =>{
        for(let j=0;j<matrix[14].length;j++){
            
            matrix[14][j].classList.remove('sky')
            matrix[14][j].classList.add('grass')
           
     }
    
}



const clouds = (row,colom) =>{

    for(let i=0;i<2;i++){
        for(let j=0;j<3;j++){

            matrix[row + i][colom+j].classList.remove('sky')
            matrix[row + i][colom+j].classList.add('cloud')
            
        }
}

}


const stones = () =>{

    for(let i = 5;i<martix[0].length;i++){

        matrix[row + i][colom+j].classList.remove('sky')
        matrix[row + i][colom+j].classList.add('cloud')

    }
}





// document.addEventListener('DOMContentLoaded',InitMedia);
start()
makeground()
clouds(1,5)
// clouds(1,23)
grass()




// 










