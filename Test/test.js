var textBox = document.getElementById("txtBox");
var output = document.getElementById("txt");

document.getElementById("myBtn").onclick = displayName;
/* document.getElementById("myBtn").addEventlistener("click" , displayName); */

function displayName(){
    var input = textBox. value;
    output. innerHTML = "My Name Is " + input;
}
//This function displays user input in a sentence 