let result = document.getElementById("inputText");
let calculate = (number) =>{
    result.value +=  number;
}
let Result = ()=>{
    try{
        result.value = eval(result.value)
    }
    catch(err){
        alert('Syntax Error')
    }
}
function clr(){
    result.value = " ";
}
function del(){
    result.value = result.value.slice(0,-1);
}
function sin(){
    result.value = Math.sin(result.value)  ;
}
function cos(){
result.value = Math.cos(result.value);
}
function tan(){
result.value = Math.tan(result.value);
}
function log(){
result.value = Math.log10(result.value);
}
function expo(){
result.value = Math.pow(result.value,2);
}