let output = document.getElementById("result");

function append(val) {
    output.innerHTML += val;
}

function backspace() {
    output.innerHTML = output.innerHTML.slice(0, -1);
}

function clearOutput() {
    output.innerHTML = "";
}

function calculate() {
    let equation = output.innerHTML;
    let result = eval(equation);
    output.innerHTML = result;
}
