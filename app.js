
const inputColor = document.querySelector('#color-text');
const btnChange = document.querySelector('#btn-change');
const divOutput = document.querySelector("#output");

btnChange.addEventListener("click", clickHandler)

function clickHandler(){

    let colorValue = inputColor.value;
    console.log(colorValue)

    let outputText = divOutput.innerHTML
    console.log(outputText)

    divOutput.style.color= colorValue;

}