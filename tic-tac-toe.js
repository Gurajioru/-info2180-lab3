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

        element.addEventListener('click',handleClick, {once: true})
    });
}

var circleTurn=true;

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


    //swapTurn();
   // cell.textContent="X";
    
}

function swapTurn(){
    circleTurn=!circleTurn;
}





