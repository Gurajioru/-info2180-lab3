window.onload = function(){
    var tileNodes= document.getElementById('board').childNodes;
    tileNodes.forEach(element => {
        element.className="square";
        element.addEventListener('mouseover',function(event){
            event.preventDefault();
            element.classList.add('hover')
            console.log("hovering");
        })
        element.addEventListener('mouseout',function(event){
            event.preventDefault();
            element.classList.remove('hover');
        })
        console.log("add");
        //console.log(tileNodes);

        element.addEventListener('click',handleClick, {once: true})

        
    });

    var newGame= document.getElementsByClassName('btn')[0];
    newGame.addEventListener('click',function(event){
        console.log("reset clicked");
        window.location.reload();
        /*newCond=document.getElementById('status');
        newCond.classList.remove('you-won');
        newCond.textContent="Move your mouse over a square and click to play an X or an O."
        resetNodes=document.getElementByClassName('square');
        resetNodes.forEach(element=>{
            element.textContent="";
            element.classList.remove('X');
            element.classList.remove('Y');
        })*/
    });
}

var circleTurn=true;



//function reset(){
  //  console.log("clicked reset");
//}

function handleClick(e){
    console.log("clicked");
    var cell = e.target;
    swapTurn();
    if (circleTurn==false){
        cell.classList.add('X');
        cell.textContent="X";
    }else if (circleTurn==true){
        cell.classList.add('O');
        cell.textContent="O";
    }

    checkWin();
    //swapTurn();
   // cell.textContent="X";
    
}

function swapTurn(){
    circleTurn=!circleTurn;
}

function checkWin(){
    var cond=document.getElementById('status');
    var squareList=document.getElementsByClassName('square');
    console.log(squareList);
    if (squareList[0].textContent=="X" && squareList[1].textContent=="X" && squareList[2].textContent=="X"){
        console.log("winner");
        cond.textContent="Congratulations! X is the Winner!";
        cond.classList.add('you-won');
        
    }else if (squareList[0].textContent=="O" && squareList[1].textContent=="O" && squareList[2].textContent=="O"){
        console.log("winner");
        cond.textContent="Congratulations! O is the Winner!";
        cond.classList.add('you-won');
        
    }else if (squareList[3].textContent=="X" && squareList[4].textContent=="X" && squareList[5].textContent=="X"){
        console.log("winner");
        cond.textContent="Congratulations! X is the Winner!";
        cond.classList.add('you-won');
        
    }else if (squareList[3].textContent=="O" && squareList[4].textContent=="O" && squareList[5].textContent=="O"){
        console.log("winner");
        cond.textContent="Congratulations! O is the Winner!";
        cond.classList.add('you-won');
        
    }else if (squareList[6].textContent=="X" && squareList[7].textContent=="X" && squareList[8].textContent=="X"){
        console.log("winner");
        cond.textContent="Congratulations! X is the Winner!";
        cond.classList.add('you-won');
        
    }else if (squareList[6].textContent=="O" && squareList[7].textContent=="O" && squareList[8].textContent=="O"){
        console.log("winner");
        cond.textContent="Congratulations! O is the Winner!";
        cond.classList.add('you-won');
        
    }else if (squareList[0].textContent=="X" && squareList[3].textContent=="X" && squareList[6].textContent=="X"){
        console.log("winner");
        cond.textContent="Congratulations! X is the Winner!";
        cond.classList.add('you-won');
        
    }else if (squareList[0].textContent=="O" && squareList[3].textContent=="O" && squareList[6].textContent=="O"){
        console.log("winner");
        cond.textContent="Congratulations! O is the Winner!";
        cond.classList.add('you-won');
        
    }else if (squareList[1].textContent=="X" && squareList[4].textContent=="X" && squareList[7].textContent=="X"){
        console.log("winner");
        cond.textContent="Congratulations! X is the Winner!";
        cond.classList.add('you-won');
        
    }else if (squareList[1].textContent=="O" && squareList[4].textContent=="O" && squareList[7].textContent=="O"){
        console.log("winner");
        cond.textContent="Congratulations! O is the Winner!";
        cond.classList.add('you-won');
        
    }else if (squareList[2].textContent=="X" && squareList[5].textContent=="X" && squareList[8].textContent=="X"){
        console.log("winner");
        cond.textContent="Congratulations! X is the Winner!";
        cond.classList.add('you-won');
        
    }else if (squareList[2].textContent=="O" && squareList[5].textContent=="O" && squareList[8].textContent=="O"){
        console.log("winner");
        cond.textContent="Congratulations! O is the Winner!";
        cond.classList.add('you-won');
        
    }else if (squareList[0].textContent=="X" && squareList[4].textContent=="X" && squareList[8].textContent=="X"){
        console.log("winner");
        cond.textContent="Congratulations! X is the Winner!";
        cond.classList.add('you-won');
        
    }else if (squareList[0].textContent=="O" && squareList[4].textContent=="O" && squareList[8].textContent=="O"){
        console.log("winner");
        cond.textContent="Congratulations! O is the Winner!";
        cond.classList.add('you-won');
        
    }else if (squareList[6].textContent=="X" && squareList[4].textContent=="X" && squareList[2].textContent=="X"){
        console.log("winner");
        cond.textContent="Congratulations! X is the Winner!";
        cond.classList.add('you-won');
        
    }else if (squareList[6].textContent=="O" && squareList[4].textContent=="O" && squareList[2].textContent=="O"){
        console.log("winner");
        cond.textContent="Congratulations! O is the Winner!";
        cond.classList.add('you-won');
        
    }
    
    if (cond=="Congratulations! X is the Winner!" || cond=="Congratulations! O is the Winner!"){
        cond.readonly=true;
       squareList.forEach(element => {
           element.textContent.readonly=true;
       })
    }
}


