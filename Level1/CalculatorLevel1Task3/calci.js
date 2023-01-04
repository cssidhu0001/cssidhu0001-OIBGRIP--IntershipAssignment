
function valueButton(valueFromUser){

    calculatorform.outputInput.value +=valueFromUser.value;
}
function ac(){
    calculatorform.outputInput.value =null;
}

function calculate(){
    calculatorform.outputInput.value=eval(document.getElementById("caclioperation").value)
}
function sqrt(){
    calculatorform.outputInput.value=Math.sqrt(document.getElementById("caclioperation").value)
}
function square(){
    let squareNumber=document.getElementById("caclioperation").value;
    calculatorform.outputInput.value=squareNumber*squareNumber;
}
function cube(){
    let cubeNumber=document.getElementById("caclioperation").value;
    calculatorform.outputInput.value=cubeNumber*cubeNumber*cubeNumber;
}
function mod(){

}

