var item1;
var item2;
var item3;
    
document.getElementById("changeList").onclick = newList;
    
    function newList(){
    item1=prompt("Enter the first thing");
    item2=prompt("Enter the second thing");
    item3=prompt("Enter the third thing");
    item4=prompt("Enter the fourth thing");
    item5=prompt("Enter the fith thing");
    item6=prompt("Enter the sixth thing");
    updateList();
    }
function updateList() {
document.getElementById("o").innerHTML = item1;
document.getElementById("d").innerHTML = item2;
document.getElementById("g").innerHTML = item3;
document.getElementById("a").innerHTML = item4;
document.getElementById("c").innerHTML = item5;
document.getElementById("q").innerHTML = item6;
}