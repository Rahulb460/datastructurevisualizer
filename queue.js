let stack = [];
var click = 0;
var click1 = 0;
var click2 = 0;

function count() {
    if (document.getElementById("text").value != "") {
        document.getElementById("waste").innerHTML = ++click;
        click = click;
        enqueue();
    }
}

function enqueue() {
    var a = document.getElementById("text").value;
    stack.push(a);
    if(click > stack.length  && document.getElementById(click-1).value == ""){
        click = 1;
        document.getElementById(click).value = stack[stack.length - 1];
        document.getElementById("text").value = "";
    }
    else{
    var b = click;
        document.getElementById(b).value = stack[stack.length - 1];
        document.getElementById("text").value = "";
    }
}

function count1() {
    document.getElementById("waste2").innerHTML = ++click1;
     click1 = click1;
     click2 = click1;
    if(stack.length == 1  && document.getElementById(1).value == ""){
    //  click2 = click1;
        dequeue();
     }
    else if(stack.length == 1  && document.getElementById(1).value != ""){
     click2 = 1;
        dequeue();
     }

     dequeue();
}
function dequeue() {
    stack.splice(0, 1);
    document.getElementById(click2).value = "";
    if(stack.length == 0){
        window.location.assign("queue.html")
    }
}