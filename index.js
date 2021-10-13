function clearScreen(){
    document.getElementById("result").value = "";
}

//value show

function display(value){
    document.getElementById ("result").value += value
}

//result

function calculate (){
    var a = document.getElementById("result").value;
    var b = eval(p);
    document.getElementById("result").value = q;
}