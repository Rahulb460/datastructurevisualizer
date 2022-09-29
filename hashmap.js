// created a hashmap
var myMap = new Map();
var myMap2 = new Map();
var set = new Set();
var numbers = [1, 2, 3, 4, 5, 6];

// function for save key-value pair
function put() {
    var str1 = document.getElementById("text").value;
    var str2 = document.getElementById("text1").value;
    if (str1 != "" && str2 != "") {
        if (myMap.has(str1)) {
            myMap.set(str1, str2);
            var r = myMap2.get(str1);
            document.getElementById("value" + r).value = str2;
            document.getElementById("text").value = "";
            document.getElementById("text1").value = "";

        }
        else {
            myMap.set(str1, str2);

            var i = getNumber();

            var a = "key" + i;
            var b = "value" + i;

            myMap2.set(str1, i);

            document.getElementById(a).value = str1;
            document.getElementById(b).value = str2;

            document.getElementById("text").value = "";
            document.getElementById("text1").value = "";
        }
    }
}

function getNumber() {
    for (var a = [1, 2, 3, 4, 5, 6], i = a.length; i--;) {
        var x = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
        if (!set.has(x)) {
            set.add(x);
            return x;
        }
    }
}


// function for getkey
function getValue() {
    var str3 = document.getElementById("text2").value;
    var value = myMap.get(str3);
    document.getElementById("text4").value = value;
    document.getElementById("text2").value = "";
}

// for popup21
document.getElementById("button2").addEventListener("click", function () {
    document.querySelector(".popup21").style.display = "flex";
})
document.querySelector(".close4").addEventListener("click", function () {
    document.querySelector(".popup21").style.display = "none";
})
document.querySelector(".btn4").addEventListener("click", function () {
    document.querySelector(".popup21").style.display = "none";
})

// function for remove key
function remove() {
    
    var str4 = document.getElementById("text3").value;
    document.getElementById("text3").value = "";
    var str5 = myMap2.get(str4);
    document.getElementById("key" + str5).value = "";
    document.getElementById("value" + str5).value = "";
    myMap.delete(str4);
    myMap2.delete(str4);
    set.delete(str5);
}



