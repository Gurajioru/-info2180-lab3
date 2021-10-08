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

function handleClick(e){
    console.log("clicked");
}



//var hoverArray=document.getElementById('board').childNodes;
//console.log(hoverArray);
//hoverArray.forEach(element=> {
//    element.addEventListener('mouseover',function(event){
 //       element.className += "hover";
   //     console.log("hovering");
    //})
//})

