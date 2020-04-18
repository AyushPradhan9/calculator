function display(num) {
    document.getElementById("output").value+=num ;        
} 
           
function equals() { 
    let a = document.getElementById("output").value ;
    let b = eval(a) ;
    document.getElementById("output").value = b ;
} 
           
function clr() { 
    document.getElementById("output").value = "" ;
} 