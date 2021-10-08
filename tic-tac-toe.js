window.onload = function(){
    var tileNodes= document.getElementById('board').childNodes;
    tileNodes.forEach(element => {
        element.className="square";
        console.log("add");
    });
}