

// const  MainContainer = document.querySelector('#MainContainer')

// const area  = parseInt(window.getComputedStyle(MainContainer).width)
// const height = parseInt(window.getComputedStyle(MainContainer).height)

let matrix = []

let Matriel = {
    stone:0,
    wood:0,
    ground:0,
    grass:0,
    wood:0
}

let tool = 'ground'


const start = () =>{
    for(let i=0;i<20;i++){
        matrix[i] = []
        for(let j=0;j<30;j++){
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
    console.log(Matriel)
}


const makeground = (row) =>{
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
            // matrix[3][3].classList.add('cloud')
        }
    }

}


const stones = () =>{

    for(let i = 5;i<martix[0].length;i++){

        matrix[row + i][colom+j].classList.remove('sky')
        matrix[row + i][colom+j].classList.add('cloud')

    }
}






start()
makeground()
clouds(1,5)
clouds(1,23)
grass()




// 










