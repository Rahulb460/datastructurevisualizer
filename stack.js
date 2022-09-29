let stack = [];
var click = 0;
function count() {
    if (document.getElementById("7").value == "") {
        if (document.getElementById("text").value != "") {
            document.getElementById("waste").innerHTML = ++click;
            click = click;
            push();
        }
    }
    else{
        document.getElementById("text").value = "";
    }
}

function push() {
    var a = document.getElementById("text").value;
    stack.push(a);
    document.getElementById(click).value = stack[stack.length - 1];
    document.getElementById("text").value = "";
}

function pop() {
    stack.pop();
    document.getElementById(click).value = "";
    click = click - 1;
}

